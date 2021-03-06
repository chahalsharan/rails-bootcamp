(function() {
    var app = angular.module("WeShare", []);

    app.factory("Session", ["$location", "$http", "$q", 
        function($location, $http, $q) {
            var service = {
                login: function(email, password) {
                    return $http.post('/users/sign_in', {user: {email: email, password: password} })
                        .then(function(response) {
                            console.log("In Session service success ***" + response);
                            console.log(response);
                            service.currentUser = response.data.user;
                            return response;
                        },
                        function(response) {
                            console.log("In Session service fail ***" + response);
                            console.log(response);
                            service.currentUser = null;
                            return response;
                        });
                },
                currentUser: null,
                getCurrentUser: function() {
                    if (service.isAuthenticated()) {
                        return $q.when(service.currentUser);
                    } else {
                        return $http.get('/current_user').then(function(response) {
                            service.currentUser = response.data.user;
                            return service.currentUser;
                        });
                    }
                },
                isAuthenticated: function(){
                    return !!service.currentUser;
                },
                register: function(email, password, confirm_password) {
                    console.log("Going to call service to signup ***");
                    return $http.post('/users', {
                        user: {
                            email: email, 
                            password: password, 
                            password_confirmation: confirm_password,
                            remote: true
                        } 
                    })
                    .then(function(response) {
                        console.log("Here in then");
                        service.currentUser = response.data;
                        return service.currentUser;
                    });
                },
                resetPassword: function(email){
                    console.log("Going to call reset password");
                    return $http.post('/users/password', {
                        user: {
                            email: email,
                            remote: true
                        } 
                    })
                    .then(function(response) {
                        console.log("Reset password returned in then");
                        console.log(response);
                        return response;
                    }, function(response) {
                        console.log("Railed to reset password ***");
                        console.log(response);
                        return response;
                    });
                    
                }
            };
            return service;
        }
    ]);
})();

// angular.module('sessionService', [])
//     .factory('Session', function($location, $http, $q) {
//         // Redirect to the given url (defaults to '/')
//         function redirect(url) {
//             url = url || '/';
//             $location.path(url);
//         }
//         var service = {
//             login: function(email, password) {
//                 return $http.post('/login', {user: {email: email, password: password} })
//                     .then(function(response) {
//                         service.currentUser = response.data.user;
//                         if (service.isAuthenticated()) {
//                             //$location.path(response.data.redirect);
//                             $location.path('/record');
//                         }
//                     });
//             },

//             logout: function(redirectTo) {
//                 $http.post('/logout').then(function() {
//                     service.currentUser = null;
//                     redirect(redirectTo);
//                 });
//             },

//             register: function(email, password, confirm_password) {
//                 return $http.post('/users.json', {user: {email: email, password: password, password_confirmation: confirm_password} })
//                 .then(function(response) {
//                     service.currentUser = response.data;
//                     if (service.isAuthenticated()) {
//                         $location.path('/record');
//                     }
//                 });
//             },
//             requestCurrentUser: function() {
//                 if (service.isAuthenticated()) {
//                     return $q.when(service.currentUser);
//                 } else {
//                     return $http.get('/current_user').then(function(response) {
//                         service.currentUser = response.data.user;
//                         return service.currentUser;
//                     });
//                 }
//             },

//             currentUser: null,

//             isAuthenticated: function(){
//                 return !!service.currentUser;
//             }
//         };
//         return service;
//     });