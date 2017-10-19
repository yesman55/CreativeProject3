var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
   $scope.cymbal1 = function(){
	var audio = new Audio('cymbal.WAV');
	audio.play(); 
    };
});
