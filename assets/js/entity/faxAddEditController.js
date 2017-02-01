//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-custom:angularjs/assets/js/entity/EntityEditController.e.vm.js
//

					
									
									
						
				
app.controller("FaxAddEditController", ["$scope", "$window", "$aside", 
"$log", "FaxAddRestService", 
			"FaxChlRestService",
			"FaxAddRestInvRelationService", "$alert", "$timeout", "item", "mode", function(scope, window, aside, log, 
		faxAddRestService, 
						faxchlRestService,
							faxAddRestInvRelationService, alertService, timeoutService, item, mode) {
	
	log.info("inside FaxAddEditController, mode: " + mode);
	log.info("inside FaxAddEditController, item: " + item);
	scope.mode = mode;
	scope.item = item;

			// fill FaxChl combo with data from server side
faxchlRestService.query({query: '*'}, function success(result){
	log.info("receiving FaxChl from server side");
	scope.faxChls = result;
	log.info("FaxChl post refresh: " + result.length);
});
						

	/** Clear item */
	scope.clear = function () {
			scope.item = null;
	};
	
	/** Creates or updates an item */
	scope.saveItem = function() {
		log.info("Creating or updating an item");
		
		// defines the success behavior inside a methode
		var onSaveSuccess = function success(data) {
			console.log('success, got data: ', data);
		
			window.showAlert = function(){
				
				var userALert = alertService({
		                    title: "SUCCESS:",
		                    content: '<BR>Your faxAdd have been <i>created or updated</i>. You can find it int the result table. See <a href="#"><B>older messages</B></a> !',
		                    placement: "top-right",
		                    type: "theme",
		                    container: ".alert-container-top-right",
		                    show: !1,
		                    animation: "mat-grow-top-right"
		                    });
		    
				timeoutService(function() {
					userALert.show()
		        	}, 1 /* timeout duration */);
			};
			
			window.showAlert();
			};
		
			// defines the error behavior inside a methode
			var onSaveError = function (result) {
				window.showAlert = function(){
					var userALert = alertService({
			                    title: "ERROR:",
			                    content: "<BR>Your faxAdd haven't been created. Try again !",
			                    placement: "top-right",
			                    type: "theme",
			                    container: ".alert-container-top-right",
			                    show: !1,
			                    animation: "mat-grow-top-right"
			                    });
			    
					timeoutService(function() {
						userALert.show()
			        	}, 1 /* timeout duration */);
				};
				window.showAlert();
			};
		
		if (scope.item.id != null) {
			// update mode
			console.log("update mode");
						faxAddRestService.update(scope.item, onSaveSuccess, onSaveError);
		} else {
			// creation mode
			console.log("creation mode");
			faxAddRestService.save(scope.item, onSaveSuccess, onSaveError);
		}
	};

	/** Removes one item or a list of items (selected ones) */
	scope.remove = function(item) {
		
		var r = confirm("Are you sure ?");
		if (r == true) {
			if (item) {				
				// one item deletion mode
												faxAddRestService.delete({id: item.id}, function success(data) {
					scope.clear();
					alert('item deleted');
				}, function failure(err) {
					alert('request failed');
				});
			}	
		}
	};

}]);
