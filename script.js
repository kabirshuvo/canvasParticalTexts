window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const text = 'Amraow :) ';
    console.log(ctx);
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'yellow';
    ctx.font = '120px Helvitica';
    ctx.fillText(text, 120, 150);
    ctx.strokeText(text, 120, 150);
});

