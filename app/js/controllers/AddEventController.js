'use strict';

eventsApp.controller('AddEventController',
    function AddEventController($scope) {
        $scope.saveEvent=function saveTheEvent(event,validateForm){

            if(validateForm.$valid) {
                window.alert("Alerting the Event Name" + event.name);
            }
        };

        $scope.cancelEvent=function cancelTheEvent(event){
            window.location="/EventDetails.html";
        };

});