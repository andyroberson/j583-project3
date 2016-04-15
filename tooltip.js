//tooltip to display all names
function tooltipHtml(n, d, names){
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Boy: </td><td style='text-align:left'>"+names.boys[0]+"</td></tr>"+
    "<tr><td>Girl: </td><td style='text-align:left'>"+names.girls[0]+"</td></tr>"+
		"</table>";
}

//tooltip to display boy names
function tooltipHtml2(n, d, names){
	return "<h4>"+n+"</h4><table>"+
  "<tr><td>1.</td><td style='text-align:left'>"+names.boys[0]+"</td></tr>"+
  "<tr><td>2.</td><td style='text-align:left'>"+names.boys[1]+"</td></tr>"+
  "<tr><td>3.</td><td style='text-align:left'>"+names.boys[2]+"</td></tr>"+
  "<tr><td>4.</td><td style='text-align:left'>"+names.boys[3]+"</td></tr>"+
  "<tr><td>5.</td><td style='text-align:left'>"+names.boys[4]+"</td></tr>"+
		"</table>";
}

//tooltip to display girl names
function tooltipHtml3(n, d, names){
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>1.</td><td style='text-align:left'>"+names.girls[0]+"</td></tr>"+
    "<tr><td>2.</td><td style='text-align:left'>"+names.girls[1]+"</td></tr>"+
    "<tr><td>3.</td><td style='text-align:left'>"+names.girls[2]+"</td></tr>"+
    "<tr><td>4.</td><td style='text-align:left'>"+names.girls[3]+"</td></tr>"+
    "<tr><td>5.</td><td style='text-align:left'>"+names.girls[4]+"</td></tr>"+
		"</table>";
}

	var states =
	[
		"HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"
	]

	/* draw states on divs */
	uStates.draw("#svg-both", states, tooltipHtml);
  uStates.draw("#svg-boys", states, tooltipHtml2);
  uStates.draw("#svg-girls", states, tooltipHtml3);


  //hide and show maps based on which is selected
	function report(option) {
	    if(option == "all") {
          $('#svg-boys').css("display", "none");
          $('#svg-girls').css("display", "none");
          $('#svg-both').css("display", "inline");
	    	}

	      if(option == "boys") {
           $('#svg-girls').css("display", "none");
           $('#svg-both').css("display", "none");
           $('#svg-boys').css("display", "inline");

	      }

	      if(option == "girls") {
            $('#svg-boys').css("display", "none");
            $('#svg-both').css("display", "none");
            $('#svg-girls').css("display", "inline");
	      }
			}
