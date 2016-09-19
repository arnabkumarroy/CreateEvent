/**
 * Created by ARNAB on 9/7/2016.
 */
'use strict';
eventsApp.factory('eventData', function ($resource) {
    var resourceDetails=$resource('/user/:userId', {userId:'@id'});
    return {
        getEventData: function () {

           return resourceDetails.get({id:1});

    }
    };

    return {
        saveEventData: function () {
            event.id='999';
            return resourceDetails.save(event);

        }
    }
});