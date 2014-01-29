(function() {
  var app = angular.module("WeShare", ["ngResource"]);

  app.factory("Item", [
      "$resource", function($resource) {
        return $resource("/items/:id", {
          id: "@id"
        }, {
          update: {
            method: "PUT"
          }
        });
      }
  ]);
})();