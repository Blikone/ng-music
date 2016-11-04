angular.module('ng-music')
    .service('MusicService', function ($http) { //inject dependency on $http by passing it in
        var ms = this;

        ms.getAllAlbums = function () {
            return ms.albums
        }

        ms.getAlbumById = function (id, callback) {
            var url = '//bcw-getter.herokuapp.com/?url=';
            var url2 = 'https://itunes.apple.com/lookup?entity=song&id=' + id;
            var apiUrl = url + encodeURIComponent(url2);

            $http.get(apiUrl).then(callback)
        }
        
        ms.albums = [];

        ms.getMusicByArtist = function (artist, callback) {

            var url = '//bcw-getter.herokuapp.com/?url=';
            var url2 = 'https://itunes.apple.com/search?entity=album&term=' + artist;
            var apiUrl = url + encodeURIComponent(url2);

            $http({
                method: 'GET',
                url: apiUrl
            }).then(function gettingAlbums(response) {
                ms.albums = response.data.results.map(function (album) {
                    return {
                        title: album.collectionName,
                        collectionId: album.collectionId,
                        albumArt: album.artworkUrl100,
                        artist: album.artistName,
                        price: album.collectionPrice,
                        purchaseUrl: album.collectionViewUrl
                    };
                })
                callback(ms.albums)
            }, function throwError(response) {
                return {error: response}
            })
        }

    })