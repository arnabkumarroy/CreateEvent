/**
 * Created by ARNAB on 9/7/2016.
 */
'use strict';
eventsApp.factory('eventData',
    function () {
            return {
        event:{
            Name: 'Angular booc Camp',
            Date: '06/09/2015',
            Time: '10:00 A.M.',
            location: {
                address:'new hall play',
                place: 'Mexico City'
            },
            img: './img/angularjs-logo.png',
            sessions:[
                {
                    Name: 'Directive Master Class',
                    Creator:'Senthil p',
                    Duration: 1,
                    level:'Advance',
                    Description: 'In this session we will learn about the directives and the controller',
                    voteCount:0
                },
                {
                    Name: 'Scope for fun and profit',
                    Creator: 'Arnab Roy',
                    Duration: 2,
                    level:'Introductory',
                    Description: 'In This session we are going to learn about the scope, http, and other useful object',
                    voteCount:5
                },
                {
                    Name: 'Well behave Controller',
                    Creator:'Arnab & Senthil',
                    Duration: 4,
                    level:'Intermediate',
                    Description: 'In this Session we are going to learn about the Controller the heart of the angular js',
                    voteCount:0
                }
            ]
        }
    };
});