function addData() {
    var datum = document.getElementById("datum").value;
    var betrag = document.getElementById("betrag").value;
    var tableRef = document.getElementById("einlagen-tabelle").getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();
    var datumCell = newRow.insertCell(0);
    var betragCell = newRow.insertCell(1);
    datumCell.appendChild(document.createTextNode(datum));
    betragCell.appendChild(document.createTextNode(betrag));
  }
  