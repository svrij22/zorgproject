<template>
    <div class="sidebar">
        <div class="form-group">
            <label for="z">Zoeken</label>
            <input class="form-control " id="z" v-model="searchStr">
            <button class="btn btn-secondary" @click="deleteFilters" v-if="hasFilters">Filters wissen</button>
        </div>
        <div class="filters">
            <filter-component :data="filterdata" v-for="filterdata in settings" :key="filterdata.name" :search-str="searchStr"/>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    import settings from "../filter_settings.json"
    import FilterComponent from "@/components/FilterPage/FilterComponent";
    export default {
        name: "FilterBarComponent",
        components: {FilterComponent},
        data: function(){
            return{
                settings: settings,
                searchStr: ""
            }
        },
        computed:{
            selectionMap(){
                let flatSettings = {};
                _.each(settings, (setting) =>{
                    _.each(setting.options, (field) => {
                       if (this.isObject(field)) flatSettings[field.name] = field.value;
                    });
                    flatSettings[setting.name] = setting.value
                })
                return flatSettings
            },
            hasFilters(){
                return _.size(
                    _.filter(this.selectionMap, (selection) =>{
                        return !(selection == null || selection == "");
                    })
                ) > 0 || this.searchStr != "";
            }
        },
        methods: {
            containsSubSetting(){
                return _.find()
            },
            isObject(obj){
                return typeof obj === 'object' && obj !== null
            },
            deleteFilters(){
                _.each(this.settings, (setting) =>{
                    setting.value = [];
                })
                this.searchStr = "";
            }
        }
    }
</script>

<style scoped>

    .form-group{
        text-align: left;
    }

    .btn-secondary{
        width: 100%;
        margin-top: 8px;
    }

    .filters{
        margin-top: 10px;
    }
    .sidebar{
        min-width: 250px;
        max-width: 250px;
    }
</style>