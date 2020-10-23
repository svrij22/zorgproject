<template>
    <div class="page-container">
        <div class="main-content">
            <div v-if="renderComponent">
                <domain-object-component :domain="zorglocatie" :data="testdata"></domain-object-component>
            </div>
        </div>
    </div>
</template>

<script>
    import DomainObjectComponent from "@/components/Panel/DomainObjectComponent";
    import testdata from "../test_data2.json";

    export default {
        name: "MainComponent",
        components: {DomainObjectComponent},
        data: function () {
            return {
                testdata: testdata,
                renderComponent: true,
                zorglocatie: {
                    title: "Zorglocaties",
                    objectName: "zorglocatie",
                    controllerUrl: "/zorglocatie",
                    identifier: "id",
                    fields: [
                        {
                            field: "id",
                            name: "nummer",
                            type: 'input',
                            editable: false,
                            searchable: false,
                            width: 100
                        },
                        {field: "naam", name: "naam", editable: true, type: 'input', searchable: false},
                        {field: "straat", name: "straat", editable: true, type: 'input', searchable: true},
                        {field: "postcode", name: "postcode", editable: true, type: 'input', searchable: true},
                        {field: "stad", name: "stad", editable: true, type: 'input', searchable: true},
                        {field: "img", name: "plaatje", editable: false, type: 'image', searchable: false},
                    ],
                    canAddNew: true
                },
            }
        }
    }
</script>

<style scoped>
    .page-container {
        display: flex;
        flex-direction: row;
        min-height: 100%;
    }

    .main-content {
        min-height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>