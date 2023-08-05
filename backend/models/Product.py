from pydantic import BaseModel,Field


class Products(BaseModel):
    _id:int
    name:str
    price:int
    description:str
    img:str
    category:str

   