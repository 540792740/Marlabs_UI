var myApp = angular.module("myModule",[]);

myApp.controller("myController", function($scope){
    var employee= {
        firstName:"John",
        lastName:"Smith",
        gender:"Male"
    };
    var technology = {
        name:"AngularJS",
        role:"UI",
        image:"img/logo.jpg"
    };
    var emply = [
        {firstName:"John", lastName:"Smith", gender:"Male", salary:1000},
        {firstName:"Peter", lastName:"Cris", gender:"Female", salary:2320},
        {firstName:"Oliver", lastName:"Hud", gender:"Male", salary:9900},
        {firstName:"J.K ", lastName:"Rolling", gender:"Female", salary:50000}
    ];


    $scope.employee = employee;
    $scope.message = "Angular is awesome";
    $scope.technology = technology;
    $scope.emply = emply;
});