(function () {
    angular.module('ng-music')
        .component('album', {
            templateUrl: 'app/components/music/album.html',
            controller: AlbumController
        })

    AlbumController.$inject = ['$stateParams', 'MusicService']

    function AlbumController($stateParams, MusicService) {
        console.log($stateParams.id);
        var id = $stateParams.id;
        debugger;
        var ac = this;

        ac.loadAlbum = function () {
            console.log($stateParams);
            console.log('Loading album...');
            MusicService.getAlbumById(id, function (album) {
                ac.currentAlbum = album.data.results;
                
                console.log(album);
            })
        }();
        ac.renderTime = function (millisecs) {
            var min = Math.floor(millisecs / 60000);
            var sec = Math.floor((millisecs % 60000) / 1000);
            if (sec.toString().length === 1) {
                sec = "0" + sec;
            }
            return min + ':' + sec;
        }
    }
} ())
