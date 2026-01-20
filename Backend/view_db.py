import sqlite3

conn = sqlite3.connect("SmartXML.db")
cur = conn.cursor()
#cur.execute("SELECT name FROM sqlite_master WHERE type='table';")
#cur.execute("SELECT * FROM reviews")
cur.execute("SELECT * FROM sqlite_sequence")
#cur.execute("SELECT * FROM contactinfo")
#cur.execute("SELECT * FROM services")

for row in cur.fetchall():
    print(row)

conn.close()