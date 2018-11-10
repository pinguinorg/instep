/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 function command(){
    alert(eval(document.querySelector(".commander").value));
 }
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
          var success = function(message) {
        console.log(message);
    }
 
    var failure = function() {
        alert("Error calling CordovaStepCounter Plugin");
    }
 
    // Start the step counter
    // startingOffset will be added to the total steps counted in this session.
    // ie. say you have already recorded 150 steps for a certain activity, then
    // the step counter records 50. The getStepCount method will then return 200.
    var startingOffset = 0;
    window.startcounting = function(){
        stepcounter.start(startingOffset, function(){alert("Counting started!")}, failure);
    };
    
    window.stopcounting = function(){
        stepcounter.stop(function(){alert("Counting stopped!")}, failure);
    };
    window.todaycount = function (){
        stepcounter.getTodayStepCount(function(a){
            document.querySelector(".todaycount") = a;
        }, failure);
    }
    window.allCount = function () {
        stepcounter.getStepCount(function(a){
                    document.querySelector(".alltimecount") = a;
        }, failure);

    }
     stepcounter.getTodayStepCount(function(a){
            document.querySelector(".todaycount") = a;
        }, function(a){
            console.log(a)
        });
setInterval(function(){stepcounter.getTodayStepCount(function(a){
            document.querySelector(".todaycount").innerHTML = a;
            console.log(a);
        }, function(a){
            console.log(a)
        });}, 100);
setInterval(function(){stepcounter.getStepCount(function(a){
            document.querySelector(".alltimecount").innerHTML = a;
            console.log(a);
        }, function(a){
            console.log(a)
        });}, 100);
    stepcounter.deviceCanCountSteps(function(){alert("Your device supported!")}, failure)
 
    // Get the step history (JavaScript object)
    // sample result :
    //{
    //  "2015-01-01":{"offset": 123, "steps": 456},
    //  "2015-01-02":{"offset": 579, "steps": 789}
    //  ...
    //}
    stepcounter.getHistory(
        function(historyData){
            alert(historyData);
        },
        failure
    );
 
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();