var sampleApp = angular.module("sampleApp",["ngRoute"]);
sampleApp.config(["$routeProvider", function($routeProvider){

    $routeProvider
        .when("/Angular",{
            templateUrl:"Mar_17_angular.html",
            controller:"AngularController"
    })
        .when("/Node", {
            templateUrl:"Mar_17_Node.html",
            controller:"NodeController"
        })
        .otherwise({
            redirectTo:"/Angular"
        });
}]);
sampleApp.controller("AngularController", function($scope){
    $scope.tutorial = [
        {Name:"Controllers", Description:"Controllers in Depth"},
        {Name:"Models", Description:"Models in Action"},
        {Name:"Directives", Description:"Directives for beginners"},
    ];
});

sampleApp.controller("NodeController", function($scope){
    $scope.tutorial = [
        {Name:"Controllers", Description:"Controllers in Depth"},
        {Name:"Models", Description:"Models in Action"},
        {Name:"Directives", Description:"Directives for beginners"},
    ];
});
