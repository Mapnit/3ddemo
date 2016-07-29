var appConfig = {
	  // Define the feature layer URLs
      wellsUrl:
        "//services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/HarperSumnerOGWells/FeatureServer/0",  
	  
	  // The initial clipping extent for the scene view
      defaultExtent: { // autocasts as new Extent()
        xmax: -10834217,
        xmin: -10932882,
        ymax: 4493918,
        ymin: 4432667,
        spatialReference: { // autocasts as new SpatialReference()
          wkid: 3857
        }
      }, 
	  
	  // popupTemplate content for wells
	  wellsPopupTemplateContent: "<b>API No.:</b> {API_NUMBER}<br>" +
          "<b>Lease: </b> {LEASE}<br>" +
          "<b>Operator: </b> {CURR_OPERATOR} km<br>" +
          "<b>Drilled: </b> {SPUD}<br>" +
          "<b>Completed: </b> {COMPLETION}<br>" +
          "<b>Status: </b> {STATUS2}<br>" +
          "<b>Depth: </b> {DEPTH} meters<br>",
	
	  // Well data filtering expression
	  wellsDataFilterExpr: "Status in ('CBM','EDR','GAS','INJ','O&G','OIL','SWD')"
}