        // Definieren des Benutzernamens
        const username = "MSWKN";
        
        // URL zur Reddit-API
        const url = `https://www.reddit.com/user/${username}/comments.json?limit=100`;

        // HTTP-GET-Anfrage an die Reddit-API senden
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Durchlaufen und Drucken der Kommentare
                const comments = data.data.children;
                for (let comment of comments) {
                    const body = comment.data.body;
                    const regex = /\[(.*?)\]\((.*?)\)\s-\s(.*?)@(\d+\.\d+€)\((.*?)\)/;
                    const matches = regex.exec(body);
                    if (matches) {
                        const symbol = matches[1];
                        const name = matches[3];
                        const price = matches[4];
                        const change = matches[5];
                        const row = document.createElement("tr");
                        const symbolCell = document.createElement("td");
                        symbolCell.textContent = symbol;
                        row.appendChild(symbolCell);
                        const nameCell = document.createElement("td");
                        const nameLink = document.createElement("a");
                        nameLink.href = matches[2];
                        nameLink.textContent = name;
                        nameCell.appendChild(nameLink);
                        row.appendChild(nameCell);
                        const priceCell = document.createElement("td");
                        priceCell.textContent = price;
                        row.appendChild(priceCell);
                        const changeCell = document.createElement("td");
                        changeCell.textContent = change;
                        row.appendChild(changeCell);
                        document.getElementById("comments").appendChild(row);
                    }
                }
            })
            .catch(error => console.error(error));