var appConfig = {
	  // Define the feature layer URLs
      WellHeadsUrl: 
	    // "//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/SampleRMOTCWellHeads/FeatureServer/0",  
		"//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/RMOTCWellHeads3/FeatureServer/0", 
	  WellBoresUrl: 
	    // "//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/SampleRMOTCWellBores1/FeatureServer/0",
		"//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/RMOTCWellBores3/FeatureServer/0",
	  
	  // The initial clipping extent for the scene view
      defaultExtent: { // autocasts as new Extent()
        xmax: 803000,
        xmin: 800000,
        ymax: 956640,
        ymin: 953924,
        spatialReference: { // autocasts as new SpatialReference()
          wkid: 32056
        }
      }, 
	  
	  // popupTemplate content for well heads
	  wellHeadsPopupTemplateContent: 
		  "<b>API No.:</b> {API}<br>" +
          "<b>Name: </b> {CWN}<br>" +
          "<b>Lease: </b> {LEASE}<br>" +
          "<b>Operator: </b> {OPERATOR}<br>" +
		  "<b>Status: </b> {ST}<br>" +
		  "<b>Class: </b> {CL}<br>" +
          "<b>Drilled: </b> {SPUD}<br>" +
          "<b>Completed: </b> {COMP_DATE}<br>" +
		  "<b>Basin: </b> {BASIN}<br>" +
          "<b>Field: </b> {FIELD}<br>" +
          "<b>Elevation: </b> {ELEV} ft<br>",
	
	  // popupTemplate content for wells
	  wellBoresPopupTemplateContent: 
		  "<b>API No.:</b> {wellboreapi}<br>" +
          "<b>Name: </b> {wellname}<br>" +
		  "<b>Wellbore No.:</b> {wellboreindex}<br>" + 
          "<b>Measured Depth: </b> {md} ft<br>" +
          "<b>Total Depth: </b> {td} ft<br>",
		  
	  // Well data filtering expression
	  wellsDataFilterExpr: null
}