<template>
    <div class="zoek-page">
        <h1>{{ domain.title }}</h1>

        <!--Table -->
        <table style="margin-top: 20px">

            <!--Table head-->
            <thead>
                <tr>
                    <th v-for="field in domain.fields" :key="'field' + field" :style="fieldStyle(field)">
                        <div class="field-holder">
                            {{ field.name | capitalize}}
                            <input v-model="searchObject[field.name]" v-if="field.type == 'input'" class="form-control" @change="doSearch"/>
                            <datetime v-model="searchObject[field.name]" type="datetime" v-if="field.type == 'date'" input-class="form-control"></datetime>
                        </div>
                    </th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                <!--Table row-->
                <tr v-for="item in filteredData" :key="'lh' + item">
                    <td v-for="field in domain.fields" :key="'field' + field" :style="fieldStyle(field)">
                        <input v-model="item[field.field]" class="form-control" :readonly="!field.editable" v-if="field.type == 'input'">
                        <datetime v-model="item[field.field]" type="datetime" v-if="field.type == 'date'" input-class="form-control"></datetime>
                        <img :src="getImage(item[field.field])" v-if="field.type == 'image'" class="miniature">
                    </td>
                    <td class="btn-td"><button class="btn btn-info form-control btn-sm" @click="updateObject(item)">Save</button></td>
                    <td class="btn-td"><button class="btn btn-danger form-control btn-sm" @click="removeObject(item[domain.identifier])">Remove</button></td>
                </tr>

                <!--Table row add-->
                <tr v-if="domain.canAddNew">
                    <td v-for="field in domain.fields" :key="'field' + field" :style="fieldStyle(field)">
                        <input v-model="newDomainObject[field.field]" class="form-control" :readonly="!field.editable">
                    </td>
                    <td class="btn-td"><button class="btn btn-info form-control btn-sm" @click="saveNewObject(newDomainObject)">Save</button></td>
                    <td class="btn-td"></td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-if="canPrev" @click="page-=1" class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">{{page}}</a></li>
                <li v-if="canNext" class="page-item" @click="page+=1"><a class="page-link" href="#">Next</a></li>
            </ul>
        </nav>
    </div>
</template>

<script>
import axios from "axios";
import _ from 'lodash';

export default {
    name: "DomainObjectComponent",
    props: ['domain', 'data'],
    data: function () {
        return {
            searchStr: "",
            newDomainObject: {},
            page: 0,
            searchObject: {},
            test: null
        }
    },
    computed: {
        filteredData(){
            return _.chunk(this.data, 13)[this.page];
        },
        pageNum(){
            return _.size(_.chunk(this.data, 13));
        },
        canPrev(){
            return this.page > 0;
        },
        canNext(){
            return this.page < this.pageNum-1;
        }
    },
    methods: {
        getAll() {
            console.log(this.domain)
            axios({
                url: this.$restip + this.domain.controllerUrl + "/alle/",
                method: 'get',
                headers: {
                    Authorization: localStorage.getItem("logintoken")
                }
            }).then((res) => {
                console.log(res)
                // this.data = res.data;
            }).catch((error) => {
                this.$store.commit('seterror', error.response)
            });
        },
        doSearch(){
            axios({
                url: this.$restip + this.domain.controllerUrl + "/zoek/",
                method: 'post',
                headers: {
                    Authorization: localStorage.getItem("logintoken")
                },
                data: {
                    zoekValues: this.searchObject
                }
            }).then((res) => {
                this.page = 0;
                this.data = res.data;
            }).catch((error) => {
                this.$store.commit('seterror', error.response)
            });
        },
        searchFunc() {
            axios({
                url: this.$restip + this.domain.controllerUrl + "/zoek/" + this.searchStr,
                method: 'get',
                headers: {
                    Authorization: localStorage.getItem("logintoken")
                }
            }).then((res) => {
                this.page = 0;
                this.data = res.data;
            }).catch((error) => {
                this.$store.commit('seterror', error.response)
            });
        },
        removeObject(luchthavenNr) {
            this.doAxiosCall("/remove/", luchthavenNr)
        },
        updateObject(object) {
            this.doAxiosCall("/bewerk/", object)
        },
        saveNewObject(object) {
            this.doAxiosCall("/nieuw/", object)
        },
        doAxiosCall(url, object){
            axios({
                url: this.$restip + this.domain.controllerUrl + url,
                method: 'post',
                headers: {
                    Authorization: localStorage.getItem("logintoken"),
                    'Content-Type': 'application/json'
                },
                data: object
            }).then((res) => {
                console.log(res)
                this.getAll();
            }).catch((error) => {
                this.$store.commit('seterror', error.response)
            });
        },
        fieldStyle(field){
            if (field.width){
                return {'max-width': field.width + 'px'}
            }
        },
        getImage(url){
            return require('../../assets/'+url)
        }
    },
    mounted() {
        this.getAll();
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style lang="scss" scoped>

    .zoek-page {
        padding: 10px;
        margin-top: 40px;
    }

    .top-bar {
        display: flex;
        flex-direction: row;
    }

    .search-bar {
        display: flex;
        flex-direction: row;
        width: 100%;
    }

    span.form-control {
        border: none;
        text-align: left;
        text-transform: capitalize;
        font-weight: bold;
    }

    /*Table*/

    body {
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 12px;
        color: #444;
    }

    table {
        border: 2px solid #6c0d1a;
        border-radius: 3px;
        background-color: #fff;
        width: 100%;
    }

    th {
        background-color: #7d1423;
        color: rgba(255, 255, 255, 0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f9f9f9;

        & input{
            padding: 5px 8px;
            font-size: 0.9rem;
        }
    }

    th{
        padding: 5px 10px;
    }

    .btn-td{
        width: 80px;
    }

    .miniature{
        max-height: 36px;
    }

    .pagination{
        margin-top: 20px;

        & a{
            color: rgba(255, 255, 255, 0.66)!important;
            font-weight: bold;
            background-color: #000000;
            border: 1px solid #ffffff;
            padding: 10px 20px;
        }
    }
</style>