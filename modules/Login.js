function Login() {
  var pForm = kony.application.getCurrentForm();
  
  var userName = pForm.InputUserText.text; 
  var password = pForm.InputPasswordText.text; 
  
  if (userName=="prueba" && password=="prueba") {
    StockMarketForm.show();
  } else {
    alert("Your User Name and Password is Fail");
  }
}


  

