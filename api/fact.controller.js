angular.module('fact.controller', [])
	.controller('FactController', function ($scope, factResource) {
       
       $scope.searchTvShow = function(){

       		factResource.get({
       			name: "shows",
       			search: $scope.search
       		},function (response) {
				$scope.search = response;
			} );
       	};

});
