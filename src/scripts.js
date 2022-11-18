let registeredID = [];

var option_showRegistered;
var option_autoCopy;

$.ajax({
	url: "./src/json/characters.json",
	dataType: "text",
	success: function(text) {
		var json = parseJson(text);
		
		Object.keys(json).forEach(key => {
			registeredID.push(key)
		});

		$.each(json, function (index) {
			const get = json[index];
		
			if (index > 0 && index <= 255 && get.ReservedBy != undefined) {
				var card = document.createElement("a");
					card.className = "--revers --noshadow --wrap --case button";
					card.innerHTML = `${index} by ${get.ReservedBy}`;
				document.getElementsByClassName("reserved--row")[0].appendChild(card);
			};
		});
	}
});

document.getElementById("random").addEventListener("click", e => {
	document.getElementById("number").textContent = randIdIntExcep(1, 255, registeredID);
	if (option_autoCopy != true) { document.getElementById("copy").style.display = "unset"; };
});

$(function() {
	$("#option-showRegistered, #option-autoCopy").click( function(e) {
		var selected = "--selected";
		var button = $(this);
		var id = button.get(0).id;

		if (button.hasClass(selected)) { button.removeClass(selected); }
		else { button.addClass(selected); };

		if (id == "option-showRegistered") { option_showRegistered = button.hasClass(selected); };
		if (id == "option-autoCopy") {
			option_autoCopy = button.hasClass(selected);
			document.getElementById("copy").style.display = "none";
		};
	});

		
	$("#random, #copy").click( function(e) {
		if ($(this).get(0).id == "random" && option_autoCopy != true) {
			return false;
		};

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
});

function randIdIntExcep(min, max, except) {
	if (option_showRegistered) {
		return randId(min, max, except);
	}

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

function randId(min, max, except) {
	var random = Math.floor(Math.random() * (max - min + 1)) + min;

	for (i = 0; i < except.length; i++) {
		if (except[i] == random) {
			return random + ", but this ID is already registered";
		}
	}
	
	return random;
};

function parseJson(text) {
	var parse1 = text.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
	var parse2 = parse1.replace(/}[^,]."|}[^,][^$]/g, "},\n\t");
	var parse3 = parse2.replace(/\,(?=\s*?[\}\]])/g, "");

	var json = $.parseJSON(parse3);
	console.log(json)

	return json;
};