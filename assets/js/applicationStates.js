//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-custom:angularjs/assets/js/applicationStates.p.vm.js
//



app.config(function($stateProvider, $urlRouterProvider) {
	//
	// For any unmatched url, redirect to /dashboard
	$urlRouterProvider.otherwise("/dashboard");
	//
  
  /* entities states */
  /* to go to books search screen */
  $stateProvider
        .state('book', {
	    	url: "/book",
			resolve: {
				config : ['$stateParams', 'AppParameterRestService', '$log', function($stateParams, appParameterRestService, log) {
					return appParameterRestService.getParameter({domain: 'SCREEN_CONFIG', key: 'Book'}).$promise.then (function (result) {
						if (!result.value) {
                   			// no data has been found inside the dabatase, we need to create a fresh one
							return appParameterRestService.create({"domain": "SCREEN_CONFIG", "key": "Book", "value": "{ \"id\": true, \"title\": true, \"description\": true, \"publicationDate\": true, \"authorId\": true, \"price\": true, \"barcodeid\": true}"});
						} else {
							return result;
						}
						});
                    }]
				},
			views: {
            	"searchView": {templateUrl: "assets/tpl/apps/book/bookSearch.html"},
				"mainView": {templateUrl: "assets/tpl/apps/book/book.html",
					controller: "BookController"},
				"footerView": {templateUrl: "tpl/footer.html"}
				}
            })	            
     
        /* to go in Edit mode on a book entity */
		.state('editBook', {
			url: "/book/{id}",
			views: {
				"mainView": {
					templateUrl: "assets/tpl/apps/book/bookEdit.html",
					controller: "BookEditController"
					},
				"footerView": {templateUrl: "tpl/footer.html"}
				},
			resolve: {
				mode : function() {
      				return "EDIT";
    			},
				item : ['$stateParams', 'BookRestService', '$log', function($stateParams, BookRestService, log) {
					return BookRestService.get({id : $stateParams.id}, function success(result) {}, function failure(result){
						log.info("something goes wrong !");
						}).$promise;
                    }]
				}
		})   
		
		/* to go in read only mode on a book entity */
		.state('viewBook', {
			url: "/book/view/{id}",	    			
			views: {
				"mainView": {
					templateUrl: "assets/tpl/apps/book/bookEdit.html",
					controller: "BookEditController"
					},
				"footerView": {templateUrl: "tpl/footer.html"}
				},
			resolve: {
				mode : function() {
      				return "VIEW";
    			},
				item : ['$stateParams', 'BookRestService', '$log', function($stateParams, BookRestService, log) {
					return BookRestService.get({id : $stateParams.id}, function success(result) {}, function failure(result){
						log.info("something goes wrong !");
						}).$promise;
                    }]
				}
		});
  
  /* common states */
  $stateProvider
		.state('home', {
            url: "/",
            views: {
				"mainView": {templateUrl: "tpl/home.html"},
				"footerView": {templateUrl: "tpl/footer.html"}
				}
            })
		.state('form', {
            url: "/form",
            views: {
				"mainView": {templateUrl: "tpl/form.html"},
				"footerView": {templateUrl: "tpl/footer.html"}
				}
            })
		.state('table', {
            url: "/table",
            views: {
            	"searchView": {templateUrl: "tpl/search.html"},
				"mainView": {templateUrl: "tpl/table.html"},
				"footerView": {templateUrl: "tpl/emptyFooter.html"}
				}
            })
        .state('testAlert', {
            url: "/testAlert",
            views: {
				"mainView": {
					templateUrl: "tpl/testAlert.html",
					controller: "TestAlertController"},
				"footerView": {templateUrl: "tpl/emptyFooter.html"}
				}
            })
        .state('testIcon', {
            url: "/testIcon",
            views: {
				"mainView": {
					templateUrl: "tpl/testIcon.html"
				},
				"footerView": {templateUrl: "tpl/emptyFooter.html"}
				}
            })
		.state('testAside', {
            url: "/testAside",
            views: {
				"mainView": {
					templateUrl: "tpl/testAside.html",
					controller: "TestAsideController"
				},
				"footerView": {templateUrl: "tpl/emptyFooter.html"}
				}
            });
  
	// Now set up the states
	$stateProvider
    	.state('dashboard', {
      		url: "/dashboard",
      		templateUrl: "assets/tpl/dashboard.html"
	});
	
	$stateProvider
    	.state('settings', {
      		url: "/settings",
      		templateUrl: "assets/tpl/settings.html"
    });
    
    $stateProvider
    	.state('logout', {
      		url: "/logout",
      		templateUrl: "assets/tpl/logout.html"
    });	
    
    $stateProvider
    	.state('logLevels', {
      		url: "/logLevels",
      		templateUrl: "assets/tpl/logLevels.html",
      		controller: "LogsController"
    });
    
    $stateProvider
    	.state('translation', {
      		url: "/translation",
      		templateUrl: "assets/tpl/apps/admin/translation.html",
      		controller: "TranslationController"
    });		

});