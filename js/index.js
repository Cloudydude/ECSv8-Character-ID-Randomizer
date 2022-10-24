function getFreeID()
{
	var minID = 1;
	var maxID = 255;
	
	var math = Math.floor(Math.random() * (maxID - minID)) + minID
	
	for (var i = minID; i < maxID; ++i)
	{
		if (math == registeredID[i - 1])
		{
			return math + ", but this ID is already registered"
		}
	}
	
	return math
};

function renderFreeID()
{
	var tempValue0 = document.getElementById("tempValue0");
	tempValue0.textContent = getFreeID();
};