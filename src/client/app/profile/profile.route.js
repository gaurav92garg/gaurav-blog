(function() {
    'use strict';

    angular
        .module('app.profile')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        var profilePath = 'app/profile/profile.html';
        

        var states =  [
            {
                state: 'profile',
                config: {
                    url: '/profile',
                    templateUrl: profilePath,
                }
            }
        ];
        var otherwise = '/home';
        routerHelper.configureStates(states, otherwise);
    }
})();
