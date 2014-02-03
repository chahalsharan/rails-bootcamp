(function() {
  var app = angular.module("WeShare", []);

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