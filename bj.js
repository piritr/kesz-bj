const startBtn = document.getElementById("startBtn");
const jatekhely = document.getElementById("játékhely");
const jatekosokHelye = document.getElementById("játékosokhelye");
const dealerOssz = document.getElementById("dealerossz");
let dealerPont = 0;

// Kártyahúzás – Ász mindig 11
function huzKartya() {
let lap = Math.floor(Math.random() * 13) + 1;
 if (lap === 1) {
        return 11; 
    }
  if (lap > 10) {
    return 10; 
    }
 return lap; 
}

startBtn.addEventListener("click", () => {
 jatekhely.classList.remove("hidden");
jatekosokHelye.innerHTML = "";

dealerPont = 0;
 dealerOssz.textContent = "Dealer pont: 0";

    const inputs = document.querySelectorAll(".jatekosid input");

    inputs.forEach(input => {
  if (input.value.trim() !== "") {
 let pont = 0;

     const box = document.createElement("div");
     box.className = "player-box";

     const nev = document.createElement("h3");
 nev.textContent = input.value;

const pontKiir = document.createElement("p");
     pontKiir.textContent = "Pont: 0";

      const huzBtn = document.createElement("button");
 huzBtn.textContent = "Húz";

     const megallBtn = document.createElement("button");
     megallBtn.textContent = "Megáll";

     huzBtn.onclick = () => {
                pont += huzKartya();
                pontKiir.textContent = "Pont: " + pont;

         if (pont > 21) {
               pontKiir.textContent += "  Bust!";
              huzBtn.disabled = true;
         megallBtn.disabled = true;
                }
            };

            megallBtn.onclick = () => {
                while (dealerPont < 17) {
                    dealerPont += huzKartya();
                }

                dealerOssz.textContent = "Dealer pont: " + dealerPont;

                let eredmeny = "";
                if (dealerPont > 21 || pont > dealerPont) {
                    eredmeny = "  Nyertél!";
                } else if (pont === dealerPont) {
                    eredmeny = "  Döntetlen";
                } else {
                    eredmeny = "  Vesztettél";
                }

                pontKiir.textContent += eredmeny;
                huzBtn.disabled = true;
                megallBtn.disabled = true;
            };

            box.appendChild(nev);
            box.appendChild(pontKiir);
            box.appendChild(huzBtn);
            box.appendChild(megallBtn);

            jatekosokHelye.appendChild(box);
        }
    });
});
