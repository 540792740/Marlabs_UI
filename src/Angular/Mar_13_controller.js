var myApp = angular
.module("myModule", [])
.controller("myController", function($scope){
    var technologies = [
        {name:"C#", likes:0, dislikes:0},
        {name:"Java", likes:0, dislikes:0},
        {name:"Angular", likes:0, dislikes:0},
        {name:"Python", likes:0, dislikes:0},
        {name:"ASPMVC", likes:0, dislikes:0}
    ];
    var employee = [
        {name:"Peter", dateOfBirth: new Date("Oct 23, 1980"), gender: "Male", salary: 55000.21},
        {name:"Dan", dateOfBirth: new Date("Nov 23, 1980"), gender: "Male", salary: 55000.21},
        {name:"Lee", dateOfBirth: new Date("Dec 3, 1980"), gender: "Male", salary: 55000.21},
        {name:"ZeK", dateOfBirth: new Date("Nov 15, 1980"), gender: "Male", salary: 55000.21},
        {name:"John", dateOfBirth: new Date("Nov 2, 1980"), gender: "Female", salary: 55000.21}

    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function(tech){
        tech.likes++;
    };

    $scope.incrementDisLikes = function(tech){
        tech.dislikes++;
    };

    // Example 3
    $scope.employee = employee;
    $scope.rowLimit = 3;
});

