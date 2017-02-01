
/* Simple Controller */

app.controller("TestAsideController", ["$scope",  
"$log", function(scope, log) {

log.info("inside TestAsideController");

// create an aside
scope.aside = {"title": "Holy guacamole!", "content": "Best check yo self, you're not looking too good my dear !"};

log.info("aside created");




}]);
