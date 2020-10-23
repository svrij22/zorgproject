<template>
    <div class="container">
        <top-filter/>
        <div class="listview">
            <filter-bar-component/>
            <div class="listing-group">
                <div class="page-bar">
                    <span>{{aantalResultaten}} Resultaten</span>
                    <span>Pagina {{pagina + 1}} van {{aantalPaginas}} </span>
                </div>
                <locatie-list-item-component :locatie="locatie" v-for="locatie in huidigePagina" :key="locatie.naam"/>
                <paginate
                        :page-count="aantalPaginas"
                        :prev-text="'&laquo;Vorige'"
                        :next-text="'Volgende&raquo;'"
                        :clickHandler="paginaClick"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                        :page-link-class="'page-link'"
                        :next-link-class="'page-link'"
                        :prev-link-class="'page-link'"
                        :disabled-class="'page-item disabled'">
                </paginate>
            </div>
        </div>
    </div>
</template>

<script>
    import LocatieListItemComponent from "@/components/FilterPage/LocatieListItemComponent";
    import locaties from "../test_data.json"
    import _ from 'lodash';
    import FilterBarComponent from "@/components/FilterPage/FilterBarComponent";
    import TopFilter from "@/components/FilterPage/TopFilter";

    export default {
        name: "ListViewComponent",
        components: {TopFilter, FilterBarComponent, LocatieListItemComponent},
        data: function(){
            return {
                locaties: locaties,
                pagina: 0,
                resultatenPerPagina: 12,
            }
        },
        computed:{
            aantalResultaten(){
                return _.size(this.locaties);
            },
            aantalPaginas(){
                return Math.ceil(this.aantalResultaten/this.resultatenPerPagina);
            },
            huidigePagina(){
                return _.chunk(this.locaties, this.resultatenPerPagina)[this.pagina];
            }
        },
        methods: {
            paginaClick(pagina){
                this.pagina = pagina-1;
            }
        }
    }
</script>

<style scoped>

    .listview{
        display: flex;
        flex-direction: row;
    }

    .container{
        margin-top: 30px;
        display: flex;
        flex-direction: column;
    }

    .pagination{
        justify-content: center;
    }

    .listing-group{
        margin-left: 20px;
        width: 100%;
    }

    .page-bar{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 30px;
    }
</style>