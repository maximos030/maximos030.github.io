function downloadCSV() {
    var csvUrl = "https://portal.mvp.bafin.de/database/DealingsInfo/sucheForm.do?meldepflichtigerName=&zeitraum=2&d-4000784-e=1&emittentButton=Suche+Emittent&emittentName=&zeitraumVon=01.03.2023&emittentIsin=&6578706f7274=1&zeitraumBis=31.03.2023";
    var csvFilename = "bafin_dealings.csv";
    var downloadLink = document.getElementById("csvDownloadLink");
    downloadLink.href = csvUrl;
    downloadLink.download = csvFilename;
    downloadLink.click();
}
