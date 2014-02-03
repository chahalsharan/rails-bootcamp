// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require angular
//= require angular-resource

//= require services/listingsService
//= require services/sessionService
//= require controllers/main
//= require controllers/listings
//= require controllers/modals
//= require controllers/navigation
//= require controllers/users
//= require controllers/messages

//= require_tree .

// need this to bootstrap angular each time a page is loaded
//  putting it this way instead of on html tag because of turbolinks
//  turbolinks causes only portion of page to load 
//  and hence angular doesnt bootstrap on links
$(document).on('ready page:load', function(){
    angular.bootstrap(document.body, ['WeShare']);
});

// === These directives will be loaded at the bottom of all the assets
// this Directive is to tell an input 
//  to match tis value with another input element when its value is changing
//  If the value doesnt match invalidate this field 
//  like password and confirm password fields (for usage see _signup.html.erb)
angular.module('WeShare')
.directive('equals', function(){
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elm, attr, ngModel) {
            if(!ngModel) 
                return;// do nothing if no ng-model

            // watch own value and re-validate on change
            scope.$watch(attr.ngModel, function() {
                equals();
            });

            // observe the other value and re-validate on change
            attr.$observe('equals', function (val) {
                equals();
            });

            function equals() {
                var val1 = ngModel.$viewValue;
                var val2 = attr.equals;
                
                // set validity
                ngModel.$setValidity('equals', val1 === val2);
            }
        }
    };

});

// this directive is to tell the input to clear its server errors
//  when its input changes
//  for usage see _signup.html.erb
angular.module('WeShare')
.directive('clearcustomerror', function(){
    return{
        restrict: 'A',
        require: '?ngModel',
        link: function(scope, elem, attr, ngModel){
            if(!ngModel) 
                return;// do nothing if no ng-model

            scope.$watch(attr.ngModel, function(){
                ngModel.$setValidity('server', true);
            });

        }
    };
});

