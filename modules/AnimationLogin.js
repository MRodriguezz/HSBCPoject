function animateLogin() {
  var pForm = kony.application.getCurrentForm();
  try {
    pForm.ImgLogo.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 0
         }
        } 
      ),
      {"delay":0.75,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );
    pForm.ImgLogo1.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );
    pForm.LoginContainer.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );
    pForm.SkipContainer.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": 1
         }
        } 
      ),
      {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":1},
      {"animationEnd" : function(){
      }
      }
    );
  } catch (e) {
  }
}