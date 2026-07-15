from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from .database import Base, engine
from .routers import auth as auth_router
from .routers import products as products_router
from .routers import upload as upload_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Energomax API")

origins = os.getenv("CORS_ORIGINS", "http://localhost:5173,http://localhost:5174").split(",")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

app.include_router(auth_router.router)
app.include_router(products_router.router)
app.include_router(upload_router.router)


@app.get("/api/health")
def health():
    return {"status": "ok"}
