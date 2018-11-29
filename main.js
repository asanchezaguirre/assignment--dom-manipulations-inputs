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
  
  //console.log(msjFlasLength);

})
 

document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3
})


document.querySelector("#select-to-show-more-btn").addEventListener('click', function(){
  // TASK #4
})
