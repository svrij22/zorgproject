<template>
    <div class="filter-box" v-show="showCategory">
        <b-button
                :class="isVisible ? null : 'collapsed'"
                :aria-expanded="isVisible ? 'true' : 'false'"
                :aria-controls="data.field"
                @click="isVisible = !isVisible"
                variant="light"
                size="sm"
                class="filter-text">
            {{data.name}}
            <v-icon :name="!isVisible ? 'plus' : 'minus'"/>
        </b-button>
        <b-collapse :id="data.field" v-model="isVisible" class="mt-2">
            <b-form-group class="input-group-style">
                <div v-if="data.filterType == 'radio'">
                    <div v-for="option in filteredOptions" :key="option">
                        <b-form-radio v-if="!isObject(option)" v-model="data.value" :value="option" >{{option}}</b-form-radio>
                        <filter-component :data="option" v-else/>
                    </div>
                </div>
                <div v-else>
                    <b-form-checkbox-group stacked v-model="data.value">
                        <div v-for="option in filteredOptions" :key="option">
                            <b-form-checkbox v-if="!isObject(option)" :value="option" >{{option}}</b-form-checkbox>
                            <filter-component :search-str="searchStr" :data="option" v-else/>
                        </div>
                    </b-form-checkbox-group>
                </div>
            </b-form-group>
        </b-collapse>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: ["data", "searchStr"],
        name: "FilterComponent",
        data: function () {
            return {
                isVisible: true,
            }
        },
        computed:{
            filteredOptions(){
                return _.filter(this.data.options, (option) =>{
                    if (this.isObject(option)) return true;
                    let tempOption = option.toLowerCase();
                    return tempOption.includes(this.searchStr.toLowerCase()) || this.categoryContainsStr
                })
            },
            categoryContainsStr(){
                try{
                    return this.data.name.toLowerCase().includes(this.searchStr.toLowerCase())
                }catch (e) {
                    return true;
                }
            },
            showCategory(){
                return _.size(this.filteredOptions) > 0 || this.categoryContainsStr;
            }
        },
        methods: {
            isObject(obj){
                return typeof obj === 'object' && obj !== null
            }
        }
    }
</script>

<style scoped>
    .btn{
       width: 100%;
    }

    .filter-text{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-radius: 0;
        background-color: #f1f1f1;
        font-weight: bolder;
        border: none;
    }

    .custom-checkbox,
    .custom-radio{
        padding: 3px 20px;
    }

    .input-group-style{
        text-align: left;
        margin-left: 16px;
    }
</style>