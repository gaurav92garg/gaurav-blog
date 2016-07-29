(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        var homePath = 'app/home/home.html';
        

        var states =  [
            {
                state: 'home',
                config: {
                    url: '/home',
                    templateUrl: homePath,
                    //controller: 'Home',
                    //controllerAs: 'vm',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-lock"></i> Admin'
                    }
                }
            }
        ];
        var otherwise = '/home';
        routerHelper.configureStates(states, otherwise);
    }
})();
