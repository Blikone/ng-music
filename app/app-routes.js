angular.module('ng-music')
    .config(function ($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

        //You should only need two states
        //One for showing all of the albums
        //and another for each album that renders
        //more details about that one album
        //including an option to play the songs
        //for that paticular album

        //You will need to utilize a route parameter to pass
        //the album id to the album component


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