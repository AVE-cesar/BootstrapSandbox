
/* Simple Controller */

app.controller("TestAlertController", ["$scope",  
"$log", function(scope, log) {

log.info("inside TestAlertController");

// create an alert
scope.alert = {"title": "Holy guacamole!", "content": "Best check yo self, you're not looking too good.", "type": "warning"};

log.info("alert created");




}]);
