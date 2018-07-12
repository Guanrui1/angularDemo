(function () {
    var app = angular.module('controller');
    app.controller('Ui2', function ($scope,$state) {
        $scope.toui1 = function () {
            $state.go('ui1');
        };
    });
})();