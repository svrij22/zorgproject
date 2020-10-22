<template>
    <div class="sidebar">
        <div class="form-group">
            <label for="z">Zoeken</label>
            <input class="form-control " id="z">
            <button class="btn btn-secondary" >Filters wissen</button>
        </div>
        <div class="filters">
            <filter-component :data="filterdata" v-for="filterdata in settings" :key="filterdata.name"/>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    import settings from "./filter_settings.json"
    import FilterComponent from "@/components/FilterComponent";
    export default {
        name: "FilterBarComponent",
        components: {FilterComponent},
        data: function(){
            return{
                settings: settings,
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
            }
        },
        methods: {
            containsSubSetting(){
                return _.find()
            },
            isObject(obj){
                return typeof obj === 'object' && obj !== null
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
        max-width: 300px;
    }
</style>