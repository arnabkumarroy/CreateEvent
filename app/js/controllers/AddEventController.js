'use strict';

eventsApp.controller('AddEventController',
    function AddEventController($scope,eventData) {
        $scope.saveEvent=function saveTheEvent(event,validateForm){

            //Creating data for the save event.
           if(validateForm.$valid) {
                eventData.saveEventData()
                    .$promise
                    .then(function(event){$scope.event=event;console.log(event)})
                    .catch(function (response){console.log(response);}
                    );            }
        };

        $scope.cancelEvent=function cancelTheEvent(event){
            window.location="/EventDetails.html";
        };

});