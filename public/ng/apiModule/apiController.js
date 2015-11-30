'use strict';
angular.module('apiApp')

.controller("apiController", function apiController($scope,$http){
	loading();

	function loading() {
		$http.get('/api/apis').success(function(data,status,headers,config){
			if(data && data.status == "success"){
				$scope.ApiList = data.messages; 
				$scope.apiObj =null;
			}
		});

	function create() {
		$http.post('/api/apis',$scope.apiObj).success(function(data,status,headers,config){
			if(data && data.status == "success"){
				$scope.ApiList = data.messages; 
			}
		});
	}
}});