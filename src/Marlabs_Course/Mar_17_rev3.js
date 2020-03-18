var countryApp = angular.module('countryApp', ['ngRoute']);
countryApp.config(function($routeProvider){
   $routeProvider
       .when('/', {
           templateUrl:'Mar_17_country-list.html',
           controller:'Mar_17_List_Ctrl'
        })
       .when('/', {
           templateUrl:'Mar_17_country-detail.html',
           controller:'Mar_17_data_Ctrl'
       })
       .otherwise({
           redirectTo: '/'
       })
});

countryApp.factory('countries', function ($http) {
    var cachedData;
    function getData(callback){
        if(cachedData) {
            callback(cachedData);
        }else{
            $http.get('countries1.json').success(function(entry){
                cachedData = data;
                callback(data);
            });
        }
    }
    return{
        list:getData,
        find: function(name, callback){
            getData(function(data){
                var country = data.filter(function(entry){
                    return entry.name === name;
                })[0];
                callback(country)
            });
        }
    };
});

countryApp.controller('Mar_17_data_Ctrl', function ($scope, countries) {
    countries.list(function(countries){
        $scope.countries = countries;
    })
});