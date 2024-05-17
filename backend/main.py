from flask import Flask, request
from flask_cors import CORS
import pymysql
import logging
import datetime

app = Flask(__name__)
CORS(app)

@app.route("/api/contactme", methods=["post"])
def post_contactme():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)

    cursor = db.cursor()

    contactme = request.json
    print(contactme)

    query = "INSERT INTO contactme VALUES(%s,%s,%s,%s,%s,%s);"
    cursor.execute
    (query,
        [
            contactme["id"],
            contactme["name"],
            contactme["email"],
            contactme["subject"],
            contactme["message"],
            datetime.datetime.now(),
        ],
        )
    cursor.close()
    db.close()

    return {"isSuccessful": True}




except Exception as e:
    logging.error(e)
    return {"isSuccessful": False}

@app.route("/api/donation", methods=["GET"])
def get_donationCards():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)

    cursor = db.cursor()

    query = "SELECT * FROM donationcards WHERE onShowCase=True;"
    cursor.execute(query)

    donationCards = cursor.fetchall()

    results = []
    for donationCard in donationCards:
        donationCard_obj = {
            "id": donationCard[0],
            "donationCardsImg": donationCard[1],
            "title": donationCard[2],
        }
        results.append(donationCard_obj)
    cursor.close()
    db.close()
    return {"isSuccessful": True, "results": results}

except Exception as e:
    logging.error(e)
    return {"isSuccessful": False, "results": []}

@app.route("/api/donations", methods=["GET"])
def get_donationServices():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)



    cursor = db.cursor()

    query = "SELECT * FROM donationservices WHERE onShowCase=True;"
    cursor.execute(query)

    donationServices = cursor.fetchall()

    results = []
    for donationService in donationServices:
        donationService_obj = {
            "id": donationService[0],
            "donationServicesImg": donationService[1],
            "title": donationService[2],
            "excerpt": donationService[3],
        }
        results.append(donationService_obj)
    cursor.close()
    db.close()
    return {"isSuccessful": True, "results": results}

except Exception as e:
    logging.error(e)
    return {"isSuccessful": False, "results": []}

@app.route("/api/donationprocess", methods=["GET"])
def get_processCards():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)

    cursor = db.cursor()

    query = "SELECT * FROM processcards WHERE onShowCase=True;"
    cursor.execute(query)

    processCards = cursor.fetchall()

    results = []
    for processCard in processCards:
        processCard_obj = {
            "id": processCard[0],


            "processBgImg": processCard[1],
            "processIcon": processCard[2],
            "title": processCard[3],
        }
        results.append(processCard_obj)
    cursor.close()
    db.close()
    return {"isSuccessful": True, "results": results}

except Exception as e:
    logging.error(e)
    return {"isSuccessful": False, "results": []}

@app.route("/api/organics", methods=["GET"])
def get_organics():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)

    cursor = db.cursor()

    query = "SELECT * FROM organics WHERE onShowCase=True;"
    cursor.execute(query)

    organics = cursor.fetchall()

    results = []
    for organic in organics:
        organic_obj = {
            "id": organic[0],
            "organicImg": organic[1],
            "excerpt": organic[2],
        }
        results.append(organic_obj)
    cursor.close()
    db.close()
    return {"isSuccessful": True, "results": results}

except Exception as e:
    logging.error(e)
    return {"isSuccessful": False, "results": []}

@app.route("/api/", methods=["GET"])
def get_cards():
    try:

    db = pymysql.connect(host="localhost", user="root",
                            db="aaharadhaan", autocommit=True)

    cursor = db.cursor()

    query = "SELECT * FROM cards WHERE onShowCase=True;"
    cursor.execute(query)

    cards = cursor.fetchall()

    results = []
    for card in cards:
        card_obj = {
            "id": card[0],
            "title": card[1],
            "excerpt": card[2],
            "cardImg": card[3],
            "cardPageLink": card[4],
        }
        results.append(card_obj)
    cursor.close()
    db.close()
    return {"isSuccessful": True, "results": results}

except Exception as e:
    logging.error(e)
    return {"isSuccessful": False, "results": []}
