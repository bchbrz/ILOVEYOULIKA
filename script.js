const messages = [
    "Неправильный выбор"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}


function handleYesClick() {
    window.location.href = "No1_page.html";
}


function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heart = document.createElement('div');
    heart.innerHTML = '❤';
    heart.className = 'floating-heart';
    
    const startPos = Math.random() * 100;
    heart.style.left = startPos + 'vw';
    
    const duration = 6 + Math.random() * 4;
    heart.style.animationDuration = duration + 's';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1500);
}

function createMusicNote() {
    const notes = ['♪', '♫', '♬', '♩'];
    const note = document.createElement('div');
    note.className = 'music-note';
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    note.style.left = Math.random() * window.innerWidth + 'px';
    note.style.top = window.innerHeight + 'px';
    document.body.appendChild(note);

    setTimeout(() => {
        note.remove();
    }, 3000);
}


// Mouse move effect
const glow = document.createElement('div');
glow.className = 'glow';
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
    
    if (Math.random() < 0.1) {
        createSparkle(e.pageX, e.pageY);
    }
});



// Heart click effect
const mainHeart = document.querySelector('.heart');
mainHeart.addEventListener('click', () => {


    // Create mini hearts explosion
    for (let i = 0; i < 20; i++) {
        const miniHeart = document.createElement('div');
        miniHeart.className = 'mini-heart';
        miniHeart.textContent = '❤';
        miniHeart.style.position = 'absolute';
        miniHeart.style.left = (mainHeart.offsetLeft + mainHeart.offsetWidth/2) + 'px';
        miniHeart.style.top = (mainHeart.offsetTop + mainHeart.offsetHeight/2) + 'px';
        
        // Random direction and rotation
        const angle = (Math.random() * Math.PI * 2);
        const distance = 100 + Math.random() * 150;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        const rotation = Math.random() * 360;
        
        miniHeart.style.setProperty('--tx', `${tx}px`);
        miniHeart.style.setProperty('--ty', `${ty}px`);
        miniHeart.style.setProperty('--rot', `${rotation}deg`);
        
        miniHeart.style.animation = 'miniHeartFloat 1s ease-out forwards';
        
        document.body.appendChild(miniHeart);
        
        setTimeout(() => miniHeart.remove(), 1000);
    }

    // Add sparkle effect
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createSparkle(
                mainHeart.offsetLeft + mainHeart.offsetWidth/2 + (Math.random() - 0.5) * 150,
                mainHeart.offsetTop + mainHeart.offsetHeight/2 + (Math.random() - 0.5) * 150
            );
        }, i * 50);
    }

    createButterfly();
    createMusicNote();
});

setInterval(createFloatingHearts, 300);
setInterval(createMusicNote, 5000);
setInterval(createButterfly, 8000);






