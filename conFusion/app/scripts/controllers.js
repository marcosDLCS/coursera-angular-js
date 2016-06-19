/**
 * Created by marcos on 19/06/16.
 */

'use strict';

var app = angular.module('confusionApp');

app.controller("MenuController", ['$scope', 'menuFactory', function ($scope, menuFactory) {

    var vm = $scope;
    vm.tab = 1;

    vm.dishes = menuFactory.getDishes();

    vm.filtText = '';

    vm.select = function (setTab) {
        vm.tab = setTab;

        if (setTab === 2) {
            vm.filtText = "appetizer";
        }
        else if (setTab === 3) {
            vm.filtText = "mains";
        }
        else if (setTab === 4) {
            vm.filtText = "dessert";
        }
        else {
            vm.filtText = '';
        }
    };
    vm.isSelected = function (checkTab) {
        return (this.tab === checkTab);
    };

    vm.showDetails = false;

    vm.toggleDetails = function () {
        vm.showDetails = !vm.showDetails;
    };

}]).controller('ContactController', ['$scope', function ($scope) {

    var vm = $scope;

    vm.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};
    var channels = [{value: "tel", label: "Tel."}, {value: "Email", label: "Email"}];
    vm.channels = channels;
    vm.invalidChannelSelection = false;

}]).controller('FeedbackController', ['$scope', function ($scope) {
    var vm = $scope;

    vm.sendFeedback = function () {
        console.log(vm.feedback);
        if (vm.feedback.agree && (vm.feedback.mychannel == "") && !vm.feedback.mychannel) {
            vm.invalidChannelSelection = true;
            console.log('incorrect');
        }
        else {
            vm.invalidChannelSelection = false;
            vm.feedback = {
                mychannel: "", firstName: "", lastName: "",
                agree: false, email: ""
            };
            vm.feedback.mychannel = "";

            vm.feedbackForm.$setPristine();
            console.log(vm.feedback);
        }
    }

}]).controller('DishDetailController', ['$scope', 'menuFactory', function ($scope, menuFactory) {

    $scope.dish= menuFactory.getDish(3);

}]).controller('DishCommentController', ['$scope', function ($scope) {

    var vm = $scope;

    vm.formComment = {
        author: "",
        rating: "5",
        comment: ""
    };

    vm.submitComment = function () {
        vm.formComment.date = new Date().toISOString();
        vm.dish.comments.push(vm.formComment);
        vm.formComment = {
            author: "",
            rating: "5",
            comment: ""
        };
        vm.commentForm.$setPristine();
    }
}]);