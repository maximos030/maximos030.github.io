import yfinance as yf

# Tickersymbol vom Benutzer abfragen
tickerSymbol = input("Bitte geben Sie das Tickersymbol der Aktie ein (z.B. ADS.DE für Adidas): ")

# Daten von Yahoo Finance abrufen
tickerData = yf.Ticker(tickerSymbol)
todayData = tickerData.history(period='1d')
close_price = todayData['Close'][0]
rounded_close_price = round(close_price, 2)

# Ausgabe der Informationen
print("Aktueller Schlusskurs von", tickerSymbol + ":", str(rounded_close_price) + " EUR")
