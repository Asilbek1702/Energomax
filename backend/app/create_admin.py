"""
Создать первого администратора.
Запуск: python -m app.create_admin
"""
import getpass

from .database import SessionLocal, Base, engine
from .auth import hash_password
from . import models

Base.metadata.create_all(bind=engine)


def main():
    db = SessionLocal()
    username = input("Логин администратора: ").strip()
    password = getpass.getpass("Пароль: ").strip()

    existing = db.query(models.AdminUser).filter(models.AdminUser.username == username).first()
    if existing:
        print("Пользователь уже существует.")
        return

    admin = models.AdminUser(username=username, hashed_password=hash_password(password))
    db.add(admin)
    db.commit()
    print(f"Администратор '{username}' создан.")


if __name__ == "__main__":
    main()
