
/* Simple Controller */

app.controller("tableController", ["$scope",  
"$log", "$stateParams", function(scope, log, stateParams) {

log.info("stateParams: " + stateParams.mode);
log.info("inside TableController, scope: " + scope.mode);

}]);
