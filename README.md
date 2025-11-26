# AMSA Website

React + Vite front end and Express + MySQL API for the AMSA member site, blog, and announcements.

## Stack
- Client: Vite, React 19, Tailwind CSS 4
- Server: Express 5, Sequelize (MySQL), JWT auth

## Prerequisites
- Node.js 18+ and npm
- MySQL instance you can connect to

## Setup
1) Server env (`server/.env`):
```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=amsa
DB_USER=root
DB_PASS=your_password
JWT_SECRET=change_me
PORT=4000
```
2) Client env (`client/.env`):
```
VITE_API_URL=http://localhost:4000
```
3) Install and run:
```
cd server && npm install && npm run dev
cd ../client && npm install && npm run dev
```

Server listens on `PORT` and auto-syncs models in non-production; client dev server prints its URL (defaults to `http://localhost:5173`).
