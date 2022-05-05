/*----------------CONSTANTES----------------*/
token = localStorage.getItem('token')
refreshToken = ""
user = ""
password = ""
mainUI = document.querySelector('main');
migaUI = document.querySelector('.miga');
menuUI = document.querySelector('#menu');
tituloPaginaUI = document.querySelector('#tituloPaginaUI');
urlApi = "http://localhost:8000"

/*----------------IMPORTS----------------*/
import {homeHtml, cargando} from "./homeHtml.js"