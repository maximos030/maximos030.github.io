import praw

# Erstelle eine Instanz von PRAW
reddit = praw.Reddit(
    client_id="G_k96_woCKh-fue2bd7ahw",
    client_secret="J4-__NPkIYtHOjspFx_xpd49EL4JFQ",
    user_agent="my_bot/0.0.1 (by /u/kabelkater)",
    username="kabelkater",
    password="Roaringkitty187@kabelkarte",)

# Definiere den Benutzernamen, dessen Kommentare abgerufen werden sollen
username = 'kabelkater'

# Rufe die Kommentare des Benutzers ab
comments = reddit.redditor(username).comments.new(limit=None)

# Gehe durch jeden Kommentar und drucke den Text
for comment in comments:
    print(comment.body)
