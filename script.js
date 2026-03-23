let km = parseFloat(prompt("Quanti km vuoi percorrere? (minimo 1 KM)"));
let anni = parseInt(prompt("Età passeggero? (0-130)"));

// Validazione km e età
if (isNaN(km) || km < 1) {
    alert("Km non validi! Minimo 1 km. Ricarica e riprova.");
    console.log("Errore: km inferiori a 1");
} else if (isNaN(anni) || anni < 0 || anni > 130) {
    alert("Età non valida! (0-130 anni). Ricarica e riprova.");
    console.log("Errore: età fuori dal range");
} else {
    // Calcolo solo se TUTTO valido
    const prezzoAlKm = 0.21;
    let prezzoSenzaSconti = km * prezzoAlKm;
    let prezzoFinale = prezzoSenzaSconti;
    
    if (anni < 18) {
        prezzoFinale *= 0.8;  // 20% sconto minorenni
    } else if (anni >= 65) {
        prezzoFinale *= 0.6;  // 40% sconto anziani
    }
    
    prezzoFinale = prezzoFinale.toFixed(2);
    console.log(`Prezzo totale: ${prezzoFinale} €`);
}