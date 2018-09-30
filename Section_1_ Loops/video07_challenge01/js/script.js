var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB(){
   return Math.floor(Math.random() * 256 );  
}

function randomColor(){
    
}

for (var i = 1; i <= 100; i++) {
    red = randomRGB();
    green = randomRGB();
    blue = randomRGB();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);