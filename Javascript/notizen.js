function speichern() {
    var notiz = document.getElementById("notiz").value;
    var notizenContainer = document.getElementById("notizen-container");

    // Speichere die Notiz im Local Storage
    if (localStorage.getItem("notizen") === null) {
        // Erstelle ein Array, um Notizen zu speichern, wenn noch keines vorhanden ist
        var notizen = [];
    } else {
        // Lade vorhandene Notizen aus dem Local Storage
        var notizen = JSON.parse(localStorage.getItem("notizen"));
    }
    notizen.push(notiz);
    localStorage.setItem("notizen", JSON.stringify(notizen));

    // Erstelle ein neues Element, um die Notiz anzuzeigen
    var neueNotiz = document.createElement("p");
    neueNotiz.textContent = notiz;

    // Füge eine eindeutige ID zum p-Element hinzu
    var id = "notiz-" + (notizen.length - 1);
    neueNotiz.setAttribute("id", id);

    // Erstelle einen Button, um die Notiz zu löschen
    var loeschenButton = document.createElement("button");
    loeschenButton.textContent = "Löschen";
    loeschenButton.onclick = function() {
        loescheNotiz(id);
    };
    neueNotiz.appendChild(loeschenButton);

    // Füge das neue Element dem Container hinzu
    notizenContainer.appendChild(neueNotiz);

    // Lösche den Inhalt des Textarea-Elements
    document.getElementById("notiz").value = "";
}

// Lade gespeicherte Notizen aus dem Local Storage beim Laden der Seite
window.onload = function() {
    var notizen = JSON.parse(localStorage.getItem("notizen"));
    if (notizen !== null) {
        var notizenContainer = document.getElementById("notizen-container");
        for (var i = 0; i < notizen.length; i++) {
            var neueNotiz = document.createElement("p");
            neueNotiz.textContent = notizen[i];
            var id = "notiz-" + i;
            neueNotiz.setAttribute("id", id);
            var loeschenButton = document.createElement("button");
            loeschenButton.textContent = "Löschen";
            loeschenButton.onclick = function() {
                loescheNotiz(id);
            };
            neueNotiz.appendChild(loeschenButton);
            notizenContainer.appendChild(neueNotiz);
        }
    }
}

function loeschen() {
    localStorage.removeItem("notizen");
    // Lösche alle Notizen aus dem Container
    var notizenContainer = document.getElementById("notizen-container");
    notizenContainer.innerHTML = "";
}
function loescheNotiz(id) {
// Entferne die Notiz aus dem Local Storage
var notizen = JSON.parse(localStorage.getItem("notizen"));
var notizIndex = parseInt(id.split("-")[1]);
notizen.splice(notizIndex, 1);
localStorage.setItem("notizen", JSON.stringify(notizen));

// Entferne das p-Element aus dem Container
var notiz = document.getElementById(id);
notiz.parentNode.removeChild(notiz);
}