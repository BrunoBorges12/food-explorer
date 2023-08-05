
from database import mongo
from models.Product import Products
from werkzeug.utils import secure_filename
import os
from flask import jsonify
from common import generate_response
from http_code import HTTP_400_BAD_REQUEST,HTTP_200_OK

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
def allowed_file(filename):
        return '.' in filename and \
               filename.rsplit('.', 1)[1].lower()    in ALLOWED_EXTENSIONS

def create_product(request):
    form = request.form
    print(request.form)
    if 'file' not in request.files:
        return  generate_response(message='Nenhum arquivo selecionado',status=HTTP_400_BAD_REQUEST)
    file = request.files['file']
    isSaveFile = False
    print(request.files['file'])
  
    if file.filename== '':
       return  generate_response(message='Nenhum arquivo selecionado',status=HTTP_400_BAD_REQUEST)
    
    products = Products(name=form['name'],price=form['price'],description=form['description'],img=file.filename,category=form['category'])
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join('/home/bruno/projetos/food-flask-api-master/upload', filename))
        isSaveFile=True
    else: 
        isSaveFile=False    
    if isSaveFile:
        mongo.db.products.insert_one(products.model_dump())
        return generate_response(data=products.model_dump(),message='Produto criado com sucesso',status=HTTP_200_OK)
    else:
        return generate_response(message='Os tipos de arquivo permitidos são  png, jpg, jpeg',status=HTTP_400_BAD_REQUEST)
    
    

    

    
  
    
   