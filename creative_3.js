<<<<<<< HEAD
var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
   $scope.cymbal1 = function(){
	var audio = 
	audio.play(); 
    };
});
=======
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
    $scope.set1 = function() {
        var audio = document.getElementById("set1audio");
        audio.load();
        audio.play();
    };
    $scope.set2 = function() {
        var audio = document.getElementById("set2audio");
        audio.load();
        audio.play();
    };
    $scope.set4 = function() {
        var audio = document.getElementById("set4audio");
        audio.load();
        audio.play();
    };
    $scope.bass1 = function() {
        var audio = document.getElementById("bassAudio");
        audio.load();
        audio.play();
    };
});
>>>>>>> f844f834f2f092ffca5eb638837c14923faf6470
