import uuid
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, ConfigDict


class ProductBase(BaseModel):
    code: str
    name: str
    category: str
    standard: Optional[str] = None
    price: Optional[float] = None
    currency: str = "UZS"
    image_url: Optional[str] = None
    pdf_url: Optional[str] = None
    description: Optional[str] = None
    specs: dict = {}
    is_published: bool = True


class ProductCreate(ProductBase):
    pass


class ProductUpdate(BaseModel):
    code: Optional[str] = None
    name: Optional[str] = None
    category: Optional[str] = None
    standard: Optional[str] = None
    price: Optional[float] = None
    currency: Optional[str] = None
    image_url: Optional[str] = None
    pdf_url: Optional[str] = None
    description: Optional[str] = None
    specs: Optional[dict] = None
    is_published: Optional[bool] = None


class ProductOut(ProductBase):
    model_config = ConfigDict(from_attributes=True)

    id: uuid.UUID
    created_at: datetime
    updated_at: datetime


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class LoginRequest(BaseModel):
    username: str
    password: str
