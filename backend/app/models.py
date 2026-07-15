import uuid
from datetime import datetime

from sqlalchemy import Column, String, Boolean, DateTime, Numeric, Text
from sqlalchemy.dialects.postgresql import UUID, JSONB

from .database import Base


class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String(64), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)


class Product(Base):
    __tablename__ = "products"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    code = Column(String(64), nullable=False, index=True)          # e.g. "ТМГ-630"
    name = Column(String(255), nullable=False)                     # e.g. "Силовой трансформатор"
    category = Column(String(32), nullable=False, index=True)      # transformers | substations | switchgear | cranes
    standard = Column(String(128), nullable=True)                  # e.g. "ГОСТ Р 52719"

    price = Column(Numeric(14, 2), nullable=True)
    currency = Column(String(8), default="UZS")

    image_url = Column(String(512), nullable=True)
    pdf_url = Column(String(512), nullable=True)
    description = Column(Text, nullable=True)

    # Flexible category-specific specs, e.g.
    # {"Мощность": "630 кВА", "Класс напряжения": "10/0.4 кВ", "Охлаждение": "ONAN"}
    specs = Column(JSONB, default=dict)

    is_published = Column(Boolean, default=True)

    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
