'use strict';
eventsApp.controller('EventController',
    function EventController($scope, eventData) {

    $scope.sortCreator='Creator';
    $scope.event=eventData.event;
    $scope.upVoteSession = function upvote(session){
            session.voteCount++;
        };
        $scope.downVoteSession= function upvote(session){
            session.voteCount--;
        };

});