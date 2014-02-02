(function() {
    /* 
     * Controller for User actions like signup, login
     *  for usage see _login.html.erb, _signup.html.erb
     */
    this.UsersCtrl = ["$scope", "Session",
        function($scope, Session) {

            $scope.signupform = {};

            // controller method fired on login form's submit action
            $scope.login = function() {
                Session.login($scope.user.email, $scope.user.password)
                .then(function(response) {
                    if (response && response.status === 200) {
                        // hide the login modal
                        $scope.$root.$broadcast("modal_hide");
                        // reload the navigation to udpate the options
                        $scope.$root.$broadcast("navigation_reload");
                    } else {
                        // show login failure message
                        $scope.user.error = 'Credentials are not valid';
                    }
                }, function(response) {
                    // to handle rare server errors
                    $scope.user.error = 'Server offline, please try later';
                });
                
            };

            // method that handles the signup form submit
            $scope.signup = function() {
                $scope.signupform.errors = [];

                // proceed only if the form has been validated
                if($scope.signupform.$valid){
                    // call the service
                    Session.register($scope.user.email, $scope.user.password, $scope.user.confirm_password)
                    .then(function(response) {
                        // in case user sign up is successful, 
                        //  an ID will be returned
                        if(response.id){
                            // reload the navigation
                            //$scope.$root.$broadcast("navigation_reload"); // no need to reload navigation for now
                            // hide the signup modal
                            $scope.$root.$broadcast("modal_hide");
                            // flash a success message and guide user to login
                            $scope.$root.$broadcast("flash-success", {message : "Congratulatins! Welcome to WeShare. Please proceed to login."});
                        }else{
                            // handle any rare server errors
                            $scope.signupform.error = "Sign up unsuccessful. Server error occured, please try later.";
                        }
                    }, function(response) {
                        var errors = response.data.errors;
                        // show the error messages if present 
                        if(errors){
                            for(errorfield in errors){
                                // if there is a field for that error on the screen
                                //  show the error corresponding to the field
                                if($scope.signupform[errorfield]){
                                    // add the error to the field's error list
                                    $scope.signupform[errorfield].error = errors[errorfield][0];
                                    // invalidate the field, with server error
                                    //  for usage see _signup.html.erb
                                    $scope.signupform[errorfield].$setValidity('server', false);
                                }else{
                                    // else show error in form
                                    $scope.signupform.errors.push("Error with field [" + errorfield + "], [" + errors[errorfield] + "]");
                                }
                            }
                        }else{
                            $scope.signupform.error = "Server error occured, please try later.";
                        }
                    });
                }else{
                    $scope.signupform.error = "Invalid details entered";
                }
            };
        }
    ];
}).call(this);