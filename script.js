const toogle = document.getElementById("toogle");
const cena1 = document.getElementById("cena1");
const cena2 = document.getElementById("cena2");
const cena3 = document.getElementById("cena3");

toogle.addEventListener("change", promeniCenu);

function promeniCenu(){
    if (toogle.checked){
        cena1.innerHTML = "&dollar;199.99";
        cena2.innerHTML = "&dollar;249.99";
        cena3.innerHTML = "&dollar;399.99";
    } else{
        cena1.innerHTML = "&dollar;19.99";
        cena2.innerHTML = "&dollar;24.99";
        cena3.innerHTML = "&dollar;39.99";
    }
}