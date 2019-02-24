from flask import Flask

app = Flask(__name__)

import corealgo
@app.route("/forward/<longlat>", methods = ['GET'])
def forward(longlat):
    cordlis = longlat.split(',')
    x,y = cordlis[0], cordlis[1]
    return corealgo.coord_to_w3w(x,y)

@app.route("/reverse/<words>", methods = ['GET'])
def reverse(words):
    coords = (corealgo.uniquetocoord(corealgo.w3wtounique(words)))
    x,y = coords[0],coords[1]
    return ('Coordinates: ' + str(x)[:7] + ', ' + str(y)[:7])


if __name__ == '__main__':
    app.run(debug=True)

