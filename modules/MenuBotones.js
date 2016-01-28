/*Funcion de el navbar header, el cual me permite que a la hora que preciono
cualquier boton del menu me cambien de form y me seleccione en el boton en el
que me encuentro posicionado.*/
function navbarHide(BtnUnhide, BtnHideOne, BtnHideTwo){
  var pForm = kony.application.getCurrentForm();
  
  pForm[BtnUnhide].isVisible = true;
  pForm[BtnHideOne].isVisible = false;
  pForm[BtnHideTwo].isVisble = false;
}

/*Funcion de el navbar footer, este me sirve para cuando le doy clic a cualquiera
de los botones del footer se seleccionen.*/
function navbarFooter(BtnVisible, BtnHideRate, BtnHideProduct, BtnHideAtm){
  var pForm = kony.application.getCurrentForm();
  
  pForm[BtnVisible].isVisible = true;
  pForm[BtnHideRate].isVisible = false;
  pForm[BtnHideProduct].isVisible = false;
  pForm[BtnHideAtm].isVisible = false;
}
