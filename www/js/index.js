document.addEventListener("deviceready", function(){
window.app = new Vue({
  el: ".app",
  data: {
    menuVisible: false,
    spcr_data: {

    },
    historyVisible: false
  },
  methods: {
    history: function(){
          window.spcr_arr = [];

            for(var x in window.spcr_data.history){
              window.spcr_arr.push({name:x, data: window.spcr_data.history[x]});
            }
            return window.spcr_arr;
    }
  }
})
stepcounter.stop();
stepcounter.start();
setInterval(function(){console.clear(); console.log(window.spcr_data.a, window.spcr_data.b, window.spcr_data.history); }, 1000)
function bootstrapCounter(){
  stepcounter.deviceCanCountSteps(function(){}, function(){alert("Your Device is Unsupported!"); window.close();});
  window.spcr = stepcounter;
  window.spcr_data = {
    a: 0,
    b: 0,
    history: 0
  }
  //Check if window.app exists and create if not.
  if(window.app == undefined){
    window.app = {};
  }
  window.update = function(){
    stepcounter.getTodayStepCount(function(i){window.spcr_data.a=i;}, function(i){console.log("[ERR] \n", i)});
    stepcounter.getStepCount(function(i){window.spcr_data.b=i;}, function(i){console.log("[ERR] \n", i)});;
        stepcounter.getHistory(
        function(historyData){
            window.spcr_data.history=historyData;
        },
        function(i){
          console.log("[ERR] \n", i)
        }
    );
        window.app.spcr_data = window.spcr_data;
  }
  setInterval(window.update, 100);
}
bootstrapCounter();
}, false);
