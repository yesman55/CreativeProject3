var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
   $scope.cymbal1 = function(){
	var audio = document.getElementById("cymbal1audio");
    audio.load();
    audio.play(); 
    };
   $scope.cymbal2 = function(){
    var audio = document.getElementById("cymbal2audio");
    audio.load();
    audio.play(); 
    };
   $scope.cymbal3 = function(){
    var audio = document.getElementById("cymbal3audio");
    audio.load();
    audio.play(); 
    };
   $scope.cymbal4 = function(){
    var audio = document.getElementById("cymbal4audio");
    audio.load();
    audio.play(); 
    };
});
