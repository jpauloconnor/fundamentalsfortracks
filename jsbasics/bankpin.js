	//bankpin
	function enterpin(xyz) {
		var pin = 503;

		if (pin != xyz) {
			console.log("Pin not accepted");
		} else {
			console.log("Correct!");
		}
	}

	enterpin(503);