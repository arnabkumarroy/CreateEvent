/**
 * Created by ARNAB on 9/7/2016.
 */
'use strict';
eventsApp.factory('eventData', function ($resource) {

    return {
        getEventData: function () {

           return $resource('/user/:userId', {userId:'@id'}).get({id:1});

    }
    }
});