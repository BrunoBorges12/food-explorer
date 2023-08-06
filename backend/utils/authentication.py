from functools import wraps

from flask import Flask
from flask import jsonify

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt
from flask_jwt_extended import JWTManager,verify_jwt_in_request
import flask_jwt_extended

app = Flask(__name__)

app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
jwt = JWTManager(app)


from flask_jwt_extended.exceptions import JWTExtendedException

def token_required(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
                verify_jwt_in_request()
                return fn(*args, **kwargs)
               
        return decorator

