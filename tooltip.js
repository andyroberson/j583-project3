
function tooltipHtml(n, d, names){
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Boys:</td><td>"+names.boys[0]+names.girls[0]+"</td></tr>"+
		"</table>";
}

function tooltipHtml2(n, d, names){
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Boys:</td><td>"+names.boys+"</td></tr>"+
		"</table>";
}

function tooltipHtml3(n, d, names){
	return "<h4>"+n+"</h4><table>"+
		"<tr><td>Girls:</td><td>"+names.girls+"</td></tr>"+
		"</table>";
}

//TEST works (it's in uStates.js under uStatesPaths); so what need to do is input data into there;
//maybe do a baby array, that contains one boy array and one girl array? that's boy, one that's girls?

	var states =
	[
		"HI", "AK", "FL", "SC", "GA", "AL", "NC", "TN", "RI", "CT", "MA",
		"ME", "NH", "VT", "NY", "NJ", "PA", "DE", "MD", "WV", "KY", "OH",
		"MI", "WY", "MT", "ID", "WA", "DC", "TX", "CA", "AZ", "NV", "UT",
		"CO", "NM", "OR", "ND", "SD", "NE", "IA", "MS", "IN", "IL", "MN",
		"WI", "MO", "AR", "OK", "KS", "LS", "VA"
	]
	/* draw states on id #statesvg */
	uStates.draw("#statesvg", states, tooltipHtml);
  uStates.draw("#statesvg2", states, tooltipHtml2);
  uStates.draw("#statesvg3", states, tooltipHtml3);

	function report(option) {
	    if(option == "all") {
  				$('#test').css("background-color", "yellow");
          $('#statesvg2').css("display", "none");
          $('#statesvg3').css("display", "none");
          $('#statesvg').css("display", "inline");
	    	}

	      if(option == "boys") {
	         $('#test').css("background-color", "blue");
           $('#statesvg3').css("display", "none");
           $('#statesvg').css("display", "none");
           $('#statesvg2').css("display", "inline");

	      }

	      if(option == "girls") {
	         $('#test').css("background-color", "pink");
            $('#statesvg2').css("display", "none");
            $('#statesvg').css("display", "none");
            $('#statesvg3').css("display", "inline");
	      }
			}
