
/* Simple Controller */

app.controller("tableController", ["$scope",  
"$log", "$stateParams", "mode", "item", function(scope, log, stateParams, mode, item) {

log.info("mode: " + mode);
log.info("inside TableController, mode: " + mode);
log.info("inside TableController, item: " + item.lastname);

/* permet de passer les valeurs à la page pour affichage */
scope.mode = mode;
scope.item = item;

/** Executes the search with criteria on the server side */
scope.doSearch = function(item) {
	log.info("startSearch, criteria: " + scope.item);
	scope.data = item;
/*
	// call search on the server side and refresh the grid
	bookRestService.search(item, function success(result){
		log.info("receiving info from server side");
		
		// refresh data and so the grid
		scope.data = result.content;
		
		// fill pagination variables
		scope.pagination.first = result.first;
		scope.pagination.last = result.last;
		scope.pagination.totalElements = result.totalElements;
		scope.pagination.totalPages = result.totalPages;
		scope.pagination.number = result.number;
		
		log.info("data post refresh:" + scope.data.length);
		log.info("page number: " + scope.pagination.number);
	});
	*/
};
}]);
