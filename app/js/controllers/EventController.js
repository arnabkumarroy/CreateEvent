'use strict';
eventsApp.controller('EventController',
    function EventController($scope,$log, eventData) {

    $scope.sortCreator='Creator';

        /*$scope.event=eventData.getEventData(); */
        eventData.getEventData()
            .$promise
            .then(function(event){$scope.event=event;console.log(event)})
            .catch(function (response){console.log(response);}
        );



        //$scope.event=eventData.event;
    $scope.upVoteSession = function upvote(session){
            session.voteCount++;
        };
        $scope.downVoteSession= function upvote(session){
            session.voteCount--;
        };

});