/**
 * Created by marcos on 7/06/16.
 */

'use strict';

var app = angular.module('confusionApp', []);

app.controller("MenuController", ['$scope', function ($scope) {

    var vm = $scope;
    vm.tab = 1;
    vm.dishes = [
        {
            name: 'Uthapizza',
            image: 'images/uthapizza.png',
            category: 'mains',
            label: 'Hot',
            price: '4.99',
            description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
            comment: ''
        },
        {
            name: 'Zucchipakoda',
            image: 'images/zucchipakoda.png',
            category: 'appetizer',
            label: '',
            price: '1.99',
            description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
            comment: ''
        },
        {
            name: 'Vadonut',
            image: 'images/vadonut.png',
            category: 'appetizer',
            label: 'New',
            price: '1.99',
            description: 'A quintessential ConFusion experience, is it a vada or is it a donut?',
            comment: ''
        },
        {
            name: 'ElaiCheese Cake',
            image: 'images/elaicheesecake.png',
            category: 'dessert',
            label: '',
            price: '2.99',
            description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
            comment: ''
        }
    ];
    vm.filtText = '';

    vm.select = function (setTab) {
        this.tab = setTab;

        if (setTab === 2) {
            this.filtText = "appetizer";
        }
        else if (setTab === 3) {
            this.filtText = "mains";
        }
        else if (setTab === 4) {
            this.filtText = "dessert";
        }
        else {
            this.filtText = "";
        }
    };
    vm.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    };

    vm.showDetails = false;

    vm.toggleDetails = function () {
        vm.showDetails = !vm.showDetails;
    };
}]);