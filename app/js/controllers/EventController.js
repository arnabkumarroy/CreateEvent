'use strict';
eventsApp.controller('EventController',
    function EventController($scope,$log, eventData) {

    $scope.sortCreator='Creator';
        eventData.getEventData()
        .success(function (event) {
            $scope.event=event;
        })
            .error(function errorCallback(data, status, header, config) {
            // this callback will be called asynchronously
            // when the response is available
            $log.warn(data, status, header, config);
        });

        //$scope.event=eventData.event;
    $scope.upVoteSession = function upvote(session){
            session.voteCount++;
        };
        $scope.downVoteSession= function upvote(session){
            session.voteCount--;
        };

});