

const reloj = document.querySelector('.reloj');

const tick=()=>{
    const tiempo=new Date();
    const h=tiempo.getHours();
    const m=tiempo.getMinutes();
    const s=tiempo.getSeconds();

    const html = `<span>${h}</span>:<span>${m}</span><span id="seg">${s}</span>`;
 
reloj.innerHTML = html;

}

setInterval(tick,1000);
