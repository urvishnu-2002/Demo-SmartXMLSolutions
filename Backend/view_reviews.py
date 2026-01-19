import sqlite3

conn = sqlite3.connect("SmartXML.db")
cur = conn.cursor()
cur.execute("SELECT * FROM reviews")

for row in cur.fetchall():
    print(row)

conn.close()