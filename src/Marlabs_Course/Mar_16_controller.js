var myApp = angular
    .module("myModule", [])
    .controller("myController", function($scope, $http){
        //Example 2 get:
        $http({
            method: "Get",
            url: "http://localhost:63342/Marlabs/Angular/Mar_16_EmployeeData.txt"
        }).then(function successCallback(response) {
            $scope.message = response.data;
            $scope.status = response.status;
            // console.log(response)
            $scope.headers = response.headers;
            $scope.config = response.config;
            $scope.statusText = response.statusText;
        }, function errorCallback(response) {
            alert("Unsuccessfully")
        });

        //Example 1
        var technologies = [
            {name:"C#", likes:0, dislikes:0},
            {name:"Java", likes:0, dislikes:0},
            {name:"Angular", likes:0, dislikes:0},
            {name:"Python", likes:0, dislikes:0},
            { name:"ASPMVC", likes:0, dislikes:0}
        ];
        var employee = [
            {name:"Peter", dateOfBirth: new Date("Oct 23, 1980"), gender: "Male", salary: 55000.21, city:"Beijing"},
            {name:"Dan", dateOfBirth: new Date("Nov 23, 1980"), gender: "Male", salary: 55000.21, city:"Beijing"},
            {name:"Lee", dateOfBirth: new Date("Dec 3, 1980"), gender: "Male", salary: 55000.21, city:"TJ"},
            {name:"ZeK", dateOfBirth: new Date("Nov 15, 1980"), gender: "Male", salary: 55000.21, city:"Beijing"},
            {name:"John", dateOfBirth: new Date("Nov 2, 1980"), gender: "Female", salary: 55000.21, city:"Beijing"}
        ];


        //Example 3 transform
        $scope.transformString = function(input){
            var output = "";
            for(let i = 0; i < input.length; i++){
                if(i > 0 && input[i].toUpperCase()){
                    output = output + ""
                }
                output = output + output[i]
            }
            $scope.output = output;
        };


    });

