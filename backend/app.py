from flask import Flask,jsonify,send_from_directory,make_response
from flask_restful import Api,Resource
from controller.product import Product,Products
from controller.user import Register,Login
from flask_pymongo import PyMongo
from database import mongo
from flask_jwt_extended import JWTManager
from flask_jwt_extended.exceptions import NoAuthorizationError,InvalidHeaderError
from config import MONGO_URI,SECRET
UPLOAD_FOLDER = '/home/bruno/projetos/food-explorer/backend/upload'

app = Flask(__name__,static_folder=UPLOAD_FOLDER)


api = Api(app)

app.config["MONGO_URI"] = MONGO_URI
app.config['SECRET_KEY'] = SECRET
app.config['JWT_TOKEN_LOCATION'] = ['headers']  # Define a localização do token como cabeçalho
app.config['JWT_HEADER_NAME'] = 'Authorization'  # Define o nome do cabeçalho onde o token deve ser incluído
app.config['JWT_HEADER_TYPE'] = 'Bearer'  # Define o tipo de cabeçalho onde o token deve ser incluído
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
jwt = JWTManager(app)
mongo.init_app(app)

@jwt.invalid_token_loader
def invalid_token_loader(err):
    print(err)
    return make_response({'msg': 'token invalido',"err":err}), 401 #<==== This causes the exceptiondef handle_auth_error(error):
   
@jwt.unauthorized_loader
def unauthorized_loader(err):
    print(err)
    return make_response({'msg': err},err), 401 #<==== This causes the exceptiondef handle_auth_error(error):
   

def uploaded_images(Resource):
   def get(self, filename):
        return send_from_directory(UPLOAD_FOLDER, filename)


@app.after_request

def after_request(response):
  response.headers.add('Access-Control-Allow-Origin', '*')
  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  return response

class UploadedImages(Resource):
    def get(self, filename):
        return send_from_directory(UPLOAD_FOLDER, filename)

api.add_resource(Products, '/api/products')
api.add_resource(Product, '/api/product/<string:id_product>', '/api/product')
api.add_resource(Register, '/api/register')
api.add_resource(Login, '/api/login')
api.add_resource(UploadedImages, '/uploaded_images/<filename>')  # Inclua o recurso aqui
if __name__ == '__main__':
    app.run(debug=True)