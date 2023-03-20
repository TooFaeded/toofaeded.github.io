const track=document.getElementById("image-track");let prevPercentage=0;const handleOnDown=t=>{track.dataset.mouseDownAt=t.clientX},handleOnUp=()=>{track.dataset.mouseDownAt="0",track.dataset.prevPercentage=track.dataset.percentage},handleOnMove=t=>{if("0"===track.dataset.mouseDownAt)return;let e=parseFloat(track.dataset.mouseDownAt)-t.clientX,o=3*window.innerWidth/5,a=-(e/o*100),n=parseFloat(track.dataset.prevPercentage)+a,l=Math.max(Math.min(n,0),-100);for(let r of(track.dataset.percentage=l,track.animate({transform:`translate(${l}%, -50%)`},{duration:1400,fill:"forwards"}),track.getElementsByClassName("track-image")))r.animate({objectPosition:`${100+l}% center`},{duration:1400,fill:"forwards"})},portfolioBtn=document.getElementById("portfolio-btn"),portfolioCloseBtn=document.getElementById("portfolio-close-btn"),headerPortfolioBtn=document.getElementById("header-portfolio-btn"),toggleTrackVisibility=()=>{let t="visible"===track.style.visibility,e=t?0:prevPercentage;track.style.visibility=t?"hidden":"visible",track.dataset.mouseDownAt=0,track.dataset.percentage=e,track.dataset.prevPercentage=e},toggleHeaderBtnStyle=()=>{headerPortfolioBtn.classList.toggle("active"),headerPortfolioBtn.classList.contains("active")?(headerPortfolioBtn.style.backgroundColor="#FFFAFF",headerPortfolioBtn.style.color="#0D1F22"):(headerPortfolioBtn.style.backgroundColor="",headerPortfolioBtn.style.color="")},toggleVisibilityAndStyle=()=>{toggleTrackVisibility(),toggleHeaderBtnStyle()};portfolioBtn.addEventListener("click",toggleVisibilityAndStyle),portfolioCloseBtn.addEventListener("click",toggleVisibilityAndStyle),headerPortfolioBtn.addEventListener("click",toggleVisibilityAndStyle);const cards=document.querySelectorAll(".card");cards.forEach((t,e)=>{setTimeout(()=>{t.classList.add("card-show")},200*e)});const toggleBtns=document.querySelectorAll(".toggle-btn");toggleBtns.forEach(t=>{t.addEventListener("click",()=>{let e=t.nextElementSibling;e.classList.toggle("active"),t.textContent=e.classList.contains("active")?"Show More":"Show Less"})}),window.onmousedown=t=>handleOnDown(t),window.ontouchstart=t=>handleOnDown(t.touches[0]),window.onmouseup=t=>handleOnUp(t),window.ontouchend=t=>handleOnUp(t.touches[0]),window.onmousemove=t=>handleOnMove(t),window.ontouchmove=t=>handleOnMove(t.touches[0]);