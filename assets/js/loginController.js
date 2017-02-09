
/* Simple Controller */

app.controller("LoginController", [
	"$scope",  
	"$log",
	"$state",
	"credential",
	function(scope, log, state, credential) {

log.info("inside LoginController, login: " + credential.login);
scope.credential = credential;

scope.doLogin = function(data) {
	log.info("doLogin, password: " + data.password);
	if ("admin" === data.password) {
		state.go('book');
	} else {
		scope.credential.wrong = true;
		log.info("wrong credential");
	}
}
}]);
