let i = 0;
function typeWriter() {
    const txt = 'ENG3010 Research Guide';
    const speed = 50; // miliseconds

    if (i < txt.length) {
        document.getElementById("hero-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function setBlock() {
    document.getElementById("hero-text").style.display = "block";
    typeWriter();
}
setTimeout(setBlock, 1000);