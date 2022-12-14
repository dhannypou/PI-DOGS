# APUNTES

# FUNCION FLECHA

Una funcione flecha es una funcion anonima que se puede guardar en una variable

const sumar = (a,b) => a + b;

# FUNCIONES

Una funcion es un bloque de codigo que se ejecuta cuando es llamada

function sumar(a,b){
    return a + b;
}

# OBJETOS

Un objeto es una coleccion de propiedades, y una propiedad es una asociacion entre un nombre (o clave) y un valor

var persona = {
    nombre: 'Dany',
    profesion: 'Desarrollador Web',
    edad: 500
}

# ARRAYS

Un array es un objeto especial que se utiliza para almacenar y acceder a datos

var colores = ['rojo', 'amarillo', 'azul'];

# CONDICIONALES

Un condicional es un bloque de codigo que se ejecuta si una condicion es verdadera

if(condicion){
    //codigo
}else{
    //codigo
}

# CICLOS

Un ciclo es un bloque de codigo que se ejecuta mientras una condicion es verdadera

while(condicion){
    //codigo
}

for(var i = 0; i < 10; i++){
    //codigo
}

# DOM

El DOM es una interfaz que provee una representacion estructural del documento HTML, permitiendo modificar su contenido y presentacion visual mediante codigo JS

# EVENTOS

Un evento es una accion o movimiento del usuario que se puede detectar con JS

# METODOS

Un metodo es una funcion que se ejecuta en un objeto

# PROPIEDADES

Una propiedad es una caracteristica de un objeto

# VARIABLES

Una variable es un contenedor de informacion

var nombre = 'Dany';

# TIPOS DE DATOS

String: Cadena de texto

var nombre = 'Dany';

Number: Numero

var edad = 500;

Boolean: Verdadero o falso

var soltero = true;

Array: Arreglo

var colores = ['rojo', 'amarillo', 'azul'];

Object: Objeto

var persona = {
    nombre: 'Dany',
    profesion: 'Desarrollador Web',
    edad: 500
}


# PROMESAS

Las promesas son objetos que se utilizan para computaciones asincronas. Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.

const promesa = new Promise((resolve, reject) => {
    if(condicion){
        resolve('Todo salio bien');
    }else{
        reject('Algo salio mal');
    }
});

promesa.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
});

.then() es una funci??n que se ejecuta cuando la promesa se cumple.
.cath() es una funci??n que se ejecuta cuando la promesa no se cumple.
.finally() es una funci??n que se ejecuta cuando la promesa se cumple o no se cumple.

# ASYNC AWAIT

Async await es una forma de escribir c??digo as??ncrono que se ve y se escribe como c??digo s??ncrono.

async function miFuncion(){
    return 'Hola Mundo';
}

miFuncion().then((resultado) => {
    console.log(resultado);
});

async es una palabra reservada que se usa para declarar una funci??n as??ncrona.
await es una palabra reservada que se usa para esperar una promesa.
 try...catch es una estructura de control que intenta ejecutar el c??digo dentro del bloque try y captura cualquier error que se produzca en el bloque catch.

# FETCH

Fetch es una API nativa de JavaScript que nos permite hacer peticiones HTTP y consumir servicios REST.

fetch('https://jsonplaceholder.typicode.com/users')
    .then((respuesta) => respuesta.json())
    .then((resultado) => console.log(resultado));

# CLASES

Las clases son plantillas para crear objetos. Un objeto es una instancia de una clase.

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'Media');
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

# HERENCIA

La herencia es un mecanismo que permite que un objeto obtenga propiedades y m??todos de otro objeto.

class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

