import './style.css';
const exclamation = document.querySelector(".exclamation");
if (exclamation) {
    setInterval(() => {
        exclamation.style.visibility =
            exclamation.style.visibility === "hidden" ? "visible" : "hidden";
    }, 800);
}
const heart = document.querySelector("svg");
let scaleUp = true;
setInterval(() => {
    if (heart) {
        heart.style.transform = scaleUp ? "scale(1.2)" : "scale(1)";
        heart.style.transition = "transform 0.3s ease-in-out";
        scaleUp = !scaleUp;
    }
}, 600); // beats about once per 1.2 seconds (up & down)
const birthDate = new Date("1985-07-05T13:10:00"); // Replace with your date
function updateCounter() {
    const now = new Date();
    let diff = now.getTime() - birthDate.getTime();
    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const daysSinceBirth = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(daysSinceBirth / 365.25);
    const months = Math.floor((daysSinceBirth % 365.25) / 30.44);
    const days = Math.floor((daysSinceBirth % 365.25) % 30.44);
    const timeUnits = { years, months, days, hours, minutes, seconds };
    for (let key in timeUnits) {
        const typedKey = key;
        const box = document.querySelector(`#${typedKey} .num`);
        const newValue = timeUnits[typedKey].toString().padStart(2, '0');
        if (box && box.textContent !== newValue) {
            box.textContent = newValue;
            box.classList.add("flip");
            setTimeout(() => box.classList.remove("flip"), 500);
        }
    }
}
updateCounter();
setInterval(updateCounter, 1000);
// const p: object = document.querySelector(".myParagraph") as HTMLParagraphElement;
// console.log(p)
// console.log( typeof p)
// if (p) {
//     setInterval(() => {
//         if (p.textContent.endsWith("!")) {
//             p.textContent = p.textContent.slice(0, -1); // Remove "!"
//         } else {
//             p.textContent += "!"; // Add "!"
//         }
//     }, 1000);
// }
