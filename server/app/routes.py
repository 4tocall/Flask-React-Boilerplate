from app.app import app
from flask import jsonify, abort

@app.route('/api')
def hello():
    try:
        return jsonify(message="Hello, Front! I'm Flask")
    except Exception as e:
        abort(500, description=str(e))