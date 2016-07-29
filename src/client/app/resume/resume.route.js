(function() {
    'use strict';

    angular
        .module('app.resume')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        var path = 'app/resume/resume.html';
        

        var states =  [
            {
                state: 'resume',
                config: {
                    url: '/resume',
                    templateUrl: path,
                }
            }
        ];
        var otherwise = '/home';
        routerHelper.configureStates(states, otherwise);
    }
})();
