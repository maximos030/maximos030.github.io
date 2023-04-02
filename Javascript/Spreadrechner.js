function berechneSpread() {
    const geldkurs = parseFloat(document.getElementById("geldkurs").value);
    const briefkurs = parseFloat(document.getElementById("briefkurs").value);
    const spread_euro = briefkurs - geldkurs;
    const spread_prozent = (spread_euro / briefkurs) * 100;
    document.getElementById("spread_euro").innerHTML = "Spread in Euro: " + spread_euro.toFixed(2);
    document.getElementById("spread_prozent").innerHTML = "Spread in Prozent: " + spread_prozent.toFixed(2) + "%";
    }