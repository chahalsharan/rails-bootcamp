(function() {
    this.NavCtrl = ["$scope", "$http", 
        function($scope, $http) {
            "use strict";
            $scope.templates = {'login': '/login_form'};
            $scope.loadAndShowModal = function(temp){
                $scope.$root.$broadcast("modal_load", {templateUrl : $scope.templates[temp]});
            };
        }
    ];
}).call(this);