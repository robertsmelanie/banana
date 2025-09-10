const canvas = document.getElementById('bananaCanvas');
glasses: 'https://i.imgur.com/QzA6JDh.png',
    hat: 'https://i.imgur.com/jZoHMqU.png'
};


function draw() {
    const base = new Image();
    base.src = assets[baseSelect.value];
    base.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(base, 0, 0, canvas.width, canvas.height);


        if (accessorySelect.value !== 'none') {
            const accessory = new Image();
            accessory.src = assets[accessorySelect.value];
            accessory.onload = () => {
                ctx.drawImage(accessory, 0, 0, canvas.width, canvas.height);
                drawCaption();
            };
        } else {
            drawCaption();
        }
    };
}


function drawCaption() {
    const caption = captionInput.value;
    if (caption) {
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.fillText(caption, canvas.width / 2, canvas.height - 10);
    }
}


function randomize() {
    const bases = ['yellow', 'green', 'brown'];
    const accessories = ['none', 'glasses', 'hat'];
    baseSelect.value = bases[Math.floor(Math.random() * bases.length)];
    accessorySelect.value = accessories[Math.floor(Math.random() * accessories.length)];
    captionInput.value = 'Banana Vibes!';
    draw();
}


function downloadImage() {
    const link = document.createElement('a');
    link.download = 'my-nano-banana.png';
    link.href = canvas.toDataURL();
    link.click();
}


baseSelect.addEventListener('change', draw);
accessorySelect.addEventListener('change', draw);
captionInput.addEventListener('input', draw);


// Initial draw
draw();