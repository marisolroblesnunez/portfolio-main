
document.getElementById("parallax").style.backgroundImage ="url('img/jjj.jpg')";
window.addEventListener('scroll', ()=>{
    const parallax = document.getElementById("parallax");
    const scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    parallax.style.backgroundPositionY = (scrollPosition * 0.7) + 'px';
}) 