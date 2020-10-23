import VueRouter from "vue-router";
import ZorgLocatiePreviewPage from "@/components/Preview/ZorgLocatiePreviewPage";
import ListViewComponent from "@/components/FilterPage/ListViewComponent";
import AuthComponent from "@/components/Authorization/AuthComponent";
import HomePageComponent from "@/components/HomePageComponent";
import EditorComponent from "@/components/Panel/EditorComponent";

export default new VueRouter({
    routes: [
        {path: '/', component: HomePageComponent},
        {path: '/listing', component: ListViewComponent},
        {path: '/locatie', component: ZorgLocatiePreviewPage},
        {path: '/login', component: AuthComponent},
        {path: '/editor', component: EditorComponent}
    ]
})