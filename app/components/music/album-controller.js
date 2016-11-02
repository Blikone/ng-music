(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/album.html',
            controller: AlbumController
        })

    AlbumController.$inject = ['$stateParams', 'MusicService']

    function AlbumController($stateParams, MusicService) {
        var ac = this;
        ac.currentAlbum = MusicService.getAlbumById($stateParams.id);
        ac.renderTime = function(track) {
            var min = Math.floor(track.trackTimeMillis/60000);
            var sec = Math.floor((track.trackTimeMillis % 60000)/1000);
            if (sec.toString().length === 1) {
                sec = "0" + sec;
            }
            return min + ':' + sec;
        }

        //Once you get the basics built out can you modify the MusicService to use the Itunes API???
    }
} ())
