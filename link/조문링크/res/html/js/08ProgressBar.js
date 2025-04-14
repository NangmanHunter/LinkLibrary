document.querySelector("head").innerHTML+=`
    <style>
        #scroll-indicator {
            position: fixed;
            top: 0;
            left: 0;
            height: 1px;
            background: linear-gradient(to right, transparent, red);
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease-out;
        }
    </style>
`



window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector("#scroll-indicator").style.width = `${scrollPercent}%`;
});
