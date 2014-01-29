(function() {
    this.UsersCtrl = ["$scope", "Session",
        function($scope, Session) {

            $scope.login = function() {
                console.log("In login UsersCtrl");


                Session.login($scope.user.email, $scope.user.password)
                .then(function(response) {
                    console.log("***** login called ****");
                    if (response && response.status === 200) {
                        console.log("***** login successful ****" + response);
                        $scope.user.error = 'Success!';
                        $scope.$root.$broadcast("modal_hide");

                        $scope.$root.$broadcast("navigation_reload");
                    } else {
                        console.log("***** login un-ssuccessful ****" + response);
                        $scope.user.error = 'Credentials are not valid';
                    }
                }, function(response) {
                    console.log("***** login call failed ****");
                    $scope.user.error = 'Server offline, please try later';
                });
            };

            $scope.signup = function() {

                console.log("In signup UsersCtrl");

                Session.register($scope.user.email, $scope.user.password, $scope.user.confirm_password)
                .then(function(response) {
                    console.log("***** signup called ****");
                    if (!response) {
                        console.log("***** signup un-ssuccessful ****");
                        $scope.authError = 'Credentials are not valid';
                    } else {
                        console.log("***** signup successful ****");
                        $scope.authError = 'Success!';
                    }
                }, function(response) {
                    console.log("***** signup call failed ****");
                    $scope.authError = 'Server offline, please try later';
                });
            };
        }
    ];
}).call(this);

// function UsersCtrl($scope, Session) {"use strict";
//     $scope.login = function(user) {
//         $scope.authError = null;

//         Session.login(user.email, user.password)
//         .then(function(response) {
//             if (!response) {
//                 $scope.authError = 'Credentials are not valid';
//             } else {
//                 $scope.authError = 'Success!';
//             }
//         }, function(response) {
//             $scope.authError = 'Server offline, please try later';
//         });
//     };

//     $scope.logout = function(user) {

//     };

//     $scope.register = function(user) {
//         $scope.authError = null;

//         Session.register(user.email, user.password, user.confirm_password)
//             .then(function(response) {
//                console.log(response);
//             }, function(response) {
//                 var errors = '';
//                 $.each(response.data.errors, function(index, value) {
//                     errors += index.substr(0,1).toUpperCase()+index.substr(1) + ' ' + value + ''
//                 });
//                 $scope.authError = errors;
//             });
//     };
// }