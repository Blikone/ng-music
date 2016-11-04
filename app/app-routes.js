angular.module('ng-music')
    .config(function ($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

        $stateProvider
            .state({
                name: 'album',
                url: '/album/:id',
                component: 'album'
            })
            .state({
                name: 'albums',
                url: '/albums',
                component: 'albums'
            })

        $urlRouterProvider.otherwise('/albums')
        //^^^ this guy defaults the page to albums if a bad url is given
    })