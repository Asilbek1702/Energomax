# Energomax API (FastAPI + PostgreSQL)

## Установка

Для Windows в PowerShell используйте такие команды:

```powershell
cd backend
python -m venv venv
.\venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env     # если .env ещё не создан
```

Если PowerShell блокирует запуск скрипта активации, выполните:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

Затем впиши в .env реальные значения DATABASE_URL и SECRET_KEY.

## База данных

Создай PostgreSQL базу:

```bash
createdb energomax
```

Таблицы создаются автоматически при первом запуске (`Base.metadata.create_all`).
Для продакшена позже стоит перейти на Alembic-миграции.

## Первый администратор

```bash
python -m app.create_admin
```

Введи логин и пароль — они понадобятся для входа в админ-панель.

## Запуск

```bash
uvicorn app.main:app --reload --port 8000
```

API будет на `http://localhost:8000`.
Автодокументация (Swagger): `http://localhost:8000/docs`.

## Эндпоинты

| Метод | Путь | Доступ | Назначение |
|---|---|---|---|
| POST | `/api/auth/login` | публичный | вход админа, возвращает JWT |
| GET | `/api/products` | публичный | список товаров (только опубликованные) — для сайта |
| GET | `/api/products/admin` | admin | список всех товаров, включая скрытые |
| GET | `/api/products/{id}` | публичный | один товар |
| POST | `/api/products` | admin | создать товар |
| PUT | `/api/products/{id}` | admin | изменить товар |
| DELETE | `/api/products/{id}` | admin | удалить товар |
| POST | `/api/upload` | admin | загрузить изображение/PDF |

Все admin-эндпоинты требуют заголовок `Authorization: Bearer <token>`.

## Формат товара (specs — гибкий JSON)

```json
{
  "code": "ТМГ-630",
  "name": "Силовой трансформатор",
  "category": "transformers",
  "standard": "ГОСТ Р 52719",
  "price": 45000000,
  "currency": "UZS",
  "image_url": "/uploads/abc123.jpg",
  "pdf_url": "/uploads/datasheet.pdf",
  "description": "Трёхфазный масляный трансформатор...",
  "specs": {
    "Мощность": "630 кВА",
    "Напряжение": "10/0.4 кВ",
    "Охлаждение": "ONAN",
    "Степень защиты": "IP54"
  },
  "is_published": true
}
```

`category` — один из: `transformers`, `substations`, `switchgear`, `cranes`.
`specs` — произвольные пары ключ/значение, разные для каждой категории — так же гибко, как ACF-поля в старой WordPress-версии.
