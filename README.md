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
✅ Server is running on http://localhost:3000

🌐 Dokumentasi API
🔹 POST /chat
Mengirim prompt dan menerima balasan dari AI.

Request
URL: /chat

Method: POST

Headers: Content-Type: application/json

{
  "message": "Apa itu kecerdasan buatan?"
}

{
  "reply": "Kecerdasan buatan adalah cabang ilmu komputer yang berfokus pada pembuatan sistem yang dapat meniru perilaku manusia..."
}


🔸 Dengan Postman
URL: http://localhost:3000/chat

Method: POST

Body → Raw → JSON:

json
Salin
Edit

gemini-chatbot-api/
├── index.js             # File utama server Express
├── .env                 # File rahasia (API Key)
├── package.json         # Konfigurasi project
├── /public              # Folder untuk file statis (opsional)
└── README.md            # Dokumentasi proyek

| Teknologi                | Fungsi                                     |
| ------------------------ | ------------------------------------------ |
| Node.js                  | Runtime JavaScript                         |
| Express.js               | Web framework ringan                       |
| Google Generative AI SDK | Koneksi ke model Gemini                    |
| dotenv                   | Menyimpan variabel environment secara aman |
| cors                     | Mengizinkan akses dari browser/client luar |

🧠 Tentang Google Generative AI (Gemini)
Gemini adalah model AI dari Google yang mendukung berbagai jenis input dan output. Dalam proyek ini digunakan model:

models/gemini-1.5-flash — cepat dan ringan

models/gemini-1.5-pro — lebih cerdas dan akurat

Kamu bisa ganti model di index.js bagian getGenerativeModel() sesuai kebutuhan.

☁️ Deployment
🔹 Deploy ke VPS / Ubuntu:
bash
Salin
Edit
# Pastikan Node.js dan Git sudah terinstall
git clone https://github.com/ronafaroni/gemini-chatbot-api.git
cd gemini-chatbot-api
npm install
echo "GEMINI_API_KEY=xxxxx" > .env
node index.js
🔹 Deploy ke Vercel / Render:
Upload ke GitHub

Hubungkan repo dengan Vercel atau Render

Tambahkan environment variable GEMINI_API_KEY

Jalankan dan akses endpoint dari URL hosting

🔐 Keamanan
Pastikan .env kamu tidak di-commit ke GitHub

Tambahkan .env ke .gitignore:

gitignore
Salin
Edit
.env
node_modules/
📌 Roadmap (Pengembangan Selanjutnya)
 Tambah dukungan multi-user

 Logging & penyimpanan histori chat

 Integrasi frontend chatbot (React/HTML)

 Pengaturan batas token & biaya (API usage limiter)

 Mode streaming token Gemini (advanced)

✅ Tips Tambahan
Tambahkan "type": "module" di package.json agar import ES6 bisa digunakan:

json
Salin
Edit
{
  "type": "module"
}
Gunakan nodemon untuk auto-restart saat coding:

bash
Salin
Edit
npm install --save-dev nodemon
npx nodemon index.js
📜 Lisensi
MIT License © 2025 Rona Faroni

🤝 Kontribusi
Pull request, issue, dan feedback sangat diterima!

bash
Salin
Edit
# Fork repo, buat branch baru dan submit perubahanmu
git checkout -b fitur-anda


