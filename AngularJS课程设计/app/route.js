

angular.module('routeJs',['ngRoute'])
            .config(['$routeProvider', function($provider1){
                $provider1
                        .when('/',{template:""})
                        .when('/introduce',{templateUrl:'view/introduce.html'})
                        .when('/information',{templateUrl:'view/information.html'})
                        .otherwise({redirectTo:'/'});
            }]);
