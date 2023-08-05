from models.Auth import Register as Register_model,SchemaUser
from flask_restful import Resource,request
from database import mongo
from datetime import datetime
from werkzeug.exceptions import Conflict
from service import user
from flask import request, make_response,Response




class Login(Resource):
    def post(self)-> Response:
        data = request.get_json()
        response, status = user.login_user(request,data)
        print(response)
        return make_response(response,status)


class Register(Resource):
    def post(self):
        data = request.get_json()
        new_product = Register_model(**data)
        user = mongo.db.user.find_one({"email":new_product.email})
        if user:
            raise Conflict(description='Usuario já existe')
        
        new_product.created_at = str(datetime.today())
        new_product.updated_at = str(datetime.today())
        new_product.hash_password()
        new_product.role = 'user'

        result = mongo.db.user.insert_one(new_product.model_dump())
        
        if result.acknowledged:
            return {'mensagem':'Usuario criado com sucesso',"data":new_product.model_dump()},201
        else:
            return {'mensagem':'Não foi possivel fazer o registro'} ,500     
          