import uuid
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session

from .. import auth, crud, models, schemas
from ..database import get_db

router = APIRouter(prefix="/api/products", tags=["products"])


@router.get("")
def list_products(
    category: Optional[str] = None,
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
):
    """Public endpoint — used by the React storefront."""
    items, total = crud.list_products(
        db, category=category, published_only=True, page=page, per_page=per_page
    )
    return {
        "items": [schemas.ProductOut.model_validate(p) for p in items],
        "total": total,
        "page": page,
        "pages": (total + per_page - 1) // per_page,
    }


@router.get("/admin")
def list_products_admin(
    category: Optional[str] = None,
    page: int = Query(1, ge=1),
    per_page: int = Query(20, ge=1, le=100),
    db: Session = Depends(get_db),
    _admin: models.AdminUser = Depends(auth.get_current_admin),
):
    """Admin endpoint — includes unpublished products."""
    items, total = crud.list_products(
        db, category=category, published_only=False, page=page, per_page=per_page
    )
    return {
        "items": [schemas.ProductOut.model_validate(p) for p in items],
        "total": total,
        "page": page,
        "pages": (total + per_page - 1) // per_page,
    }


@router.get("/{product_id}", response_model=schemas.ProductOut)
def get_product(product_id: uuid.UUID, db: Session = Depends(get_db)):
    product = crud.get_product(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Товар не найден")
    return product


@router.post("", response_model=schemas.ProductOut, status_code=status.HTTP_201_CREATED)
def create_product(
    product_in: schemas.ProductCreate,
    db: Session = Depends(get_db),
    _admin: models.AdminUser = Depends(auth.get_current_admin),
):
    return crud.create_product(db, product_in)


@router.put("/{product_id}", response_model=schemas.ProductOut)
def update_product(
    product_id: uuid.UUID,
    product_in: schemas.ProductUpdate,
    db: Session = Depends(get_db),
    _admin: models.AdminUser = Depends(auth.get_current_admin),
):
    product = crud.get_product(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Товар не найден")
    return crud.update_product(db, product, product_in)


@router.delete("/{product_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_product(
    product_id: uuid.UUID,
    db: Session = Depends(get_db),
    _admin: models.AdminUser = Depends(auth.get_current_admin),
):
    product = crud.get_product(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Товар не найден")
    crud.delete_product(db, product)
