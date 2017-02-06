
/* Simple Controller */

app.controller("tableController", ["$scope",  
"$log", "$stateParams", "mode", "item", function(scope, log, stateParams, mode, item) {

log.info("mode: " + mode);
log.info("inside TableController, mode: " + mode);
log.info("inside TableController, item: " + item.lastname);

scope.mode = mode;

}]);
