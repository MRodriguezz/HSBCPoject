var PositionMatrix = [{w:"70%", t:"20%"}, {w:"74%", t:"14%"}, {w:"68%", t:"10%"}, {w:"63%", t:"6%"}];

function MoveStocks(flexBoxNumbers, options) { 
  if(options==5) {
    var centerX = "150%";        
    moveStockBoxesSelected(flexBoxNumbers, centerX);
  } else if(options==3){
    var centerXLeft = "-150%";
    moveStockBoxesSelected(flexBoxNumbers, centerXLeft);
  }
}
function moveStockBoxesSelected(flexBoxNumbers, center) {
  var pForm = kony.application.getCurrentForm();
  
  pForm["Stock" + flexBoxNumbers].animate(
  	kony.ui.createAnimation({
      "100":{"centerX": center,
            "stepConfig": {"timingFunction": kony.anim.EASE}}}),
    {"fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": 0.5},
    {"animationEnd": function(){
      
    }}
  );
  switch(flexBoxNumbers) {
    case 1:
      var nameCaseOne = "Stock2";
      pForm[nameCaseOne].animate(
      kony.ui.createAnimation({
        "100":{"width": "70%",
              "top": "20%",
              "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
        {"delay": 0.4, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": 0.25},
        {"animationEnd": function(){
          var suma = "Stock" + flexBoxNumbers + 1;
          
          var stock3 = "Stock3";
          pForm[stock3].width = "74%";
          pForm[stock3].top = "14%";
          
          var stock4 = "Stock4";
          pForm[stock4].width = "68%";
          pForm[stock4].top = "10%";
        }}
        );
      break;
    case 2:
      var nameCaseTwo = "Stock3";
      pForm[nameCaseTwo].animate(
      	kony.ui.createAnimation({
        "100":{"width": "70%",
              "top": "20%",
              "stepConfig":{"timingFunction": kony.anim.EASEIN}}}),
        {"delay": 0.4, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": 0.25},
        {"animationEnd": function(){
          var stock4 = "Stock4";
          pForm[stock4].width = "63%";
          pForm[stock4].top = "6%";
        }}
      );
      break;
    case 3:
      var nameCaseThree = "Stock4";
      pForm[nameCaseThree].animate(
        kony.ui.createAnimation({
          "100":{"top": "20%",
          		"width": "70%",
          		"stepConfig":{"fillMode": kony.anim.EASEIN}}}),
          {"delay": 0.4, "fillMode": kony.anim.FILL_MODE_FORWARDS, "duration": 0.25},
          {"animationEnd": function(){
          }}
        );
        break;
	case 3:
        break;
      }
  }
  
  
  
  
  
  
 