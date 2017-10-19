var app = angular.module('myApp', []);
app.controller('mainCtrl', function($scope) {
   $scope.cymbal1 = function(){
	var audio = document.getElementById("cymbal1audio");
    audio.load();
    audio.play(); 
    };
});
