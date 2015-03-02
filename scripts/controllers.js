angular.module('basic.controllers', [])
.controller('tableController', function($scope, $http) {

	$scope.states=[];
	$scope.wikiLink=[];
	$scope.reversedStates=[];
	$scope.filterNames = '';
	$scope.reverseArray=[];


	$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table').success(function(response){
		$scope.states =response;
		$scope.states=_.sortBy($scope.states,function(element){
			return element.name+element.abbreviation;
		})
		$scope.newArray=_.sortBy($scope.states,function(element){
			return element.name+element.abbreviation;
		})
	});

	$scope.onNameClick=function(){
		$scope.reverseArray=$scope.newArray;
		$scope.newArray=$scope.reverseArray.reverse();
	};

	$scope.$watch('filterNames', function(){
		$scope.newArray=_.filter($scope.states,function(element){
		return element.name.toLowerCase().indexOf($scope.filterNames.toLowerCase())===0||
		element.abbreviation.toLowerCase().indexOf($scope.filterNames.toLowerCase())===0;
		});
	});	

});




