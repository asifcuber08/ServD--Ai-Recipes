
---

# ⚙️ BACKEND README.md


### ⚙️ Backend - AI Recipe Generator (Strapi)

![Strapi](https://img.shields.io/badge/Strapi-4945FF?logo=strapi)
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)

---

## ✨ Features

- 📦 Recipe data management  
- 🔗 API endpoints for frontend  
- 👤 User-related data handling  
- 🧩 CMS-based structure  

---

## 🛠️ Tech Stack

- ⚙️ Strapi  
- 🟢 Node.js  

---

## 🚀 Getting Started

```bash
npm install
npm run develop
```

## 🔐 Environment Variables
```bash

# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
ENCRYPTION_KEY=

# Database
DATABASE_CLIENT=postgres
DATABASE_HOST=
DATABASE_PORT=5432
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=true
DATABASE_FILENAME=
JWT_SECRET=
```

#### After running (npm run develop) in backend folder you will get all this env value automatically, you don't have to waste time to get it from somewhere.

---


## 🌐 CMS URL
- After running npm run develop you can manage your data here

👉 http://localhost:1337