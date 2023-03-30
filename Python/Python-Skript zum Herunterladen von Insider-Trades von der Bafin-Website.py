import requests

url = "https://portal.mvp.bafin.de/database/DealingsInfo/sucheForm.do?meldepflichtigerName=&zeitraum=2&d-4000784-e=1&emittentButton=Suche+Emittent&emittentName=&zeitraumVon=01.03.2023&emittentIsin=&6578706f7274=1&zeitraumBis=31.03.2023"

response = requests.get(url)

with open(r"../Aktien/EXCEL/Insidertrades EXCEL/bafin_dealings.csv", 'wb') as f:
    f.write(response.content)
