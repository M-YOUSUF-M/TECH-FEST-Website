const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// Ensure the canvas covers the entire viewport
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1'; // Send it to the background
canvas.style.pointerEvents = 'none'; // Prevent interference with user interactions

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#00d4ff';
        ctx.fill();
    });
}

function update() {
    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
}

function animate() {
    draw();
    update();
    requestAnimationFrame(animate);
}

// Update canvas size on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();


