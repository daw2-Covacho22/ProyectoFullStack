/*----------------CONSTANTES----------------*/
token = localStorage.getItem("token"); //token almacenado
refreshToken = ""; //refreshtoken
user = ""; //array de usuario
useradd = ""; //usuario que pone el usuario al hacer login
passadd = ""; //password que pone el usuario al hacer login
username = ""; //usuario logeado nombre
urlApi = "http://localhost:8000"; //Url de la API
const mainUI = document.querySelector("main");
const menuUI = document.querySelector("#menu");
const tituloPaginaUI = document.querySelector("#tituloPaginaUI");

/*----------------IMPORTS----------------*/
import { homeHtml } from "./homeHtml.js";
import { tituloPaginaHtml } from "./tituloPaginaHtml.js";
import { recetasListaHtml } from "./recetasListaHtml.js";
import { recetaEditarHtml } from "./recetaEditarHtml.js";
import { recetaCrearHtml } from "./recetaCrearHtml.js";
import { recetaCardHtml } from "./recetaCardHtml.js";
import { menuHtml } from "./menuHtml.js";
import { loginHtml, login, logout } from "./loginHtml.js";
