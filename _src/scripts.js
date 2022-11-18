let registeredID = [];

$.ajax({
	url: "./_src/json/characters.json",
	dataType: "text",
	success: function(text) {
		var data = text.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
		var json = $.parseJSON(data);

		Object.keys(json).forEach(key => {
			registeredID.push(key)
		});
	}
});

document.getElementById("copy").addEventListener("click", e => {
	var number = document.getElementById("number").textContent;
	var inp = document.createElement("input");
		inp.value = number;
	document.body.appendChild(inp);
		inp.select();

	if (document.execCommand("copy")) {
		document.getElementById("notify").textContent = `  Copied ${number}!`;
	} else {
		document.getElementById("notify").textContent = `  Something get wrong`;
	}

	document.body.removeChild(inp);
});

document.getElementById("random").addEventListener("click", e => {
	document.getElementById("number").textContent = randIdIntExcep(1, 255, registeredID);
	document.getElementById("copy").style.display = "unset";
});

function randIdIntExcep(min, max, except) {
	except.sort(function(a, b) {
		return a - b;
	});
	var random = Math.floor(Math.random() * (max - min + 1 - except.length)) + min;
	var i;

	for (i = 0; i < except.length; i++) {
		if (except[i] > random) {
			break;
		}
		random++;
	}
	
	return random;
}