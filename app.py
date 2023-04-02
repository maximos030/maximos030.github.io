from flask import Flask, jsonify
from flask_cors import CORS  # Importiere die CORS-Erweiterung
import praw
import sys

app = Flask(__name__)
CORS(app)  # Füge die CORS-Erweiterung hinzu

@app.route('/comments')
def get_comments():
    # Ändern der Standardkodierung der Konsole
    sys.stdout.reconfigure(encoding='utf-8')

    # Zugriff auf die Reddit API
    reddit = praw.Reddit(
        client_id="G_k96_woCKh-fue2bd7ahw",
        client_secret="J4-__NPkIYtHOjspFx_xpd49EL4JFQ",
        user_agent="my_bot/0.0.1 (by /u/kabelkater)",
        auth="OAuth2",
    )

    # Definieren des Benutzernamens
    username = "MSWKN"

    # Abrufen der letzten 100 Kommentare des Benutzers
    comments = reddit.redditor(username).comments.new(limit=100)

    # Durchlaufen und Sammeln der Kommentare
    comments_list = []
    for comment in comments:
        comments_list.append(comment.body)

    # Rückgabe der Kommentare als JSON
    return jsonify({'comments': comments_list})

if __name__ == '__main__':
    app.run()
