angular.module('WeShare');

(function() {

    this.ListingCtrl = [
        "$scope", "Item", function($scope, Item) {
            $scope.item = {};
            $scope.items = (function($scope){
                var items = Item.query({
                    "search_text": $scope.searchText.search
                });
                return items;
            })($scope);

            $scope.change = function(){
                $scope.suggestions = $scope.searchTerm;
            }
        }
    ];

}).call(this);