"""
Сбросить пароль администратора.
Запуск: python -m app.reset_admin_password
"""
import getpass

from .database import SessionLocal
from .auth import hash_password
from . import models


def main():
    db = SessionLocal()
    username = input("Логин администратора: ").strip()

    user = db.query(models.AdminUser).filter(models.AdminUser.username == username).first()
    if not user:
        print("Пользователь не найден.")
        return

    password = getpass.getpass("Новый пароль: ").strip()
    user.hashed_password = hash_password(password)
    db.commit()
    print(f"Пароль для '{username}' обновлён.")


if __name__ == "__main__":
    main()