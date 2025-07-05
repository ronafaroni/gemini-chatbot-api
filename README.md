# 🤖 Gemini Chatbot API

**Gemini Chatbot API** adalah RESTful API berbasis Node.js + Express yang memanfaatkan **Google Generative AI (Gemini 1.5)**. API ini dapat digunakan untuk membuat chatbot, asisten AI, atau aplikasi lainnya yang membutuhkan respons dari model AI canggih milik Google.

> Dibuat sebagai backend ringan yang dapat dengan mudah diintegrasikan dengan frontend berbasis HTML, React, Vue, dan lainnya.

---

## 📦 Fitur Utama

- 🔌 Endpoint `/chat` untuk kirim prompt dan menerima balasan dari Gemini AI
- ⚡ Menggunakan model terbaru Gemini 1.5 Flash atau Pro
- 🔐 API key aman melalui `.env`
- 🌐 CORS aktif — bisa diakses dari mana saja
- 📡 Siap di-deploy ke VPS, Vercel, atau Render
- 🧰 Mudah dikembangkan lebih lanjut untuk chatbot multi-user

---

## 🚀 Cara Instalasi

### 1️⃣ Clone repo dan masuk ke direktori

```bash
git clone https://github.com/ronafaroni/gemini-chatbot-api.git
cd gemini-chatbot-api

### 2️⃣ Install dependencies
```bash
npm install

### 3️⃣ Buat file .env dan isi dengan API key Gemini
```bash
GEMINI_API_KEY=ISI_API_KEY_KAMU
PORT=3000

Dapatkan API Key dari Google AI Studio

### 4️⃣ Jalankan server
```bash
node index.js

Jika berhasil, akan muncul:


