angular.module('basic.controllers', [])
.controller('tableController', function($scope, $http) {

	$scope.states=[];
	$scope.wikiLink=[];
	$scope.reversedStates=[];

	$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table').success(function(response){
		$scope.states = response;
		console.log($scope.states);
	});

	$scope.onNameClick=function(){
		$scope.reversedStates=$scope.states.reverse();
	}

});




