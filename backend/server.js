const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

// --- MIDDLEWARE ---
app.use(cors()); // Izin akses agar React bisa nge-fetch ke sini
app.use(express.json()); // Agar bisa baca req.body yang dikirim React

// --- Database conect ---
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const db = pool;
// debug
console.log('Database Pool Created');

db.connect((err) => {
    if (err) {
        console.error('Failed connect to MySQL', err.message);
        return;
    }
    console.log('MySQL Conected!');
})

// --- ROUTES ---
// cek apakah server nyala
app.get('/test', (req, res) => {
    res.json({ message: 'Backend portfolio aktif'});
});

// endpoint untuk contact form
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // logging di terminal backend (debuging)
    console.log('-- Pesan Baru Masuk ---');
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);

    // validasi input
    if (!name || !email || !message) {
        return res.status(400).json({
            error: "Semua field harus diisi!"
        });
    }

    const sql = "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";

    db.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('Save Failed:', err);
            return res.status(500).json({
                error: "Terjadi kesalahan pada server"
            })
        }
        console.log(`Pesan baru tersimpan (ID: ${result.insertId})`);
        res.status(200).json({
            success: true,
            message: "Your message saved to database"
        });
    });
});

// Rute Projects
app.get('/api/projects', (req, res) => {

    const query = 'SELECT * FROM projects ORDER BY created_at DESC';
    
    db.query(query, (err, results) => {
        if (err) {
            // Ini akan muncul di terminal docker logs web_porto_backend
            console.error('--- DETAIL ERROR DATABASE ---');
            console.error('Pesan:', err.message);
            console.error('Kode Error:', err.code);
            
            return res.status(500).json({ 
                error: 'Database error', 
                details: err.message 
            });
        }
        
        // Kirim hasil hanya jika tidak ada error
        res.json(results);
    });
});

// --- Run Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
