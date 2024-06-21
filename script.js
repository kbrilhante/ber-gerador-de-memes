const ibagens = [
	"animal.gif",
	"bad-cat.gif",
	"boom-bomb.gif",
	"cat-jump.gif",
	"cat-push-off.gif",
	"dog-trampoline.gif",
	"drop-the-pet.gif",
	"duck-coffee.gif",
	"kitten.gif",
	"penguin-penguins.gif",
	"raposas.gif",
	"trampoline.gif"
];

const txtLegenda = document.getElementById("texto");
const meme = document.getElementById("meme");


function gerar() {
	if (txtLegenda.value) {
		meme.innerHTML = "";

		let img = document.createElement("img");
		img.className = "ibagem";
		img.src = "./img/" + random();
		img.alt = "Ibagem do meme";

		meme.appendChild(img);

		let legenda = document.createElement("h2");
		legenda.className = "legenda";
		legenda.textContent = txtLegenda.value;

		meme.appendChild(legenda);

		txtLegenda.value = "";
	}
}

function random() {
	let i = Math.floor(Math.random() * ibagens.length);

	return ibagens[i];
}