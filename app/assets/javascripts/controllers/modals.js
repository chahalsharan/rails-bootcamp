(function() {
    /* This controller controls the dynamic modal on the website
     *  like login and signup modals
     *  A common modal skeleton is used.
     *  Modal content is loaded with whatever navigation ioption is selected
     *  For usage see _modal.html.erb and nagivation.js
     */
    this.ModalsCtrl = ["$scope", '$sce', "Session", 
        function($scope, $sce, Session) {
            "use strict";
            $scope.modal = {}
            $scope.modal.url = "";
            // this variable is to control 
            //  when a refreshed version of content 
            //  needs to be fetched form server
            $scope.modal.freshness = (new Date()).getTime();

            // a listener that fires when a new modal needs to be loaded
            $scope.$on("modal_load", function(event, args){
                // for usage see _modal.html.erb
                $scope.modal.url = args.templateUrl + "?" + $scope.modal.freshness;
                $("#shared_modal").modal('show');
                event.stopPropagation;
            });

            // a listener that hides the modal
            $scope.$on("modal_hide", function(event, args){
                // update the freshness factor 
                //  so that next time fresh modal content is fetched from server
                $scope.modal.freshness = (new Date()).getTime();
                $("#shared_modal").modal('hide');
                event.stopPropagation;
            });
        }
    ];
}).call(this);