(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];
    /* @ngInject */
    function HomeController($http) {
        var vm = this;

        vm.title = 'Home';

        function remoteAPI() {
            $http.get('https://hackerearth.0x10.info/api/one-push?type=json&query=list_websites').then(function(response){
                console.log(response);
            });
        }

        remoteAPI();

    }
})();
