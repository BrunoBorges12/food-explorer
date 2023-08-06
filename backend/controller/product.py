from flask_restful import Resource,reqparse,request
from database  import mongo
from models.Product import Products as ProductModel
from flask import jsonify,make_response
from bson.objectid import  ObjectId
from werkzeug.utils import secure_filename
import os
from service.product import create_product
from utils.authentication import token_required
import pathlib 
from common import generate_response
from http_code import HTTP_400_BAD_REQUEST,HTTP_200_OK



ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
def allowed_file(filename):
        return '.' in filename and \
               filename.rsplit('.', 1)[1].lower()    in ALLOWED_EXTENSIONS

class Products(Resource):
   @token_required
   def get(self):   
     print(mongo.db.products.find())
     products = list(mongo.db.products.find())
     products_instances = [
            {**ProductModel.model_validate(product).model_dump(), "id": str(product["_id"])}
            for product in products
        ]
     return jsonify(products_instances)

   


class Product(Resource):
    @token_required
    def get(self,id_product):
      product_mongo = mongo.db.products.find_one({'_id':ObjectId(id_product)})
      product = ProductModel(**product_mongo)
      
      return product.model_dump()
    @token_required
    def post(self):
      response,status = create_product(request=request)
      return make_response(response,status)
    
    @token_required
    def put(self,id_product):
        try:
          form = request.form
          file = request.files['file']
          filter = {'_id': ObjectId(id_product)}
          p = pathlib.PurePosixPath(__file__)
          findImg = mongo.db.products.find_one(filter)['img']
          if os.path.exists(f"{p.parent.parent}/upload/{findImg}"):
              os.remove(f"{p.parent.parent}/upload/{findImg}")
          file.save(os.path.join(f"{p.parent.parent}/upload", file.filename))
          newValue = ProductModel(name=form['name'],price=form['price'],description=form['description'],img=file.filename,category=form['category'])
          result = mongo.db.products.update_many(filter, {"$set": newValue.model_dump()})
          if result.modified_count > 0:
                  return make_response(generate_response('Produto atualizado com sucesso',status=HTTP_200_OK))
          else:

                   return make_response(generate_response('O produto não foi atualizado',status=HTTP_400_BAD_REQUEST))
        except:
            return  make_response(generate_response('Não existe esse produto no nosso banco de dados verifique o ID'))
             


    


