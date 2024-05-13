document.getElementById('myButton').addEventListener('click', function () {
    var input = document.getElementById('myInput').value;
    var display = document.getElementById('display');
    display.innerHTML = '';
    var letters = [];
    for (var i = 0; i < input.length; i++) {
        var letter = document.createElement('span');
        letter.innerText = i === 0 ? input[i].toUpperCase() : input[i];
        letter.classList.add('animated-letter');
        letters.push(letter);
        display.appendChild(letter);
    }
    document.getElementById('myInput').value = ''; // Limpiar el campo de entrada

    // Aplica los colores del degradado a las letras al iniciar la animación
    letters.forEach(function (letter) {
        var hue1 = Math.random() * 60; // Rango de colores de 0 a 60 (verde)
        var hue2 = (hue1 + 70) % 360; // Desplazamiento de 120 grados para el segundo color (azul)
        letter.style.background = `linear-gradient(45deg, hsl(${hue1}, 100%, 50%), hsl(${hue1 + 30}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;
        letter.style.backgroundClip = 'text';
        letter.style.webkitBackgroundClip = 'text';
        letter.style.color = 'transparent';
    });

    // Cambia los colores del degradado de cada letra cada 2 segundos
    setInterval(function () {
        letters.forEach(function (letter) {
            var hue1 = Math.random() * 60;
            var hue2 = (hue1 + 300) % 360;
            letter.style.background = `linear-gradient(45deg, hsl(${hue1}, 100%, 50%), hsl(${hue1 + 30}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;
            letter.style.backgroundClip = 'text';
            letter.style.webkitBackgroundClip = 'text';
            letter.style.color = 'transparent';
        });
    }, 1000);
});