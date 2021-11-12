function randomRange(max, min) {
    return (Math.floor(Math.random() * (+max - +min)) + +min);
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var w = window.innerWidth;
w = w - 120;
var colors = ["black", "black"];

for (i = 0; i <= 90; i++) {

    var iDiv = document.createElement('div');
    iDiv.id = 'blubb' + i;
    iDiv.className = 'blubb';
    var size = randomRange(120, 50);

    iDiv.style.height = size + "px";
    iDiv.style.animationDelay = getRandomArbitrary(0, 5) + "s";
    iDiv.style.animationDuration = getRandomArbitrary(4, 5) + "s";


    var random_color = colors[Math.floor(
        Math.random() * colors.length)];

    iDiv.style.backgroundColor = random_color;

    iDiv.style.width = size + "px";
    iDiv.style.left = randomRange(w, 0) - (size / 2) + "px";
    iDiv.style.top = 0;

    document.getElementById('gooey-anim').appendChild(iDiv);

}


/*

--size:${2+Math.random()*4}rem; 

     var colors = [ 
                '#ff0000', '#00ff00', '#0000ff', 
                '#ff3333', '#ffff00', '#ff6600' 
            ]; 
*/