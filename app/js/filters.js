'use strict';
eventsApp.filter('durations',function () {
    return function (Duration) {
        switch(Duration){
            case 1:
                return "Half hour";
            case 2:
                return "One hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
        
    }
    
});