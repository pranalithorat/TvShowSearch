angular.module('fact.controller', [])
	.directive('dir',function(){
		return {
			restrict : 'EA',
			templateUrl : 'views/newSearch.html'
		}
	})

	.controller('FactController', function ($scope, factResource) {

		$scope.searchTvShow = function () {
			factResource.query({
				
				name: $scope.name
			}, function (response) {

				$scope.fact = response;
				
			});	
		};

		/*$scope.detailsTvShow = function () {
			factResource.query({
				
				detail: $scope.detail

			}, function (response) {

				$scope.fact = response;
				
			});	
		};*/






});

