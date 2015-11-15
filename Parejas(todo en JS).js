/*
Se necesita:
Una imagen por defecto (dorso.jpg) que sera visible cuando la imagen no haya sido tocada
Seis imagenes que seran visibles cuando el usuario haga click en las imagenes (dado1.jpg, dado2.jpg...)
*/

/*
Explicacion de las variables
i -> Para el proceso de crear las imagenes
j -> Para el proceso de crear las imagenes
x -> Para comprobar si se ha hecho clic antes
c -> Para comprobar que coinciden
u -> Para comprobar que no se toca dos veces el mismo elemento
array -> Para almacenar en que imagen se ha hecho clic
img -> Un array que contiene las 12 etiquetas de imagenes que se usan para las parejas
source -> Un array que contiene las imagenes que son usadas por parejas por duplicado
puntos -> Para contar los puntos que lleva el usuario
num -> Para conseguir un numero aleatorio que se usara para escoger la imagen
m -> es la imagen sobre la que se ha hecho clic
cuerpo -> Para guardar la etiqueta body en una variable
imagen1, imagen2... -> Cada imagen que contendra las parejas
boton -> El boton que reiniciara el juego
t -> Para añadir el texto que tendra el boton
input -> El contador de los puntos
*/

var cuerpo = document.getElementsByTagName("body")[0]
for (var i=0;i<cuerpo.childNodes.length ;i++){cuerpo.removeChild(cuerpo.childNodes[0])}
//Este fragmento de arriba para limpiar toda la pagina

var cuerpo = document.getElementsByTagName("body")[0];
var imagen1 = document.createElement("img")
imagen1.setAttribute("onclick","this.src = array[0];tocar(this)")
imagen1.setAttribute("src","dorso.jpg")
var imagen2 = document.createElement("img")
imagen2.setAttribute("onclick","this.src = array[1];tocar(this)")
imagen2.setAttribute("src","dorso.jpg")
var imagen3 = document.createElement("img")
imagen3.setAttribute("onclick","this.src = array[2];tocar(this)")
imagen3.setAttribute("src","dorso.jpg")
var imagen4 = document.createElement("img")
imagen4.setAttribute("onclick","this.src = array[3];tocar(this)")
imagen4.setAttribute("src","dorso.jpg")
var imagen5 = document.createElement("img")
imagen5.setAttribute("onclick","this.src = array[4];tocar(this)")
imagen5.setAttribute("src","dorso.jpg")
var imagen6 = document.createElement("img")
imagen6.setAttribute("onclick","this.src = array[5];tocar(this)")
imagen6.setAttribute("src","dorso.jpg")
var imagen7 = document.createElement("img")
imagen7.setAttribute("onclick","this.src = array[6];tocar(this)")
imagen7.setAttribute("src","dorso.jpg")
var imagen8 = document.createElement("img")
imagen8.setAttribute("onclick","this.src = array[7];tocar(this)")
imagen8.setAttribute("src","dorso.jpg")
var imagen9 = document.createElement("img")
imagen9.setAttribute("onclick","this.src = array[8];tocar(this)")
imagen9.setAttribute("src","dorso.jpg")
var imagen10 = document.createElement("img")
imagen10.setAttribute("onclick","this.src = array[9];tocar(this)")
imagen10.setAttribute("src","dorso.jpg")
var imagen11 = document.createElement("img")
imagen11.setAttribute("onclick","this.src = array[10];tocar(this)")
imagen11.setAttribute("src","dorso.jpg")
var imagen12 = document.createElement("img")
imagen12.setAttribute("onclick","this.src = array[11];tocar(this)")
imagen12.setAttribute("src","dorso.jpg")
var boton = document.createElement("button")
boton.setAttribute("onclick","reiniciar()")
var t = document.createTextNode("Reiniciar")
boton.appendChild(t)
var input = document.createElement("input")
input.setAttribute("disabled","disabled")
input.setAttribute("id","puntos")
input.setAttribute("value","0")
var i = 0;
var j = 12;
var img = new Array();
var source = new Array();
var x = 0;
var c;
var u;
var puntos = 0;
var array = new Array();


function iniciar(){
	//Inicia el juego
	//Por un lado le entran las etiquetas de los objetos img con el array del mismo nombre y por otro lado las imagenes que se usaran como parejas con el array source
	//Por medio de numeros aleatorios (num) conseguimos que el orden en el que aparecen las imagenes sea aleatorio
img = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12];
source = ["dado1.jpg", "dado2.jpg", "dado3.jpg", "dado4.jpg", "dado5.jpg", "dado6.jpg", "dado1.jpg", "dado2.jpg", "dado3.jpg", "dado4.jpg", "dado5.jpg", "dado6.jpg"];
	setTimeout( function() {
	while (j>0){
		var num = Math.random() * (j);
		if (num<0){num = (Math.floor(num))+1;} 
		else {num=(Math.floor(num));}
		array[i] = source[num];
		source.splice(num,1);
		i++;
		j--;
	}},100);
	}
	
	
function tocar(m){
	//Se ejecuta cada vez que el usuario toca una imagen
	//Recibe con m que imagen ha tocado el usuario, mirando x comprueba si ya ha tocado antes
	//Si es la primera vez guarda m en la variable c para comparar el valor de la imagen la siguiente vez y en la variable u para comprobar que no es el mismo e incrementa x
	//Si no es la primera vez comprueba si el valor coincide y no es el mismo, en caso negativo retorna el valor de la imagen al valor por defecto, en caso afirmativo añade un punto
	//Por ultimo comprueba si el usuario ha conseguido los 6 puntos y lanza un mensaje
	setTimeout(function(){if (x == 0){ c = m; u = m; x++;}
	else if (x == 1) {	
		if (m.src == c.src && u != m){
			puntos +=1;
			document.getElementById("puntos").value = puntos; x =0;
			}
		else { m.src = "dorso.jpg"; c.src = "dorso.jpg"; x=0;}
		};if (puntos==6){alert("Felicidades, has ganado");}},500);
}	


function reiniciar(){
	//Se ejecuta al clickar en el boton Reiniciar
	//Restaura el valor de las imagenes al valor por defecto y resetea los puntos a 0
	for (var i = 0;i<12;i++){
		(img[i]).src = "dorso.jpg";
		document.getElementById("puntos").value = 0;
		}
	}
	
//Se añaden los elementos a la pagina	
cuerpo.appendChild(imagen1)
cuerpo.appendChild(imagen2)
cuerpo.appendChild(imagen3)
cuerpo.appendChild(imagen4)
cuerpo.appendChild(imagen5)
cuerpo.appendChild(imagen6)
cuerpo.appendChild(imagen7)
cuerpo.appendChild(imagen8)
cuerpo.appendChild(imagen9)
cuerpo.appendChild(imagen10)
cuerpo.appendChild(imagen11)
cuerpo.appendChild(imagen12)
cuerpo.appendChild(boton)
cuerpo.appendChild(input)
iniciar()


//by Dobloq