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
import {tituloPaginaHtml} from "./tituloPaginaHtml.js"
import {recetasListaHtml} from "./recetasListaHtml.js"
import {recetaEditarHtml} from "./recetaEditarHtml.js"
import {recetaCrearHtml} from "./recetaCrearHtml.js"
import {recetaCardHtml} from "./recetaCardHtml.js"
import {menuHtml} from "./menuHtml.js"
import {loginHtml, login, logout} from "./loginHtml.js"
