(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.name = "Chris";
    $scope.sayHello = function() {
        return "Hello Coursera!"
    }

});

})();