class ComprasPendientes extends Tarea{
    constructor(nombre, prioridad, cantidad){
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad} y la cantidad de ${this.cantidad}`;
    }
}

let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
let tarea2 = new Tarea('Preparar cafe', 'Alta');
let tarea3 = new Tarea('Pasear al perro', 'Media');
let tarea4 = new Tarea('Conocer a mis suegros', 'Baja');

let compra1 = new ComprasPendientes('Jabon', 'Urgente', 3);
let compra2 = new ComprasPendientes('Shampoo', 'Urgente', 2);

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());

console.log(compra1.mostrar());
console.log(compra2.mostrar());

# MODULOS

Los m??dulos son fragmentos de c??digo reutilizables que pueden ser importados y exportados de otros m??dulos.

export const nombreTarea = 'Pasear al perro';

export default class Tarea{
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar(){
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

import Tarea, {nombreTarea} from './tareas.js';

const tarea1 = new Tarea('Aprender JavaScript', 'Alta');
console.log(tarea1.mostrar());
console.log(nombreTarea);

# WEBPACK

Webpack es un empaquetador de m??dulos para aplicaciones JavaScript modernas.

# BABEL

Babel es un transpilador de JavaScript moderno a JavaScript antiguo.


# REACT

React es una librer??a de JavaScript para crear interfaces de usuario.

#REACT-ROUTER

React Router es una colecci??n de componentes de navegaci??n para React.

# REDUX

Redux es una librer??a de JavaScript para manejar el estado de una aplicaci??n.

#REDUX-THUNK

Redux Thunk es un middleware que te permite escribir acciones as??ncronas que devuelven una funci??n en lugar de un objeto.

# REDUX-LOGGER

Redux Logger es un middleware que te permite registrar las acciones que se van a ejecutar en la aplicaci??n.

# REDUX-DEVTOOLS-EXTENSION

Redux DevTools Extension es una herramienta de desarrollo para Redux que permite inspeccionar el estado de la aplicaci??n.

# REACT-REDUX

React Redux es una librer??a de JavaScript que te permite conectar tu aplicaci??n de React con Redux.

# REACT-DEVTOOLS

React DevTools es una herramienta de desarrollo para React que permite inspeccionar el estado de la aplicaci??n.

# REACT-ROUTER-DOM

React Router DOM es una colecci??n de componentes de navegaci??n para React DOM.

# REACT-ROUTER-REDUX

React Router Redux es una colecci??n de componentes de navegaci??n para React Redux.

# AXIOS

Axios es una librer??a de JavaScript que nos permite hacer peticiones HTTP.

# MATERIAL-UI

Material-UI es una colecci??n de componentes de React que implementan Google Material Design.

# MATERIAL-UI-ICONS

Material-UI Icons es una colecci??n de iconos de React que implementan Google Material Design.

# MATERIAL-UI-CORE

Material-UI Core es una colecci??n de componentes de React que implementan Google Material Design.

# MATERIAL-UI-LAB

Material-UI Lab es una colecci??n de componentes de React que implementan Google Material Design.

# MATERIAL-UI-ICONS

Material-UI Icons es una colecci??n de iconos de React que implementan Google Material Design.

# REDUCER

Un reducer es una funci??n que recibe el estado actual y una acci??n, y devuelve un nuevo estado.

const reducer = (state, action) => {
    switch(action.type){
        case 'NOMBRE':
            return {
                ...state,
                nombre: action.payload
            }
        case 'APELLIDO':
            return {
                ...state,
                apellido: action.payload
            }
        default:
            return state;
    }
}

const store = createStore(reducer, {
    nombre: '',
    apellido: ''
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'NOMBRE',
    payload: 'Juan'
});

store.dispatch({
    type: 'APELLIDO',
    payload: 'Perez'
});

# ACTION

Una acci??n es un objeto que describe qu?? pas??.

const action = {
    type: 'NOMBRE',
    payload: 'Juan'
}

# STORE

Un store es el objeto que tiene el estado de tu aplicaci??n y te permite acceder al estado con store.getState(), actualizar el estado con store.dispatch(action) y registrar listeners con store.subscribe(listener).

const store = createStore(reducer, {
    nombre: '',
    apellido: ''
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'NOMBRE',
    payload: 'Juan'
});

store.dispatch({
    type: 'APELLIDO',
    payload: 'Perez'
});

# DISPATCH

El m??todo dispatch es la ??nica forma de actualizar el estado de la aplicaci??n.

store.dispatch({
    type: 'NOMBRE',
    payload: 'Juan'
});

# SUBSCRIBE

El m??todo subscribe te permite registrar un listener que se ejecutar?? cada vez que se actualice el estado de la aplicaci??n.

store.subscribe(() => {
    console.log(store.getState());
});

# PROVIDER

El componente Provider es un componente de React que te permite conectar tu aplicaci??n de React con Redux.

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

# CONNECT

El m??todo connect es una funci??n de alto orden que te permite conectar un componente de React con Redux.

import {connect} from 'react-redux';

const mapStateToProps = state => ({
    nombre: state.nombre,
    apellido: state.apellido
});

const mapDispatchToProps = dispatch => ({
    cambiarNombre: nombre => dispatch({
        type: 'NOMBRE',
        payload: nombre
    }),
    cambiarApellido: apellido => dispatch({
        type: 'APELLIDO',
        payload: apellido
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

# USE-SELECTOR

El hook useSelector te permite extraer datos del estado de la aplicaci??n.

import {useSelector} from 'react-redux';

const nombre = useSelector(state => state.nombre);
const apellido = useSelector(state => state.apellido);

# USE-DISPATCH

El hook useDispatch te permite ejecutar acciones en la aplicaci??n.

import {useDispatch} from 'react-redux';

const dispatch = useDispatch();

dispatch({
    type: 'NOMBRE',
    payload: 'Juan'
});

# USE-EFFECT

El hook useEffect te permite ejecutar c??digo despu??s de que se renderice el componente.

import {useEffect} from 'react';

useEffect(() => {
    console.log('Hola');
}, []);

# USE-STATE

El hook useState te permite crear un estado local en el componente.

import {useState} from 'react';

const [nombre, setNombre] = useState('');

# USE-CALLBACK

El hook useCallback te permite crear una funci??n que no cambia a menos que cambien sus dependencias.

import {useCallback} from 'react';

const cambiarNombre = useCallback(() => {
    console.log('Hola');
}, []);

# USE-CONTEXT

El hook useContext te permite acceder al contexto de React.

import {useContext} from 'react';

const nombre = useContext(NombreContext);

# USE-REDUCER

El hook useReducer te permite manejar el estado local de un componente con un reducer.

import {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case 'NOMBRE':
            return {
                ...state,
                nombre: action.payload
            }
        case 'APELLIDO':
            return {
                ...state,
                apellido: action.payload
            }
        default:
            return state;
    }
}

const [state, dispatch] = useReducer(reducer, {
    nombre: '',
    apellido: ''
});

# USE-MEMO

El hook useMemo te permite crear un valor que no cambia a menos que cambien sus dependencias.

import {useMemo} from 'react';

const nombre = useMemo(() => {
    return 'Juan';
}, []);

# USE-REF

El hook useRef te permite crear una referencia mutable.

import {useRef} from 'react';

const ref = useRef();

# USE-IMPERATIVE-HANDLE

El hook useImperativeHandle te permite personalizar la instancia expuesta a los componentes padres cuando se usa forwardRef.

import {useImperativeHandle} from 'react';

useImperativeHandle(ref, () => ({
    focus: () => {
        console.log('Hola');
    }
}));

# USE-LAYOUT-EFFECT

El hook useLayoutEffect te permite ejecutar c??digo despu??s de que se renderice el componente y despu??s de que se actualice el DOM.

import {useLayoutEffect} from 'react';

useLayoutEffect(() => {
    console.log('Hola');
}, []);

# USE-DEBUG-VALUE

El hook useDebugValue te permite mostrar un valor personalizado para un hook en React DevTools.

import {useDebugValue} from 'react';

useDebugValue(nombre);

# USE-CUSTOM-HOOK

Los hooks personalizados te permiten extraer l??gica de un componente.

import {useEffect} from 'react';

const useCustomHook = () => {
    useEffect(() => {
        console.log('Hola');
    }, []);
}

export default useCustomHook;

# USE-REDUX

El hook useRedux te permite conectar un componente de React con Redux.

import {useRedux} from 'react-redux';

const nombre = useRedux(state => state.nombre);
const apellido = useRedux(state => state.apellido);

# USE-REDUX-SELECTOR

El hook useReduxSelector te permite extraer datos del estado de la aplicaci??n.

import {useReduxSelector} from 'react-redux';

const nombre = useReduxSelector(state => state.nombre);
const apellido = useReduxSelector(state => state.apellido);

# USE-REDUX-DISPATCH

El hook useReduxDispatch te permite ejecutar acciones en la aplicaci??n.

import {useReduxDispatch} from 'react-redux';

const dispatch = useReduxDispatch();

dispatch({
    type: 'NOMBRE',
    payload: 'Juan'
});

# USE-REDUX-STATE

El hook useReduxState te permite acceder al estado de la aplicaci??n.

import {useReduxState} from 'react-redux';

const state = useReduxState();

# USE-REDUX-ACTION

El hook useReduxAction te permite ejecutar una acci??n en la aplicaci??n.

import {useReduxAction} from 'react-redux';

const cambiarNombre = useReduxAction('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-THUNK-ACTION

El hook useReduxThunkAction te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxThunkAction} from 'react-redux';

const cambiarNombre = useReduxThunkAction('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-THUNK-ACTION-ASYNC

El hook useReduxThunkActionAsync te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxThunkActionAsync} from 'react-redux';

const cambiarNombre = useReduxThunkActionAsync('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-THUNK-ACTION-ASYNC-AWAIT

El hook useReduxThunkActionAsyncAwait te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxThunkActionAsyncAwait} from 'react-redux';

const cambiarNombre = useReduxThunkActionAsyncAwait('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION

El hook useReduxSagaAction te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaAction} from 'react-redux';

const cambiarNombre = useReduxSagaAction('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC

El hook useReduxSagaActionAsync te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsync} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsync('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT

El hook useReduxSagaActionAsyncAwait te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwait} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwait('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT-ALL

El hook useReduxSagaActionAsyncAwaitAll te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwaitAll} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwaitAll('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT-R

El hook useReduxSagaActionAsyncAwaitR te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwaitR} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwaitR('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT-ALL-R

El hook useReduxSagaActionAsyncAwaitAllR te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwaitAllR} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwaitAllR('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT-ALL-RA

El hook useReduxSagaActionAsyncAwaitAllRA te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwaitAllRA} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwaitAllRA('NOMBRE');

cambiarNombre('Juan');

# USE-REDUX-SAGA-ACTION-ASYNC-AWAIT-ALL-RAR

El hook useReduxSagaActionAsyncAwaitAllRAR te permite ejecutar una acci??n as??ncrona en la aplicaci??n.

import {useReduxSagaActionAsyncAwaitAllRAR} from 'react-redux';

const cambiarNombre = useReduxSagaActionAsyncAwaitAllRAR('NOMBRE');

cambiarNombre('Juan');

# EXPORT CONST

El hook exportConst te permite exportar una constante.

import {exportConst} from 'react-redux';

exportConst('NOMBRE', 'Juan');

# EXPORT CONST-ASYNC

El hook exportConstAsync te permite exportar una constante as??ncrona.

import {exportConstAsync} from 'react-redux';

exportConstAsync('NOMBRE', 'Juan');

# EXPORT CONST-ASYNC-AWAIT

El hook exportConstAsyncAwait te permite exportar una constante as??ncrona.

import {exportConstAsyncAwait} from 'react-redux';

exportConstAsyncAwait('NOMBRE', 'Juan');


# NODEJS

Node.js es un entorno de ejecuci??n para JavaScript construido con el motor de JavaScript V8 de Chrome.
Node.js es un entorno de ejecuci??n multiplataforma, ya que funciona en Windows, macOS y Linux.
Node.js usa un modelo de E/S sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.
Node.js' paquete m??s popular es Express.
Node.js es gratuito y de c??digo abierto.

# EXPRESS

Express es un marco de aplicaci??n web de Node.js m??nimo y flexible que proporciona un conjunto s??lido de caracter??sticas para las aplicaciones web y m??viles.
Express es un marco de c??digo abierto, mantenido por la comunidad de desarrolladores de Node.js.
Express se usa para crear y configurar aplicaciones web y API.
Express es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# SQL

SQL es un lenguaje de dominio espec??fico utilizado en programaci??n, dise??ado para administrar y recuperar datos de un sistema de gesti??n de bases de datos relacionales.
SQL significa lenguaje de consulta estructurado.
SQL se usa para comunicarse con una base de datos.
SQL es un lenguaje de dominio espec??fico, lo que significa que es utilizado en un ??rea o campo espec??fico.
SQL es un lenguaje de programaci??n, lo que significa que es utilizado para crear aplicaciones.

# MONGODB

MongoDB es una base de datos no relacional, orientada a documentos y de c??digo abierto.
MongoDB es una base de datos de c??digo abierto, mantenido por la comunidad de desarrolladores de MongoDB.
MongoDB se usa para almacenar datos en forma de documentos JSON con esquemas.
MongoDB es una base de datos no relacional, lo que significa que no utiliza tablas tradicionales.
MongoDB es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# MONGOOSE

Mongoose es un ORM de MongoDB para Node.js.
Mongoose es una herramienta de c??digo abierto, mantenido por la comunidad de desarrolladores de MongoDB.
Mongoose se usa para modelar los datos de la aplicaci??n.
Mongoose es un ORM, lo que significa que es una abstracci??n de la base de datos.

# GIT

Git es un sistema de control de versiones para el mantenimiento eficiente y confiable de archivos.
Git es un sistema de control de versiones de c??digo abierto, mantenido por la comunidad de desarrolladores de Git.
Git se usa para controlar el c??digo en un proyecto.
Git es un sistema de control de versiones, lo que significa que es utilizado para administrar diferentes versiones de un proyecto.
Git es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

comandos de git

git init
git add .
git commit -m "mensaje"
git remote add origin
git push -u origin master
git pull origin master
git clone
git status
git log
git checkout
git branch
git merge
git stash
git stash pop
git stash list
git stash drop
git stash apply
git stash clear
git reset
git reset --hard
git reset --soft
git reset --mixed
git reset HEAD
git reset HEAD^
git reset HEAD~1
git reset HEAD~2



# GITHUB

GitHub es un servicio de alojamiento de repositorios de c??digo con control de versiones usando Git.
GitHub es un servicio de alojamiento de c??digo abierto, mantenido por GitHub.
GitHub se usa para almacenar proyectos de c??digo.
GitHub es un servicio de alojamiento de c??digo, lo que significa que es utilizado para almacenar proyectos de c??digo.
GitHub es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# HEROKU

Heroku es una plataforma en la nube que permite a los desarrolladores construir, ejecutar y operar aplicaciones en la web.
Heroku es una plataforma en la nube de c??digo abierto, mantenido por Salesforce.
Heroku se usa para desplegar aplicaciones web.
Heroku es una plataforma en la nube, lo que significa que es utilizado para alojar aplicaciones web.
Heroku es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# JAVASCRIPT

JavaScript es un lenguaje de programaci??n interpretado, dialecto del est??ndar ECMAScript.
JavaScript es un lenguaje de programaci??n de c??digo abierto, mantenido por la comunidad de desarrolladores de JavaScript.
JavaScript se usa para crear aplicaciones web interactivas.
JavaScript es un lenguaje de programaci??n, lo que significa que es utilizado para crear aplicaciones.

# HTML

HTML es un lenguaje de marcado para la elaboraci??n de p??ginas web.
HTML es un lenguaje de marcado de c??digo abierto, mantenido por la comunidad de desarrolladores de HTML.
HTML se usa para crear p??ginas web.
HTML es un lenguaje de marcado, lo que significa que es utilizado para crear p??ginas web.
HTML es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

elementos de html

h1 - h6: encabezados
p: p??rrafo
a: enlace
img: imagen
ul: lista desordenada
ol: lista ordenada
li: elemento de lista
table: tabla
tr: fila de tabla
td: celda de tabla
th: celda de encabezado de tabla
form: formulario
input: campo de entrada
button: bot??n
div: divisi??n
span: secci??n
header: encabezado
footer: pie de p??gina
nav: navegaci??n
section: secci??n
article: art??culo
aside: contenido lateral
main: contenido principal
details: detalles
summary: resumen
dialog: di??logo
canvas: lienzo
audio: audio
video: video
source: fuente
track: pista
embed: incrustar
object: objeto
param: par??metro
map: mapa
area: ??rea
script: script
noscript: sin script
style: estilo
title: t??tulo
meta: metadatos
link: enlace
base: base
head: encabezado
body: cuerpo
html: html

ejemplo de html

<!-- <!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html> -->


# CSS


CSS es un lenguaje de hojas de estilo que describe el dise??o de documentos HTML.
CSS es un lenguaje de hojas de estilo de c??digo abierto, mantenido por la comunidad de desarrolladores de CSS.
CSS se usa para dar estilo a p??ginas web.
CSS es un lenguaje de hojas de estilo, lo que significa que es utilizado para dar estilo a p??ginas web.
CSS es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

El * en CSS es un selector universal que selecciona todos los elementos de la p??gina web.

ejemplo de css

* {
    box-sizing: border-box;
}

elementos de css

display: block; //para que el elemento se muestre en bloque
display: inline; //para que el elemento se muestre en linea
display: inline-block; //para que el elemento se muestre en linea y en bloque
display: none; //para que el elemento no se muestre
display: flex; //para que el elemento se muestre en flex
display: grid; //para que el elemento se muestre en grid

position: static; //para que el elemento se muestre en su posicion normal
position: relative; //para que el elemento se muestre en su posicion normal pero se puede mover
position: absolute; //para que el elemento se muestre en su posicion normal pero se puede mover y se puede posicionar en cualquier parte de la pagina
position: fixed; //para que el elemento se muestre en su posicion normal pero se puede mover y se puede posicionar en cualquier parte de la pagina pero se mantiene en la misma posicion cuando se hace scroll

float: left; //para que el elemento se muestre a la izquierda
float: right; //para que el elemento se muestre a la derecha

margin: 0 auto; //para que el elemento se muestre en el centro

padding: 0; //para que el elemento no tenga padding

width: 100%; //para que el elemento ocupe todo el ancho de la pagina

height: 100%; //para que el elemento ocupe todo el alto de la pagina

background-color: #000; //para que el elemento tenga un color de fondo

color: #fff; //para que el elemento tenga un color de texto

font-size: 16px; //para que el elemento tenga un tama??o de texto

font-weight: bold; //para que el elemento tenga un peso de texto

font-style: italic; //para que el elemento tenga un estilo de texto

text-align: center; //para que el elemento tenga un alineacion de texto

text-decoration: underline; //para que el elemento tenga un decoracion de texto

text-transform: uppercase; //para que el elemento tenga un transformacion de texto

border: 1px solid #000; //para que el elemento tenga un borde

border-radius: 5px; //para que el elemento tenga un borde redondeado

box-shadow: 0 0 5px #000; //para que el elemento tenga una sombra

opacity: 0.5; //para que el elemento tenga una opacidad

z-index: 1; //para que el elemento tenga un indice de profundidad

transition: all 0.5s ease; //para que el elemento tenga una transicion

transform: rotate(45deg); //para que el elemento tenga una transformacion

animation: mymove 5s infinite; //para que el elemento tenga una animacion

@keyframes mymove {
    from {top: 0px;}
    to {top: 200px;}
}



# BOOTSTRAP

Bootstrap es un framework de c??digo abierto para dise??o de sitios y aplicaciones web.
Bootstrap es un framework de c??digo abierto, mantenido por la comunidad de desarrolladores de Bootstrap.
Bootstrap se usa para crear sitios web responsivos.
Bootstrap es un framework, lo que significa que es utilizado para crear sitios web.
Bootstrap es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# JQUERY

jQuery es una biblioteca de JavaScript de c??digo abierto dise??ada para simplificar la manera de interactuar con los documentos HTML, manipular el ??rbol DOM, manejar eventos, desarrollar animaciones y agregar interacci??n con la t??cnica AJAX a p??ginas web.
jQuery es una biblioteca de JavaScript de c??digo abierto, mantenido por la comunidad de desarrolladores de jQuery.
jQuery se usa para simplificar la manera de interactuar con los documentos HTML.
jQuery es una biblioteca de JavaScript, lo que significa que es utilizado para simplificar la manera de interactuar con los documentos HTML.
jQuery es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# AJAX

AJAX es una t??cnica de desarrollo web para crear aplicaciones interactivas.
AJAX es una t??cnica de desarrollo web de c??digo abierto, mantenido por la comunidad de desarrolladores de AJAX.
AJAX se usa para crear aplicaciones web interactivas.
AJAX es una t??cnica de desarrollo web, lo que significa que es utilizado para crear aplicaciones web interactivas.
AJAX es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# JSON

JSON es un formato de texto ligero para el intercambio de datos.
JSON es un formato de texto ligero de c??digo abierto, mantenido por la comunidad de desarrolladores de JSON.
JSON se usa para intercambiar datos.
JSON es un formato de texto ligero, lo que significa que es utilizado para intercambiar datos.
JSON es una herramienta de c??digo abierto, lo que significa que es gratis para usar.

# ES6

ES6 es una nueva versi??n de JavaScript.

# DOM

DOM es una interfaz de programaci??n de aplicaciones que representa documentos HTML y XML como nodos y objetos que pueden ser modificados.

# HTML5

HTML5 es una nueva versi??n de HTML.

# CSS3

CSS3 es una nueva versi??n de CSS.

# PHP

PHP es un lenguaje de programaci??n de c??digo abierto, muy popular, especialmente adecuado para el desarrollo web y que puede ser incrustado dentro de HTML.

# MYSQL

MySQL es un sistema de gesti??n de bases de datos, que utiliza lenguaje SQL como interfaz.


# METODOS DE ARRAY

.map() crea un nuevo array con los resultados de la llamada a la funci??n indicada aplicados a cada uno de sus elementos.
.filter() crea un nuevo array con todos los elementos que cumplan la condici??n implementada por la funci??n dada.
.reduce() ejecuta una funci??n reductora sobre cada elemento de un array, devolviendo como resultado un ??nico valor.
.sort() ordena los elementos de un array de forma ascendente, y devuelve el array ordenado.
.find() devuelve el valor del primer elemento del array que cumple con la funci??n de prueba proporcionada.
.forEach() ejecuta la funci??n indicada una vez por cada elemento del array.
.includes() determina si un array incluye un determinado elemento, devuelve true o false seg??n corresponda.
.join() une todos los elementos de un array en una cadena y devuelve esta cadena.
.slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificar??.
.splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
.split() divide un objeto de tipo String en un array (vector) de cadenas mediante la separaci??n de la cadena en subcadenas.
.indexOf() devuelve el primer ??ndice en el que se puede encontrar un elemento dado en el array, ?? devuelve -1 si el elemento no est?? presente.
.lastIndexOf() devuelve el ??ltimo ??ndice en el que se puede encontrar un elemento dado en el array, ?? devuelve -1 si el elemento no est?? presente.
.push() a??ade uno o m??s elementos al final de un array y devuelve la nueva longitud del array.
.pop() elimina el ??ltimo elemento de un array y lo devuelve. Este m??todo cambia la longitud del array.
.shift() elimina el primer elemento de un array y lo devuelve. Este m??todo cambia la longitud del array.
.unshift() a??ade uno o m??s elementos al inicio de un array y devuelve la nueva longitud del array.
.concat() devuelve un nuevo array que es una combinaci??n de dos o m??s arrays.
.flat() crea una nueva matriz con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.
.toString() devuelve una cadena que representa al objeto especificado.
.valueOf() devuelve el valor primitivo del objeto especificado.
.reverse() invierte los elementos de un array en el lugar. El primer elemento se convierte en el ??ltimo y el ??ltimo en el primero.
.copyWithin() copia una secuencia de valores de un array a otro array.
.fill() rellena todos los elementos de un array desde un ??ndice hasta otro ??ndice con un valor statico.
.entries() devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada ??ndice en el array.
.every() comprueba si todos los elementos del array pasan por la prueba implementada por la funci??n dada.
.some() comprueba si al menos un elemento del array pasa la prueba implementada por la funci??n dada.
.keys() devuelve un nuevo objeto Array Iterator que contiene las claves para cada ??ndice en el array.
.values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada ??ndice en el array.
.from() crea una nueva instancia de Array a partir de un objeto iterable.
.of() crea una nueva instancia de Array a partir de un n??mero variable de argumentos, independientemente del n??mero o del tipo de los argumentos.
.toSource() devuelve el c??digo fuente del objeto Array.
.toLocaleString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toLocaleString.
.toPrecision() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toPrecision.
.toFixed() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toFixed.
.toExponential() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toExponential.
.toDateString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toDateString.
.toTimeString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toTimeString.
.toUTCString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toUTCString.
.toISOString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toISOString.
.toJSON() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toJSON.
.toGMTString() devuelve una cadena que representa al objeto especificado. La cadena est?? formada por los elementos del array separados por comas. Los elementos se convierten a cadenas usando su m??todo toGMTString.

# METODOS DE OBJETOS

Object.assign() copia todas las propiedades enumerables de uno o m??s objetos fuente a un objeto destino. Devuelve el objeto destino.
Object.create() crea un nuevo objeto, usando un objeto existente como el prototipo del nuevo objeto.
Object.defineProperties() define nuevas o modifica propiedades existentes directamente en un objeto, devolviendo el objeto.
Object.defineProperty() define una nueva propiedad directamente en un objeto, o modifica una propiedad existente en un objeto, y devuelve el objeto.
Object.entries() devuelve una matriz de pares clave/valor de todas las propiedades enumerables de un objeto dado, en el mismo orden que se proporciona en un bucle for...in (la diferencia es que un bucle for-in enumera propiedades en la cadena de prototipos).
Object.freeze() congela un objeto: esto previene que se agreguen nuevas propiedades al objeto; previene que se eliminen las propiedades existentes; y previene que se modifiquen las propiedades existentes y sus atributos. En esencia el objeto es inmutable. El m??todo devuelve el objeto congelado.
Object.fromEntries() devuelve un objeto a partir de una matriz de pares clave/valor.
Object.getOwnPropertyDescriptor() devuelve una descripci??n de la propiedad para una propiedad espec??fica en un objeto dado.
Object.getOwnPropertyDescriptors() devuelve todas las propiedades descriptores de un objeto dado.
Object.getOwnPropertyNames() devuelve un array con los nombres de todas las propiedades del objeto, incluidas las no enumerables.
Object.getOwnPropertySymbols() devuelve un array con los s??mbolos de todas las propiedades del objeto, incluidas las no enumerables.
Object.getPrototypeOf() devuelve el prototipo (es decir, el valor de la propiedad interna [[Prototype]]) de un objeto dado.
Object.is() compara si dos valores son el mismo valor.
Object.isExtensible() determina si un objeto es extensible (si puede tener propiedades nuevas agregadas a ??l).
Object.isFrozen() determina si un objeto est?? congelado.
Object.isSealed() determina si un objeto est?? sellado.
Object.keys() devuelve un array con los nombres de todas las propiedades del objeto, en el mismo orden que se proporciona en un bucle for...in (la diferencia es que un bucle for-in enumera propiedades en la cadena de prototipos).
Object.preventExtensions() previene que se agreguen nuevas propiedades a un objeto (pero no impide que se eliminen las propiedades existentes o que se modifiquen las propiedades existentes y sus atributos).
Object.seal() sella un objeto, previniendo que se agreguen nuevas propiedades y marcando todas las propiedades existentes como no configurables. Valores existentes de las propiedades pueden ser cambiados siempre y cuando sean escritos de nuevo. El m??todo devuelve el objeto sellado.
Object.setPrototypeOf() establece el prototipo (es decir, la propiedad interna [[Prototype]]) de un objeto a otro objeto o valor nulo.
Object.values() devuelve un array con los valores de todas las propiedades del objeto, en el mismo orden que se proporciona en un bucle for...in (la diferencia es que un bucle for-in enumera propiedades en la cadena de prototipos).

# METODOS DE RUTAS

path.basename() devuelve el ??ltimo segmento de una ruta. Similar a la funci??n Unix basename.
path.delimiter es el separador de rutas de acceso del sistema operativo. ; en Windows y : en POSIX.
path.dirname() devuelve el directorio de una ruta. Similar a la funci??n Unix dirname.
path.extname() devuelve la extensi??n de la ruta, desde el ??ltimo '.' hasta el final de la cadena en el ??ltimo segmento de la ruta. Si no hay '.' en el ??ltimo segmento de la ruta o si el primer car??cter de la extensi??n es '.', entonces se devuelve una cadena vac??a. Si la ruta termina en un directorio separador, entonces se devuelve una cadena vac??a. Ejemplos:
path.format() devuelve la ruta formateada a partir del objeto de ruta.
path.isAbsolute() determina si una ruta es absoluta. Una ruta absoluta es una ruta que se resuelve desde el ra??z del sistema. Ejemplos:
path.join() une todos los segmentos de ruta especificados en una ruta. Ejemplos:
path.normalize() normaliza una ruta, resolviendo '..' y '.' segmentos.
path.parse() devuelve un objeto de ruta de un objeto de ruta.
path.posix es un objeto de ruta similar a path, pero siempre usa separadores de ruta POSIX.
path.relative() devuelve la ruta relativa desde from a to basada en el directorio actual.
path.resolve() resuelve una secuencia de rutas o segmentos de ruta en una ruta absoluta.
path.sep es el separador de ruta de acceso del sistema operativo. \ en Windows y / en POSIX.
path.toNamespacedPath() devuelve la ruta con el prefijo de ruta de acceso de espacio de nombres.
path.win32 es un objeto de ruta similar a path, pero siempre usa separadores de ruta Windows.

# METODOS DE STRING

String.fromCharCode() devuelve una cadena creada mediante la especificaci??n de una secuencia de valores Unicode.
String.fromCodePoint() devuelve una cadena creada mediante la especificaci??n de una secuencia de puntos de c??digo Unicode.
String.raw() devuelve una cadena de caracteres "cruda", sin procesar, en la que las barras invertidas (\) no tienen ning??n significado especial.
String.prototype.anchor() crea un elemento HTML <a name="name">. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.big() crea un elemento HTML <big>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.blink() crea un elemento HTML <blink>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.bold() crea un elemento HTML <b>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.charAt() devuelve el car??cter en la posici??n especificada de una cadena.
String.prototype.charCodeAt() devuelve un n??mero que indica el valor Unicode del car??cter en la posici??n especificada de una cadena.
String.prototype.codePointAt() devuelve un n??mero que indica el valor Unicode del car??cter en la posici??n especificada de una cadena.
String.prototype.concat() concatena dos o m??s cadenas, y devuelve una nueva cadena.
String.prototype.constructor devuelve la funci??n que cre?? la instancia del objeto String.
String.prototype.endsWith() determina si una cadena termina con los caracteres de una cadena de b??squeda especificada, devolviendo true o false seg??n corresponda.
String.prototype.fixed() crea un elemento HTML <tt>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.fontcolor() crea un elemento HTML <font color="color">. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.fontsize() crea un elemento HTML <font size="size">. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.includes() determina si una cadena puede encontrarse dentro de otra cadena, devolviendo true o false seg??n corresponda.
String.prototype.indexOf() devuelve el ??ndice dentro de la cadena de la primera aparici??n del valor especificado, o -1 si no se encuentra.
String.prototype.italics() crea un elemento HTML <i>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.lastIndexOf() devuelve el ??ndice dentro de la cadena de la ??ltima aparici??n del valor especificado, o -1 si no se encuentra.
String.prototype.link() crea un elemento HTML <a href="url">. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.localeCompare() compara dos cadenas en el orden espec??fico del idioma actual.
String.prototype.match() busca una coincidencia entre una expresi??n regular y una cadena.
String.prototype.normalize() devuelve la forma de descomposici??n especificada de una cadena.
String.prototype.padEnd() rellena la cadena actual con otra cadena (repetida, si es necesario) hasta que alcance la longitud especificada. El relleno se aplica desde el final (derecha) de la cadena actual.
String.prototype.padStart() rellena la cadena actual con otra cadena (repetida, si es necesario) hasta que alcance la longitud especificada. El relleno se aplica desde el principio (izquierda) de la cadena actual.
String.prototype.repeat() devuelve una nueva cadena que contiene el n??mero especificado de copias de la cadena sobre la que se invoca, concatenadas juntas.
String.prototype.replace() busca una cadena para una coincidencia con una expresi??n regular, y devuelve una nueva cadena donde se reemplazan las coincidencias.
String.prototype.search() ejecuta la b??squeda de una coincidencia entre una expresi??n regular y una cadena. Devuelve true o false seg??n corresponda.
String.prototype.slice() extrae una secci??n de una cadena y devuelve una nueva cadena.
String.prototype.small() crea un elemento HTML <small>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.split() divide una cadena en un array de subcadenas.
String.prototype.startsWith() determina si una cadena comienza con los caracteres de una cadena de b??squeda especificada, devolviendo true o false seg??n corresponda.
String.prototype.strike() crea un elemento HTML <strike>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.sub() crea un elemento HTML <sub>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.substr() extrae los caracteres de una cadena, comenzando en el ??ndice especificado y devuelve una nueva cadena.
String.prototype.substring() extrae los caracteres de una cadena entre dos ??ndices especificados, y devuelve una nueva cadena.
String.prototype.sup() crea un elemento HTML <sup>. Si el nombre contiene caracteres no v??lidos, se lanzar?? una excepci??n.
String.prototype.toLocaleLowerCase() devuelve el valor de una cadena convertido a min??sculas seg??n el caso de la cadena actual.
String.prototype.toLocaleUpperCase() devuelve el valor de una cadena convertido a may??sculas seg??n el caso de la cadena actual.
String.prototype.toLowerCase() devuelve el valor de una cadena convertido a min??sculas.
String.prototype.toString() devuelve una cadena que representa al objeto especificado.
String.prototype.toUpperCase() devuelve el valor de una cadena convertido a may??sculas.
String.prototype.trim() elimina los espacios en blanco al principio y al final de una cadena.
String.prototype.trimLeft() elimina los espacios en blanco al principio de una cadena.
String.prototype.trimRight() elimina los espacios en blanco al final de una cadena.
String.prototype.valueOf() devuelve el primitivo valor de una cadena.

# M??todos est??ticos

String.fromCharCode() devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificados.
String.fromCodePoint() devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificados.
String.raw() devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificados.

Propiedades

String.prototype.length devuelve el n??mero de caracteres de una cadena.

Ejemplos

// Crear una cadena
var cadena = "Hola Mundo";

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.charAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.charAt(cadena.length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena[0];

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena[cadena.length - 1];

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.slice(0, 1);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.slice(-1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.substring(0, 1);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.substring(cadena.length - 1, cadena.length);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.substr(0, 1);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.substr(cadena.length - 1, 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.split("")[0];

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.split("").pop();

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.match(/./)[0];

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.match(/.$/)[0];

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.replace(/^(.)/, "$1");

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.replace(/(.)/, "$1");

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.search(/./);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.search(/.$/);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.indexOf(cadena.match(/./)[0]);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.lastIndexOf(cadena.match(/.$/)[0]);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.codePointAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.codePointAt(cadena.length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.charCodeAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.charCodeAt(cadena.length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena[Symbol.iterator]().next().value;

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena[Symbol.iterator]().next().value;

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.normalize().charAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.normalize().charAt(cadena.normalize().length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.normalize().codePointAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.normalize().codePointAt(cadena.normalize().length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.normalize().charCodeAt(0);

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.normalize().charCodeAt(cadena.normalize().length - 1);

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.normalize().match(/./)[0];

// Obtener el ??ltimo car??cter de la cadena
var ultimoCaracter = cadena.normalize().match(/.$/)[0];

// Obtener el primer car??cter de la cadena
var primerCaracter = cadena.normalize().replace(/^(.)/, "$1");
