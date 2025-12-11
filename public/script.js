const matrix = document.getElementById("dotmatrix");
let dots = [];


for (let i = 0; i < 64; i++) {
const d = document.createElement("div");
d.classList.add("dot");
matrix.appendChild(d);
dots.push(d);
}


function clearMatrix() {
dots.forEach(d => d.classList.remove("on"));
}


// Pixel-art JSON yükleme fonksiyonu
async function loadPixelArt(name) {
const data = await fetch(`assets/${name}.json`).then(r => r.json());
return data;
}


function drawPixelArt(pattern) {
clearMatrix();
pattern.forEach(i => dots[i].classList.add("on"));
}


// Rastgele soru üret
let a, b;
function newQuestion() {
a = Math.floor(Math.random() * 9) + 1;
b = Math.floor(Math.random() * 9) + 1;
document.getElementById("question").textContent = `${a} + ${b} = ?`;
}
newQuestion();


// Cevap kontrolü
const answer = document.getElementById("answer");
document.getElementById("submit").onclick = async () => {
const val = Number(answer.value);
answer.value = "";


if (val === a + b) {
const heart = await loadPixelArt("pixel-heart");
drawPixelArt(heart);
} else {
const sad = await loadPixelArt("pixel-emojis");
drawPixelArt(sad.sad);
}


newQuestion();
};
