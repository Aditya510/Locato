from flask import Flask
from flask import jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

import corealgo
@app.route("/forward/<longlat>", methods = ['GET'])
def forward(longlat):
    cordlis = longlat.split(',')
    x,y = cordlis[0], cordlis[1]
    address= corealgo.coord_to_w3w(x,y)
    dict= {}
    dict['address'] = address
    return jsonify(dict)

@app.route("/reverse/<words>", methods = ['GET'])
def reverse(words):
    dict={}
    try:
        coords = (corealgo.uniquetocoord(corealgo.w3wtounique(words)))
        x,y = coords[0],coords[1]

        dict['x'] = x
        dict['y'] = y
        dict['Message'] = 'Successful'
        dict['Status code'] = 200
        return jsonify(dict)
    except:
        dict['Status code'] = 500
        dict['Message'] = 'Given word combination is out of range'
        return jsonify(dict)



@app.route('/')
def base():
    return ("Enter a URL of the form '/reverse/hello.world.me' or '/forward/23.456,45.345'")
if __name__ == '__main__':
    app.run(debug=True)

