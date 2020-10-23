import VueRouter from "vue-router";
import ZorgLocatiePreviewPage from "@/components/ZorgLocatiePreviewPage";
import ListViewComponent from "@/components/FilterPage/ListViewComponent";
import AuthComponent from "@/components/AuthComponent";
import HomePageComponent from "@/components/HomePageComponent";

export default new VueRouter({
    routes: [
        {path: '/', component: HomePageComponent},
        {path: '/listing', component: ListViewComponent},
        {path: '/locatie', component: ZorgLocatiePreviewPage},
        {path: '/login', component: AuthComponent}
    ]
})