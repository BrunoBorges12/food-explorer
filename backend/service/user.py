from database import mongo
from models.Auth import SchemaUser
from datetime import datetime,timedelta
from pydantic import BaseModel, ValidationError
from common import generate_response
from http_code import HTTP_400_BAD_REQUEST,HTTP_201_CREATED,HTTP_401_UNAUTHORIZED
from flask_jwt_extended import  create_access_token
from flask import jsonify
import json


def login_user(request,input_data):
    try:
        user =SchemaUser.model_validate(input_data)
        get_user = mongo.db.user.find_one({"email":user.email})
        print
        if get_user is None:    

            return generate_response(message='Usuario não existe',status=HTTP_401_UNAUTHORIZED)
        user = SchemaUser.model_validate(get_user)
        if user.verify_password(input_data.get('password')):
             token = create_access_token(identity=str(get_user["_id"]),additional_claims={"is_administrator": user.role == 'admin'},expires_delta=timedelta(minutes=30))
             input_data["token"] = token
             input_data['role'] = user.role
             return generate_response(
            data=input_data, message="User login successfully", status=HTTP_201_CREATED
        )

        else:
            return generate_response(message='Senha incorreta',status=HTTP_401_UNAUTHORIZED)
    except ValidationError as exc:
       
        return generate_response(message=repr(exc.errors()[0]))

