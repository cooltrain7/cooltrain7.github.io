//Event listerner, window resize
window.addEventListener("resize", displayWindowSize);

//Toggle Mobile Menu
function toggleMobileMenu(navButton) 
{
	navButton.classList.toggle("menuOpen");
	var ele = document.getElementById("navToggle");
	ele.classList.toggle("hidden"); // Toggle the hidden class on/off the element
}

function closeMobileMenu()
{
	var navMenu = document.getElementById("navToggle");
	var navButton = document.getElementById("mobileToggle");
	
	if(navMenu!=null)
	{
		navMenu.classList.toggle("hidden", true);
	}
	if(navButton)
	{
		navButton.classList.toggle("menuOpen", false);
	}
}

//Called when the window changes sizeToContent
function displayWindowSize()
{
	// Get width and height of the window excluding scrollbars
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	
	closeMobileMenu();
}

//When hover on an object with this function change the display text to that of the button under the hover
function mouseEnterButton(newText)
{
	var buttonLink = document.getElementsByClassName("DescButtonLink");
	var buttonLinkP = buttonLink[0].getElementsByTagName('p')[0];
	
	if(buttonLinkP)
	{
		buttonLinkP.innerHTML = newText;		
	}
	
}