/**
 * Created by ARNAB on 9/7/2016.
 */
'use strict';
eventsApp.factory('eventData', function ($http,$log) {

    return {
        getEventData: function () {

           return $http({method: 'GET',url: '/data/event/1'});

    }
    }
});