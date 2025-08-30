function cambiarOrden() {
    const section = document.getElementById("citySection");
    
    if (section.style.flexDirection === 'column') {
        section.style.flexDirection = 'row';
    } else {
        section.style.flexDirection = 'column';
    }
}


function cambiarTitulo() {
    document.querySelector('h1').innerText = 'Nuevo Título: Universidad Demo';
}



function cambiarColor() {
    document.getElementById('londonTitle').style.color = 'red';   
    document.getElementById('parisTitle').style.color = 'red';
    document.getElementById('tokyoTitle').style.color = 'red';

    const paragraphs = document.querySelectorAll('#citySection p');
    paragraphs.forEach(p => p.style.color = 'blue');  
}


function agregarImagen() {
    const imageContainer = document.getElementById('imageContainer');
    
    if (!imageContainer.querySelector('img')) {
        const img = document.createElement('img');
        img.src = 'Imagen.jpg';
        img.alt = 'Imagen agregada';
        img.style.marginTop = '10px';
        imageContainer.appendChild(img);
    }
}
