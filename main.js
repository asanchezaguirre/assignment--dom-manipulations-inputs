document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1
      document.querySelector(".ex1-text").value = "";

  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  

  // TASK #2
  var msjFlash = document.querySelector(".ex2-text");
  var msjFlasLength = msjFlash.value.length;
  if(msjFlasLength < 6){
  	document.querySelector(".flash-message").classList.add ("invalid");
  	document.querySelector(".flash-message").classList.remove ("valid");
  	document.querySelector(".flash-message").innerHTML = "Input not long enough";
  } else {
  	document.querySelector(".flash-message").classList.remove ("invalid");
  	document.querySelector(".flash-message").classList.add ("valid");
  	document.querySelector(".flash-message").innerHTML = "Field valid";
  }

})
 

document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
  //creo variable total
  var total = 0;
  // creo variable para integrar a todos los elementos de la clase
  var listaTodos = document.querySelectorAll('.item-input')
 //iteramos
  for(var i = 0; i < listaTodos.length; i++){
    //agrego condicional para emplear si checked es verdadera en alguno de los index de la iteracion
    if (listaTodos[i].checked == true) {
      //entonces, total será igual a total del valor entero del index.(paseInt devuelve un entero de una cadena)
      total = total + parseInt(listaTodos[i].value);
    }
  }
  //el contenido del texto de la clase sum sera igual a signo de pesos concatenado con la variable del total
  document.querySelector(".sum-total").textContent = "$" + total
})


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4

 //Declaramos las variables que contienen los elementos
  var contenedorCambios = document.querySelector('.img-box')
  var seleccion = document.querySelector('.selection')
  var modelo = document.querySelector('.model')
  var msrp = document.querySelector('.msrp')
  var mpg = document.querySelector('.mpg')
  var raiting = document.querySelector('.edmunds')
  var auto = document.querySelectorAll('option')

    //iteramos sobre la variable que contiene las opciones de los tres autos
    for (var i = 0; i < auto.length; i++) {
      //Si el indice de la lista desplegable es igual a cero y el index de auto es igual a clase minicooper entonces
      //pintar datos minicooper
      if(seleccion.selectedIndex === 0 && auto[i].value === "Mini Cooper"){
        contenedorCambios.innerHTML = "<img src='images/"+ auto[i].dataset.img + "'></img>"
        modelo.textContent = auto[i].value
        msrp.textContent = auto[i].dataset.msrp
        mpg.textContent = auto[i].dataset.mpg
        raiting.textContent = auto[i].dataset.raiting
        //Si el indice de la lista desplegable es igual a uno y el index de auto es igual a clase Mazda entonces
      //pintar datos Mazda
      } else if (seleccion.selectedIndex == 1 && auto[i].value === "Mazda 3" )  {
        contenedorCambios.innerHTML = "<img src='images/"+ auto[i].dataset.img + "'></img>"
        modelo.textContent = auto[i].value
        msrp.textContent = auto[i].dataset.msrp
        mpg.textContent = auto[i].dataset.mpg
        raiting.textContent = auto[i].dataset.raiting
          //Si el indice de la lista desplegable es igual a dos y el index de auto es igual a clase Dodger entonces
      //pintar datos Dodger
      }else if (seleccion.selectedIndex == 2 && auto[i].value === "Dodge Charger") {
        contenedorCambios.innerHTML = "<img src='images/"+ auto[i].dataset.img + "'></img>"
        modelo.textContent = auto[i].value
        msrp.textContent = auto[i].dataset.msrp
        mpg.textContent = auto[i].dataset.mpg
        raiting.textContent = auto[i].dataset.raiting
      }
    }
})

 
