'use strict'

angular.module('app', [
    'ngAnimate',
    'appDirectives',
    'appControllers'
]);

angular.module('appDirectives', []);
angular.module('appControllers', []);



angular.module('appControllers').controller('AppController', ['$scope', function( $scope ) {

    // $scope.showVideo = false;

    $scope.panes = [{
        text:  'Keep track of your friends and\n\
                favorite artists\' music posts'
    },{
        text:  'Listen to tracks and watch videos\n\
                directly in your feed'
    },{
        text:  'Heart your biggest faves and share\n\
                your love for the music'
    },{
        text:  'Remove tracks you dont like so\n\
                musicfeed can learn your preferences'
    }];

}]);;
