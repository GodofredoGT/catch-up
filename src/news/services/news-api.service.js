import axios from "axios";
import {LogoApiService} from "../../shared/services/logo-api.service.js";
//es una instanccia - quiero una constante no queiro poner a cada rato poner el inicio de esa ruta

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});
const NEWS_API_KEY=import.meta.env.VITE_NEWS_API_KEY;

export class NesApiService{
    apiKey = NEWS_API_KEY;
    logoAPI=new LogoApiService();
    //solo se programa la peticion
    getSource(){
        return http.get(`/top-headlines/sources?apiKey=${this.apiKey}`)
    }
    getArticlesForSource(sourceId){
        return http.get(`/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
    }

    getUrlToLogo(source){
        return this.logoAPI.getUrlToLogo(source);
    }
}