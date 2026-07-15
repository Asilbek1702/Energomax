import os
import uuid

from fastapi import APIRouter, Depends, UploadFile, File, HTTPException

from .. import auth, models

router = APIRouter(prefix="/api/upload", tags=["upload"])

ALLOWED_IMAGE = {".jpg", ".jpeg", ".png", ".webp"}
ALLOWED_DOC = {".pdf"}
MAX_SIZE_MB = 10


@router.post("")
async def upload_file(
    file: UploadFile = File(...),
    _admin: models.AdminUser = Depends(auth.get_current_admin),
):
    ext = os.path.splitext(file.filename)[1].lower()
    if ext not in ALLOWED_IMAGE | ALLOWED_DOC:
        raise HTTPException(status_code=400, detail="Недопустимый тип файла")

    contents = await file.read()
    if len(contents) > MAX_SIZE_MB * 1024 * 1024:
        raise HTTPException(status_code=400, detail=f"Файл больше {MAX_SIZE_MB}MB")

    filename = f"{uuid.uuid4().hex}{ext}"
    path = os.path.join("uploads", filename)
    with open(path, "wb") as f:
        f.write(contents)

    return {"url": f"/uploads/{filename}"}
