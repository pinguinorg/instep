  document.addEventListener("deviceready", onDeviceReady, false);
  function onDeviceReady() {
    var fullpagejs = new fullpage(".app", {
      anchors: ['firstPage', 'secondPage', 'thirdPage'],
      scrollHorizontally: true,
        navigation: true,
    navigationPosition: 'bottom'

    });
    window.redraw = function(){
      stepcounter.getStepCount(function(n){ if(prevc !== n){setCounter(n); prevc=n;}  console.log("2:", n)}, function(n){setCounter(n);  console.log("1:", n)});
    }
    window.alltime = 0;
    var prevs = 0;
    stepcounter.getTodayStepCount(function (n){ prevs = n }, function (n){ alert("Error, \n "+ n +"\n ").then(window.close()) });
    stepcounter.stop()
    stepcounter.start(prevs);
    window.au = function(){
      if(confirm("Перейти на сайт разработчика?")){
       window.open('http://marinenko.rf.gd', '_system');
      }
    }
    stepcounter.getHistory(
        function(historyData){
          window.historyData = historyData;
          var prop;
for(prop in historyData) {
    if(!historyData.hasOwnProperty(prop)) continue;

    document.querySelector(".history").innerHTML=document.querySelector(".history").innerHTML+(prop + " - "+ historyData[prop].steps)+"<br/>"
    window.alltime=window.alltime+historyData[prop].steps;
}
        }
    );
setInterval(function(){
  document.querySelector(".history").innerHTML="";
          stepcounter.getHistory(
        function(historyData){
          window.historyData = historyData;
          var prop;
for(prop in historyData) {
    if(!historyData.hasOwnProperty(prop)) continue;

    document.querySelector(".history").innerHTML=document.querySelector(".history").innerHTML+(prop + " - "+ historyData[prop].steps)+"<br/>"
}
        }
    );
}, 500);

    var prevc = 0;

  setInterval(update,550);
  function update(){
    
    // Get the amount of steps since the start command has been called
    stepcounter.getStepCount(function(n){ if(prevc !== n){setCounter(n); prevc=n; navigator.vibrate();}  console.log("2:", n)}, function(n){setCounter(n);  console.log("1:", n)});

  }
  function setCounter(v){
    var counter=$(".counter");
    var old=counter.children(".counter-value");
    var oldContent=old.children(".counter-value-mask");

    var t=0.4;
    var d=t*0.0;
    var d2=t*0.3;
    var padding=55;
    var offset=5;
    var w=old.data("w");
    w+=padding;
    TweenMax.to(old,t,{delay:d,x:w,ease:Quad.easeIn});
    TweenMax.to(oldContent,t,{delay:d,x:-(w-offset),ease:Quad.easeIn});
    setTimeout(function(){old.remove()},t*1000);
    
    var neu=$("<div/>").addClass("counter-value").appendTo(counter);
    var neuContent=$("<div/>").addClass("counter-value-mask").prependTo(neu).text(v);
    
    w=neuContent.width();
    neu.data("w",w);
    neu.css({
      width:w
    })
    w+=padding;
    TweenMax.from(neu,t,{delay:d2,x:-w});
    TweenMax.from(neuContent,t,{delay:d2,x:w-offset});
    
    
    
  }

    window.setCounter = function (v){
    var counter=$(".counter");
    var old=counter.children(".counter-value");
    var oldContent=old.children(".counter-value-mask");

    var t=0.4;
    var d=t*0.0;
    var d2=t*0.3;
    var padding=55;
    var offset=5;
    var w=old.data("w");
    w+=padding;
    TweenMax.to(old,t,{delay:d,x:w,ease:Quad.easeIn});
    TweenMax.to(oldContent,t,{delay:d,x:-(w-offset),ease:Quad.easeIn});
    setTimeout(function(){old.remove()},t*1000);
    
    var neu=$("<div/>").addClass("counter-value").appendTo(counter);
    var neuContent=$("<div/>").addClass("counter-value-mask").prependTo(neu).text(v);
    
    w=neuContent.width();
    neu.data("w",w);
    neu.css({
      width:w
    })
    w+=padding;
    TweenMax.from(neu,t,{delay:d2,x:-w});
    TweenMax.from(neuContent,t,{delay:d2,x:w-offset});
    
    
    
  }

}
