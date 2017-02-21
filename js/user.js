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
            $location.path('/login');

        }

    };
});
app.controller("demoController", function ($scope) {
    $scope.users = [
        { name: "Madhav Sai", age: 10, location: 'Nagpur' },
        { name: "Suresh Dasari", age: 30, location: 'Chennai' },
        { name: "Rohini Alavala", age: 29, location: 'Chennai' },
        { name: "Praveen Kumar", age: 25, location: 'Bangalore' },
        { name: "Sateesh Chandra", age: 27, location: 'Vizag' },
        { name: "Sudheer Rayana", age: 25, location: 'Kakinada' },
        { name: "Honey Yemineni", age: 7, location: 'Nagpur' },
        { name: "Mahendra Dasari", age: 22, location: 'Vijayawada' },
        { name: "Mahesh Dasari", age: 23, location: 'California' },
        { name: "Nagaraju Dasari", age: 34, location: 'Atlanta' },
        { name: "Gopi Krishna", age: 29, location: 'Repalle' },
        { name: "Sudheer Uppala", age: 19, location: 'Guntur' },
        { name: "Sushmita", age: 27, location: 'Vizag' }
    ];
    $scope.orderByMe = function(user) {
        $scope.myOrderBy = user;
    }
});

app.directive('headerDirective',function () {
    return{
        restrict:'AEC',
        templateUrl:'views/navbar.html',
        replace:'true'
    } ;
});

