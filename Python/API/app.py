from flask import Flask, Response
import requests

app = Flask(__name__)

@app.route("/download_bafin_data")
def download_bafin_data():
    url = "https://portal.mvp.bafin.de/database/DealingsInfo/sucheForm.do?meldepflichtigerName=&zeitraum=2&d-4000784-e=1&emittentButton=Suche+Emittent&emittentName=&zeitraumVon=01.03.2023&emittentIsin=&6578706f7274=1&zeitraumBis=31.03.2023"
    response = requests.get(url)
    # Set the Content-Type to 'text/csv' so the browser knows to download the file as a CSV
    headers = {'Content-Type': 'text/csv', 'Content-Disposition': 'attachment; filename=bafin_dealings.csv'}
    return Response(response.content, headers=headers)

if __name__ == "__main__":
    app.run()
