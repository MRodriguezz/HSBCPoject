function loadGlobalVariables(){
  
  segDataTab = [];
}
function loadSegData(){
  
  segDataTab = [];
  
  NewsForm.segData.widgetDataMap = {lblTmplAboutData:"lblTmplAboutData","lblTmplAboutData1":"lblTmplAboutData1","lblTemplAboutData2":"lblTemplAboutData2","lblTmplAboutData3":"lblTmplAboutData3","lblTmplAboutData4":"lblTmplAboutData4","lblTmplAboutData5":"lblTmplAboutData5",imgArrow:"imgArrow",imgArrow2:"imgArrow2",imgArrow3:"imgArrow3","lblOpen":"lblOpen","lblHigh":"lblHigh","lblLow":"lblLow","lblOpenValue":"lblOpenValue","lblHighValue":"lblHighValue","lblLowValue":"lblLowValue","lblEPS":"lblEPS","lblMKTCap":"lblMKTCap","lblVolume":"lblVolume","lblEPSValue":"lblEPSValue","lblMKTCapValue":"lblMKTCapValue","lblVolumeValue":"lblVolumeValue","lbl52wklow":"lbl52wklow","lbl52wkHigh":"lbl52wkHigh","lblpe":"lblpe","lbl52wklowValue":"lbl52wkhighValue","lblpeValue":"lblpeValue"};
  segDataTab = [
    {"lblOpen": "Open", "lblHigh":"High", "lblLow":"Low", "lblOpenValue":"16,398.56", "lblHighValue":"16,396.56", "lblLowValue":"16,987.87", "lblEPS":"EPS", "lblMKTCap":"MKT Cap", "lblVolume":"Volume", "lblEPSValue":"16,333.33", "lblMKTCapValue":"16,398.5", "lblVolumeValue":"16,398.25", "lbl52wklow":"52wk Low", "lbl52wkHigh":"52wk High", "lblpe":"P/E", "lbl52wklowValue":"16,333.33", "lbl52wkhighValue":"16,333.33", "lblpeValue":"16,333.33", template:FlexTmplLatest},
    {"lblTmplAboutData":"Former Apple CEO John Sculley shares the most important thing he learned...", "lblTmplAboutData1":"Business Insider", "imgArrow":"list_arrow.png", "lblTemplAboutData2":"Apple's March-quarter iPhone guidance an overhang for stock", "lblTmplAboutData3":"Yahoo Finance","imgArrow2":"list_arrow.png", "lblTmplAboutData4":"Apple Watch takes up more than half the smart watch market","lblTmplAboutData5":"Business Daily","imgArrow3":"list_arrow.png",template:flxTemplNews},
    {"lblTmplAboutData":"Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software and online services.",template:FlxTmplAbout}
  ];
    NewsForm.segData.data = segDataTab;
}

function onSwipe_seg(seguiWidget, sectionIndex, rowIndex, isSelected){
  var pForm = kony.application.getCurrentForm();
  
  if(rowIndex === 0){
    pForm.lblSideHeading.text = "LATEST";
  } else if(rowIndex == 1){
    pForm.lblSideHeading.text = "NEWS";
  } else if(rowIndex == 2){
    pForm.lblSideHeading.text = "ABOUT";
  }
}

function loadGlobalVariables(){
  segDataTabs = [];
}
function loadSegDataMarket(){
  
  segDataTabs = [];
  
  StockMarketForm.InfoSegment.widgetDataMap = {imgArrowUp: "imgArrowUp", imgArrowDown:"imgArrowDown", imgArrowUp2:"imgArrowUp2", imgArrowUp3:"imgArrowUp3", 
                                               "lblTmplAAPL":"lblTmplAAPL", "lblTmplAppleValue":"lblTmplAppleValue", "lblTmplnumerosValue": "lblTmplnumerosValue", 
                                               "lblTmplApple": "lblTmplApple", "lblTmplTWTR":"lblTmplTWTR", "lblTmplTwitterValue":"lblTmplTwitterValue", 
                                               "lblTmplNumerosValue1":"lblTmplNumerosValue1", "lblTmplTwitter":"lblTmplTwitter", "lblTmplNFLX":"lblTmplNFLX", 
                                               "lblTmplNetflixValue":"lblTmplNetflixValue", "lblTmplNumerosValue2": "lblTmplNumerosValue2", "lblTmplNetflix":"lblTmplNetflix", 
                                               "lblTmplSBUX":"lblTmplSBUX", "lblTmplStarbucks":"lblTmplStarbucks", "lblTmplStarbucksValue":"lblTmplStarbucksValue", 
                                               "lblTmplNumerosValue3":"lblTmplNumerosValue3"};
	segDataTabs = [
      {"imgArrowUp":"stockup.png", "lblTmplAAPL":"AAPL:US", "lblTmplAppleValue":"99.00", "lblTmplnumerosValue":"+1.26", "lblTmplApple":"Apple Inc.", 
       "imgArrowDown":"stockdown.png", "lblTmplTWTR":"TWTR:US", "lblTmplTwitterValue":"19.55", "lblTmplNumerosValue1":"-1.26", "lblTmplTwitter":"Twitter Inc.",
       "imgArrowUp2":"stockup.png", "lblTmplNFLX":"NFLX:US", "lblTmplNetflixValue":"116.95", "lblTmplNumerosValue2":"+1.26",  "lblTmplNetflix":"Netflix Inc.",
       "imgArrowUp3":"stockup.png", "lblTmplSBUX":"SBUX:US", "lblTmplStarbucksValue":"59.08", "lblTmplNumerosValue3":"+1.26", "lblTmplStarbucks":"Starbucks Corp.", template:flxTmplStockMarket}
    ];
  StockMarketForm.InfoSegment.data = segDataTabs;
}

















