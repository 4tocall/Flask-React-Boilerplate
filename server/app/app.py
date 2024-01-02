from flask import Flask
from flask_cors import CORS
from app.config import Config

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

from app import routes