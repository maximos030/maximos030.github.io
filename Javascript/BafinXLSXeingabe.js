var data; // Speichert den Inhalt der Excel-Datei
var startRow = 0; // Speichert die Startreihe der angezeigten Zeilen
var rowsPerView = 2; // Anzahl der Zeilen pro Ansicht

function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  var file = files[0];
  
  var reader = new FileReader();
  reader.onload = function(event) {
    data = event.target.result;
    showTable();
  };
  reader.readAsBinaryString(file);
}

function showTable() {
  var workbook = XLSX.read(data, {type: 'binary'});
  var sheet_name_list = workbook.SheetNames;
  var sheet = workbook.Sheets[sheet_name_list[0]];
  var range = XLSX.utils.decode_range(sheet['!ref']);
  range.s.r = startRow; // Setze die Startreihe auf die Anzahl der bereits angezeigten Zeilen
  range.e.r = startRow + rowsPerView - 1; // Setze die Endreihe auf die nächste Zeile
  sheet['!ref'] = XLSX.utils.encode_range(range);
  var html = XLSX.utils.sheet_to_html(sheet, {header:1, footer:0});
  document.getElementById('table-container').innerHTML = html;
}

function showNextRows() {
  startRow += rowsPerView; // Erhöhe die Anzahl der angezeigten Zeilen um die Anzahl der Zeilen pro Ansicht
  showTable(); // Aktualisiere die Tabelle
}

function showPrevRows() {
  startRow -= rowsPerView; // Verringere die Anzahl der angezeigten Zeilen um die Anzahl der Zeilen pro Ansicht
  if (startRow < 0) { // Prüfe, ob der Anfang erreicht wurde
    startRow = 0;
  }
  showTable(); // Aktualisiere die Tabelle
}
