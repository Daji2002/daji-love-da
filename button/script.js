const button = document.getElementById("n1");
const button1 = document.getElementById("n");

button.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});
button1.addEventListener("click", ()=>{
    alert("I love you too")
})