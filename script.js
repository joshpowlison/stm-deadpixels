const moduleFunctions = {
	"addDeadPixel": darkenPixel,
	"clearDeadPixels": clearDeadPixels
};

module.LoadModule(moduleFunctions);

const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
CTX.fillStyle = '#000000aa';

const PIXEL_SIZE = 2; // Honestly, it's not noticeable if it's just 1 pixel

function darkenPixel()
{
	var xPosition = Math.floor(Math.random() * CANVAS.width);
	var yPosition = Math.floor(Math.random() * CANVAS.height);

	console.log('darkening at', xPosition, yPosition);
	CTX.fillRect(xPosition, yPosition, PIXEL_SIZE, PIXEL_SIZE);
}

// Updates the updater with the updates
function clearDeadPixels()
{
	CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function scaleCanvasToWindow()
{
	CANVAS.width = innerWidth;
	CANVAS.height = innerHeight;
}

window.addEventListener('resize', scaleCanvasToWindow);

scaleCanvasToWindow();