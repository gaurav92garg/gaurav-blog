(function() {
    'use strict';

    angular
        .module('app.portfolio')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        var path = 'app/portfolio/portfolio.html';
        

        var states =  [
            {
                state: 'portfolio',
                config: {
                    url: '/portfolio',
                    templateUrl: path,
                }
            }
        ];
        var otherwise = '/home';
        routerHelper.configureStates(states, otherwise);
    }
})();
