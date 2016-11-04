(function () {
    angular.module('ng-music')
        .component('albums', {
            templateUrl: 'app/components/music/albums.html',
            controller: AlbumsController
        })

    AlbumsController.$inject = ['MusicService']

    function AlbumsController(MusicService) {
        var cc = this;
        
        cc.search = function (term) {
            console.log('Searching...');
            MusicService.getMusicByArtist(term, function (albums) {
                console.log(albums);
                cc.albums = albums;
                cc.query = '';
            });
        }
    }

} ())