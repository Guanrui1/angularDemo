(function () {
    var app = angular.module('routers', ['ui.router']);
    app.config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise('/ui1');
        $stateProvider.
        state('ui1',{
            url: '/ui1',
            templateUrl: 'features/ui1.html',
            controller: 'Ui1'
        }).
        state('ui2',{
            url: '/ui2',
            templateUrl: 'features/ui2.html',
            controller: 'Ui2'
        });
    });
})();