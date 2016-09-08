/**
 * Created by ARNAB on 9/7/2016.
 */
'use strict';
eventsApp.factory('eventData', function ($http,$log) {

    return {
        getEventData: function (SuccessCallback) {

            $http({method: 'GET',url: '/someUrl'})
                .success(function successCallback(data, status, header, config) {
                // this callback will be called asynchronously
                // when the response is available
                    SuccessCallback(data);
            })
                .error(function errorCallback(data, status, header, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $log.warn(data, status, header, config);
                })

    }
    }
});