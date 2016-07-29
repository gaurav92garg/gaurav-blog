(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['routerHelper','$state']
    /* @ngInject */
    function appRun(routerHelper, $state) {
        /*var otherwise = '/home';
        var path = 'app/home/home.html';
        var state = [
            {
                state: 'home',
                config: {
                    url: '/home',
                    templateUrl:path,
                    title: 'home'
                }
            }
        ];
        routerHelper.configureStates(state, otherwise);*/
        // $state.go('home.pitchpack');
    }

    /*function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl:'app/core/404.html',
                    title: '404'
                }
            }
        ];
    }*/
})();
