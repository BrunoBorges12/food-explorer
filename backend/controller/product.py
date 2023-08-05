from flask_restful import Resource,reqparse,request
from database  import mongo
from models.Product import Products as ProductModel
from flask import jsonify,make_response
from bson.objectid import  ObjectId
from werkzeug.utils import secure_filename
import os
from service.product import create_product
from utils.authentication import token_required
   


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
    def get(self,id_product):
      product_mongo = mongo.db.products.find_one({'_id':ObjectId(id_product)})
      product = ProductModel(**product_mongo)
      
      return product.model_dump()
    def post(self):
      response,status = create_product(request=request)
      return make_response(response,status)
    

    def put(self,id_product):
        filter = {'_id': ObjectId(id_product)}
        updated_data = request.get_json()
        newValue = ProductModel(**updated_data)

        result = mongo.db.products.update_many(filter, {"$set": newValue.model_dump()})
        if result.modified_count > 0:
            return {"message": "Product updated successfully.","data":newValue.model_dump()},201
        else:
            return {"message": "No product found or update failed."},404
      


    


