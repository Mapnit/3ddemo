var appConfig = {
	  // Define the feature layer URLs
      WellHeadsUrl: "//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/SampleRMOTCWellHeads/FeatureServer/0",  
	  WellBoresUrl: "//gisportal02.logicsolutionsgroup.com/agsservices/rest/services/Hosted/SampleRMOTCWellBores1/FeatureServer/0",
	  
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
          "<b>Drilled: </b> {SPUD}<br>" +
          "<b>Completed: </b> {COMP_DATE}<br>" +
		  "<b>Basin: </b> {BASIN}<br>" +
          "<b>Field: </b> {FIELD}<br>" +
          "<b>Elevation: </b> {ELEV} m<br>",
	
	  // popupTemplate content for wells
	  wellBoresPopupTemplateContent: 
		  "<b>API No.:</b> {wellboreapi}<br>" +
          "<b>Name: </b> {wellname}<br>" +
		  "<b>Wellbore:</b> {wellboreindex}<br>" + 
          "<b>MD: </b> {md} m<br>" +
          "<b>TD: </b> {td} m<br>",
		  
	  // Well data filtering expression
	  wellsDataFilterExpr: null
}