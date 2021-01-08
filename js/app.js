  function yourFunctionName() {
  //The start of your function 
    let celsiusCalc = parseFloat(document.getElementById("degrees").value);
     //degrees is the value inside the input box
    document.getElementById("getCelsius").innerHTML = Math.round(         
   //getCelsius the where it would put result of calculating
      celsiusCalc * (9 / 5) + 32
    );
  }


  