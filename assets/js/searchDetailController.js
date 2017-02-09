
/* Simple Controller */

app.controller("SearchDetailController", ["$scope",  
"$log", function(scope, log) {

log.info("inside SearchDetailController");

scope.page = "Page Search";

log.info("scope.page= " + scope.page);

}]);
