from pydantic import BaseModel, EmailStr, constr
from datetime import datetime
from flask_bcrypt import generate_password_hash, check_password_hash
class SchemaUser(BaseModel):
     email:EmailStr
     _id: str | None = None
     password:constr(min_length=6)
     role:str |  None = None
     def hash_password(self):
        self.password =generate_password_hash(self.password).decode("utf8")
     def verify_password(self, password):
         return check_password_hash(self.password, password)
     role:str


class Register(SchemaUser):
    name:str
    created_at: str | None = None
    updated_at: str | None = None
    role:str | None = None
    







