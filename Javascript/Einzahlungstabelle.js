		// Daten aus der lokalen Speicherung abrufen
		var data = localStorage.getItem('einnahmen');
		if (data) {
			data = JSON.parse(data);
			for (var i = 0; i < data.length; i++) {
				addRow(data[i].datum, data[i].betrag);
			}
		}

		function addRow(date, amount) {
			if (!date) {
				date = document.getElementById("date").value;
			}
			if (!amount) {
				amount = document.getElementById("amount").value;
			}
			var table = document.getElementById("myTable");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			cell1.innerHTML = date;
			cell2.innerHTML = amount;
			cell3.innerHTML = '<button onclick="editRow(this)">Bearbeiten</button> <button onclick="deleteRow(this)">Löschen</button>';

			// Daten in der lokalen Speicherung speichern
			var data = localStorage.getItem('einnahmen');
			if (data) {
				data = JSON.parse(data);
			} else {
				data = [];
			}
			data.push({datum: date, betrag: amount});
			localStorage.setItem('einnahmen', JSON.stringify(data));
		}

		function editRow(button) {
			var row = button.parentNode.parentNode;
			var date = row.cells[0].innerHTML;
			var amount = row.cells[1].innerHTML;
			row.cells[0].innerHTML = '<input type="date" value="' + date + '">';
			row.cells[1].innerHTML = '<input type="number" value="' + amount + '">';
			button.innerHTML = 'Speichern';
			button.onclick = function() { saveRow(this); };
		}

		function saveRow(button) {
			var row = button.parentNode.parentNode;
			var date = row.cells[0].querySelector('input').value;
			var amount = row.cells[1].querySelector('input').value;
			row.cells[0].innerHTML = date;
			row.cells[1].innerHTML = amount;
			button.innerHTML = 'Bearbeiten';
			button.onclick = function() { editRow(this); };

			// Daten in der lokalen Speicherung aktualisieren
			var data = localStorage.getItem('einnahmen');
			if (data
            ) {
data = JSON.parse(data);
for (var i = 0; i < data.length; i++) {
if (data[i].datum == date && data[i].betrag == amount) {
data[i].datum = date;
data[i].betrag = amount;
localStorage.setItem('einnahmen', JSON.stringify(data));
break;
}
}
}
}

function deleteRow(button) {
		var row = button.parentNode.parentNode;
		var date = row.cells[0].innerHTML;
		var amount = row.cells[1].innerHTML;
		row.parentNode.removeChild(row);

		// Daten in der lokalen Speicherung aktualisieren
		var data = localStorage.getItem('einnahmen');
		if (data) {
			data = JSON.parse(data);
			for (var i = 0; i < data.length; i++) {
				if (data[i].datum == date && data[i].betrag == amount) {
					data.splice(i, 1);
					localStorage.setItem('einnahmen', JSON.stringify(data));
					break;
				}
			}
		}
	}

	function clearTable() {
		// Tabelle leeren
		var table = document.getElementById("myTable");
		while (table.rows.length > 1) {
			table.deleteRow(1);
		}

		// Daten aus der lokalen Speicherung entfernen
		localStorage.removeItem('einnahmen');
	}