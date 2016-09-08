'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope,gravatarUrlbuilder) {
        $scope.user = {};

        $scope.getGravatarUrl = function(email) {
            return gravatarUrlbuilder.gravaterUrl(email);
        }

    }
);
