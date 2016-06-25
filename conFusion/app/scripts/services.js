'use strict';

angular.module('confusionApp')
    .constant('baseURL', 'http://localhost:3000/')
    .service('menuFactory', ['$http', 'baseURL', function ($http, baseURL) {
        
        var promotions = [
            {
                _id: 0,
                name: 'Weekend Grand Buffet',
                image: 'images/buffet.png',
                label: 'New',
                price: '19.99',
                description: 'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
            }

        ];

        this.getDishes = function () {
            return $http.get(baseURL + "dishes");
        };
        this.getDish = function (index) {
            return $http.get(baseURL + "dishes/" + index);
        };

        // implement a function named getPromotion
        // that returns a selected promotion.

        this.getPromotion = function (index) {

            return promotions[index];
        };

    }])

    .factory('corporateFactory', function () {

        var corpfac = {};

        var leadership = [
            {
                _id: 0,
                name: "Peter Pan",
                image: 'images/alberto.png',
                designation: "Chief Epicurious Officer",
                abbr: "CEO",
                description: "Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections."
            },
            {
                _id: 1,
                name: "Dhanasekaran Witherspoon",
                image: 'images/alberto.png',
                designation: "Chief Food Officer",
                abbr: "CFO",
                description: "Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
            },
            {
                _id: 2,
                name: "Agumbe Tang",
                image: 'images/alberto.png',
                designation: "Chief Taste Officer",
                abbr: "CTO",
                description: "Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick."
            },
            {
                _id: 3,
                name: "Alberto Somayya",
                image: 'images/alberto.png',
                designation: "Executive Chef",
                abbr: "EC",
                description: "Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!"
            }

        ];

        // Implement two functions, one named getLeaders,
        // the other named getLeader(index)
        // Remember this is a factory not a service

        corpfac.getLeaders = function () {
            return leadership;
        };
        corpfac.getLeader = function (index) {
            return leadership[index];
        };

        return corpfac;
    })

;
