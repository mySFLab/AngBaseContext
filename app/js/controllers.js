'use strict';

mainMod
    .controller('phoneListController', ["$scope","$http",
    function($scope, $http){
        $scope.phoneList = "";
        $http.get('phones/phones.json').success(function(data){
            $scope.phoneList = data;
        });
    }])
    .controller('phoneDetailsController', ["$scope", "phonesFactory","$routeParams",
        function($scope, phonesFactory, $routeParams) {
            console.log('passage dans le controller detailsController');
            $scope.phone = phonesFactory.getPost($routeParams.id);
        }])

;