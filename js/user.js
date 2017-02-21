(function() {
    "use strict";


    var app = angular.module("myapp", ["ui.router", "ngTable",'ngMessages']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'demoController'
        })


}]);
app.controller('loginController', function($scope, $location) {
    debugger;
   
    $scope.login = function() {
        debugger;
        if ($scope.username === 'admin' && $scope.password === '1234') {
            console.log('successful')
            $location.path('/home');
        } else {

            console.log('Login failed..');

        }

    };
});
app.controller("demoController", demoController);

demoController.$inject = ["NgTableParams"];

function demoController(NgTableParams) {
    debugger;
    this.simpleList =  [
        { name: "Madhav Sai", age: 10, location: 'Nagpur' },
        { name: "Suresh Dasari", age: 30, location: 'Chennai' },
        { name: "Rohini Alavala", age: 29, location: 'Chennai' },
        { name: "Praveen Kumar", age: 25, location: 'Bangalore' },
        { name: "Sateesh Chandra", age: 27, location: 'Vizag' },
        { name: "Siva Prasad", age: 38, location: 'Nagpur' },
        { name: "Sudheer Rayana", age: 25, location: 'Kakinada' },
        { name: "Honey Yemineni", age: 7, location: 'Nagpur' },
        { name: "Mahendra Dasari", age: 22, location: 'Vijayawada' },
        { name: "Mahesh Dasari", age: 23, location: 'California' },
        { name: "Nagaraju Dasari", age: 34, location: 'Atlanta' },
        { name: "Gopi Krishna", age: 29, location: 'Repalle' },
        { name: "Sudheer Uppala", age: 19, location: 'Guntur' },
        { name: "Sushmita", age: 27, location: 'Vizag' }
    ];


    this.tableParams = new NgTableParams({
        // initial sort order
        sorting: { name: "asc" }
    }, {
        dataset: this.simpleList
    });
}



})();


