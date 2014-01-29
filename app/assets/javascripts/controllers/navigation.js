(function() {
    this.NavCtrl = ["$scope", "$http", 
        function($scope, $http) {
            "use strict";
            $scope.templates = {
                'login': '/login_form',
                'signup': '/signup_form'
            };

            $scope.nav = {}
            $scope.nav.url = "/navigation";

            $scope.$on("navigation_reload", function(event, args){
                console.log("In navigation reload ******");
                $scope.nav.url = null;
                $scope.nav.url = "/navigation?" + (new Date).getTime();
                event.stopPropagation;
            });

            $scope.loadAndShowModal = function(temp){
                $scope.$root.$broadcast("modal_load", {templateUrl : $scope.templates[temp]});
            };
            // $scope.$on("modal_hide", function(event, args){
            //     console.log('in modal hide******');
            //     $("#shared_modal").modal('hide');
            //     event.stopPropagation;
            // });
            // refresh_navigation
        }
    ];
}).call(this);