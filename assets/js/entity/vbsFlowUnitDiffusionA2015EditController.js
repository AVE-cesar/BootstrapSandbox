//
// Source code generated by Celerio, a Jaxio product.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Follow us on twitter: @jaxiosoft
// Need commercial support ? Contact us: info@jaxio.com
// Template pack-custom:angularjs/assets/js/entity/EntityEditController.e.vm.js
//

					
									
									
						
				
app.controller("VbsFlowUnitDiffusionA2015EditController", ["$scope", "$window", "$aside", 
"$log", "VbsFlowUnitDiffusionA2015RestService", 
		"VbsFlowUnitDiffusionA2015RestInvRelationService", "$alert", "$timeout", "item", "mode", function(scope, window, aside, log, 
		vbsFlowUnitDiffusionA2015RestService, 
					vbsFlowUnitDiffusionA2015RestInvRelationService, alertService, timeoutService, item, mode) {
	
	log.info("inside VbsFlowUnitDiffusionA2015EditController, mode: " + mode);
	log.info("inside VbsFlowUnitDiffusionA2015EditController, item: " + item);
	scope.mode = mode;
	scope.item = item;

				

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
		                    content: '<BR>Your vbsFlowUnitDiffusionA2015 have been <i>created or updated</i>. You can find it int the result table. See <a href="#"><B>older messages</B></a> !',
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
			                    content: "<BR>Your vbsFlowUnitDiffusionA2015 haven't been created. Try again !",
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
						vbsFlowUnitDiffusionA2015RestService.update(scope.item, onSaveSuccess, onSaveError);
		} else {
			// creation mode
			console.log("creation mode");
			vbsFlowUnitDiffusionA2015RestService.save(scope.item, onSaveSuccess, onSaveError);
		}
	};

	/** Removes one item or a list of items (selected ones) */
	scope.remove = function(item) {
		
		var r = confirm("Are you sure ?");
		if (r == true) {
			if (item) {				
				// one item deletion mode
												vbsFlowUnitDiffusionA2015RestService.delete({id: item.id}, function success(data) {
					scope.clear();
					alert('item deleted');
				}, function failure(err) {
					alert('request failed');
				});
			}	
		}
	};

}]);
