(function() {

    this.ListingCtrl = [
        "$scope", "Item", function($scope, Item) {
            $scope.items = (function($scope){
                var items = Item.query({
                    "search_text": $scope.searchText.search
                });
                return items;
            })($scope);
        }
    ];

}).call(this);