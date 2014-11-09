function createIcon(name,properties){
	var canvas = 
	'<canvas ' + 
	'id = ' + '"' + properties.id + '"' + 
	'width = ' + '"' + properties.width + '"' +
	'height = ' + '"' + properties.height + '"' + 
	'class = ' + '"' + properties.class + '"' +
	'style = ' + 
	'"background:' + properties.style.background +';'+
	'border-radius:' + properties.style.br + ';'+
	'float:' + properties.style.float +'";'+
	'></canvas>';
	document.getElementById(properties.field).innerHTML = canvas;
	var c = document.getElementById(properties.id);
    var ctx = c.getContext("2d");
    ctx.font = properties.style.textSize + ' ' + properties.style.textFont;
    ctx.fillStyle = properties.style.textColor;
    ctx.fillText(name, properties.X, properties.Y);
}