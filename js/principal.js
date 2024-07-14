/* 3. TAXI EXPRESS
*La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por
*el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar
*ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre,
*tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2.
*Femenino). Es significativo para la empresa, obtener un reporte que contenga: a) Cantidad de
*clientes femeninas mayores de edad, b) cuál ha sido la menor edad atendida, c) promedio de
*edad de los clientes.
*Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
*el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo, Lin
*(18) corto, y Mary (15) largo:
*Cantidad de clientes femeninas mayores de edad: 2
*La menor edad atendida fue de 15 años
*El promedio de edad de los clientes es de 18 años*/



import Cl_cliente from "./cliente.js"
import Cl_empresa from "./empresa.js"

let cliente1 = new Cl_cliente("Juan", "corto", 20, "M");
let cliente2 = new Cl_cliente("Ana", "largo", 19, "F");
let cliente3 = new Cl_cliente("Lin", "corto", 18, "F");
let cliente4 = new Cl_cliente("Mary", "largo", 15, "F");

let empresa = new Cl_empresa();

empresa.procesarCliente(cliente1);
empresa.procesarCliente(cliente2);
empresa.procesarCliente(cliente3);
empresa.procesarCliente(cliente4);

let salida = document.getElementById("salida");
salida.innerHTML = "RESULTADOS";
salida.innerHTML += "<br>Total de clientes femeninas mayores de edad:"+" " + empresa.devolverCoNtFemenino();
salida.innerHTML += "<br>La menor edad atendida fue de"+" "+ empresa.devolverMenorEdad();
salida.innerHTML += "<br>El promedio de edad de los clientes es de:" +" "+ empresa.devolverPromedioEdad();