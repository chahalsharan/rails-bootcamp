(function() {
    this.MsgCtrl = [
        "$scope", function($scope) {
            $scope.msg = {};

            $scope.msg.class = 'hide';
            $scope.msgTypes = {
                "error" : "alert-danger",
                "success" : "alert-success"
            };
            $scope.$on("flash-error", function(event, args){
                $scope.msg.class = $scope.msgTypes["error"];
                $scope.msg.message = args.message;
                $scope.msg.show = true;
                event.stopPropagation;
            });

            $scope.$on("flash-success", function(event, args){
                $scope.msg.class = $scope.msgTypes["success"];
                $scope.msg.message = args.message;
                $scope.msg.show = true;
                event.stopPropagation;
            });
            $scope.$on("hide-flash-messages", function(event, args){
                $scope.hideMessage();
            });
            

            $scope.hideMessage = function(){
                $scope.msg.show = false;
                //hide the alert messages created by server 
                // (outsie angular, chekc _messages.html.erb)
                $(".server-alerts").alert("close");
            }
            //$scope.msgTypes["error"];
            
            
        }
    ];

}).call(this);