import uuid
from typing import Optional

from sqlalchemy.orm import Session

from . import models, schemas


def get_product(db: Session, product_id: uuid.UUID) -> Optional[models.Product]:
    return db.query(models.Product).filter(models.Product.id == product_id).first()


def list_products(
    db: Session,
    category: Optional[str] = None,
    published_only: bool = False,
    page: int = 1,
    per_page: int = 20,
):
    query = db.query(models.Product)
    if category:
        query = query.filter(models.Product.category == category)
    if published_only:
        query = query.filter(models.Product.is_published == True)  # noqa: E712

    total = query.count()
    items = (
        query.order_by(models.Product.created_at.desc())
        .offset((page - 1) * per_page)
        .limit(per_page)
        .all()
    )
    return items, total


def create_product(db: Session, product_in: schemas.ProductCreate) -> models.Product:
    product = models.Product(**product_in.model_dump())
    db.add(product)
    db.commit()
    db.refresh(product)
    return product


def update_product(
    db: Session, product: models.Product, product_in: schemas.ProductUpdate
) -> models.Product:
    for field, value in product_in.model_dump(exclude_unset=True).items():
        setattr(product, field, value)
    db.commit()
    db.refresh(product)
    return product


def delete_product(db: Session, product: models.Product) -> None:
    db.delete(product)
    db.commit()
