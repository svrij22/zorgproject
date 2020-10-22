<template>
    <div class="filter-box">
        <b-button
                :class="isVisible ? null : 'collapsed'"
                :aria-expanded="isVisible ? 'true' : 'false'"
                :aria-controls="data.field"
                @click="isVisible = !isVisible"
                size="sm"
                class="filter-text">
            {{data.name}}
            <v-icon :name="!isVisible ? 'plus' : 'minus'"/>
        </b-button>
        <b-collapse :id="data.field" v-model="isVisible" class="mt-2">
            <b-form-group class="input-group-style">
                <div v-if="data.filterType == 'radio'">
                    <div v-for="option in data.options" :key="option">
                        <b-form-radio v-if="!isObject(option)" v-model="data.value" :value="option" >{{option}}</b-form-radio>
                        <filter-component :data="option" v-else/>
                    </div>
                </div>
                <div v-else>
                    <b-form-checkbox-group stacked v-model="data.value">
                        <div v-for="option in data.options" :key="option">
                            <b-form-checkbox v-if="!isObject(option)" :value="option" >{{option}}</b-form-checkbox>
                            <filter-component :data="option" v-else/>
                        </div>
                    </b-form-checkbox-group>
                </div>
            </b-form-group>
        </b-collapse>
    </div>
</template>

<script>
    export default {
        props: ["data"],
        name: "FilterComponent",
        data: function () {
            return {
                isVisible: true,
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