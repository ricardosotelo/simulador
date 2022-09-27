
alert ("bienvenido a stock center");
let stock= 0; 
while (stock <= 2 ){ 
let pedido = prompt ("elija entre las siguientes marcas nike - adidas - reebook "); 

if (pedido === "nike") {
    let talle = prompt ("elija talle 35-36-37");
    alert ("ud ah seleccionado nike talle: "+ talle);
    stock ++;
     
}
else if (pedido === "adidas"){
    let talle = prompt ("elija talle 35-36-37");
    alert ("ud ah seleccionado adidas: "+ talle);
    stock ++;
}
else if (pedido === "reebook"){
    let talle = prompt ("elija talle 35-36-37");
    alert ("ud ah seleccionado  reebook: "+ talle );
    stock ++;
}
else {
    alert ("ingrese una de las opciones indicadas");
} 
}

alert ("no hay mas stock");



