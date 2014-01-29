(function() {
    this.ModalsCtrl = ["$scope", '$sce', "Session", 
        function($scope, $sce, Session) {
            "use strict";
            $scope.modal = {}
            $scope.modal.url = "";

            $scope.$on("modal_load", function(event, args){
                console.log('template url....' + args.templateUrl);
                $scope.modal.url = args.templateUrl;
                $("#shared_modal").modal('show');
                event.stopPropagation;
            });
        }
    ];
}).call(this);