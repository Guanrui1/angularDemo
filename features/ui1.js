(function () {
    var app = angular.module('controller');
    app.controller('Ui1', function ($scope,$state) {
        $scope.toui2 = function () {
            $state.go('ui2');
        };
    });
})();