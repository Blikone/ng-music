(function () {
    angular.module('ng-music')
        .controller('SearchController', function(MusicService) {
            var sc = this;
            sc.query = '';
            sc.search = function() {
                MusicService.getMusicByArtist(sc.query);
            }
        })

    
} ())