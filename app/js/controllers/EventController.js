'use strict';
eventsApp.controller('EventController',
    function EventController($scope, eventData) {

    $scope.sortCreator='Creator';
        eventData.getEventData(function (event) {
            $scope.event=event;
        });

        //$scope.event=eventData.event;
    $scope.upVoteSession = function upvote(session){
            session.voteCount++;
        };
        $scope.downVoteSession= function upvote(session){
            session.voteCount--;
        };

});