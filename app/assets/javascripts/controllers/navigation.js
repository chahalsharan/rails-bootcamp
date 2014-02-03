angular.module('WeShare');

(function() {
    /* Controller for website Navigation bad and its actions
     *  Like reacting to navigation option clicks
     *   for usage see _navigation.html.erb
     */
    this.NavCtrl = ["$scope", "$location", 
        function($scope, $location) {
            "use strict";

            $scope.nav = {}
            $scope.nav.sharedlinks = {
                login : {label: "Sign in", template: "/login_form", action: "login"},
                signup: {label: "Sign up", template: "/signup_form", action: "signup"},
                forgotpassword: {label: "Forgot password", template: "/forgotpassword_form", action: "forgotpassword"}
            };

            $scope.nav.url = "/navigation";
            $scope.nav.current = "";

            // listener that reloads the navigation discarding the cache
            $scope.$on("navigation_reload", function(event, args){
                console.log("In navigation reload ******");
                $scope.nav.url = null;
                $scope.nav.url = "/navigation?" + (new Date).getTime();                
                event.stopPropagation;
            });

            // react to navigation bar's options
            //  like login, signup
            //  for usage see _navigation.html.erb
            $scope.loadAndShowModal = function(temp){
                $scope.$root.$broadcast("modal_load", {templateUrl : $scope.nav.sharedlinks[temp].template});
                // hide the alert messages on navigation clicks
                $scope.$root.$broadcast("hide-flash-messages");
                //store the current location in a variable
                $scope.app.currentlink = temp;
            };

            $scope.sharedlinks = function(){
                var links = [];
                for(var link in $scope.nav.sharedlinks){
                    if(link != $scope.app.currentlink){
                        links.push($scope.nav.sharedlinks[link])    
                    }
                }
                return links;
            };
        }
    ];
}).call(this);