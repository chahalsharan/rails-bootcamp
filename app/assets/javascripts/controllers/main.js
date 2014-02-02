(function() {
    // this is the main controller put on the body
    //  this should be used to put any actions applicable to entire application
    //  for usage see application.html.erb
    this.MainCtrl = [
        "$scope", function($scope) {
            $scope.app = {};

            $scope.app.currentlink = "";
            $scope.app.passwordMinlength = 8;
            $scope.app.passwordMaxlength = 20;

            $scope.app.phoneNumberPattern = (function() {
                var regexp = /^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
                return {
                    test: function(value) {
                        if( $scope.requireTel === false ) 
                            return true;
                        else 
                            return regexp.test(value);
                    }
                };
            })();
            $scope.app.passwordPattern = (function() {
                var regexp = /(?=.*[a-zA-Z])(?=.*[^a-zA-Z])/;
                return {
                    test: function(value) {
                        if( $scope.requireTel === false ) 
                            return true;
                        else 
                            return regexp.test(value);
                    }
                };
            })();
        }
    ];

}).call(this);