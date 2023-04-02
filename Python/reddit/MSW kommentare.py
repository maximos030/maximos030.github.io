import praw
import sys

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

# Durchlaufen und Drucken der Kommentare
for comment in comments:
    print(comment.body)
