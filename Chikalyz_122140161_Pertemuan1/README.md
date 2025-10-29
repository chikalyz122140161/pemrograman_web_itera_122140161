# pemrograman_web_itera_122140161
## MANAJEMEN APLIKASI TUGAS MAHASISWA
Aplikasi web sederhana untuk membantu mahasiswa mengelola daftar tugas mereka secara efisien.
Pengguna dapat menambah, mengedit, menandai selesai, menghapus, dan memfilter tugas berdasarkan status atau melakukan pencarian berdasarkan nama tugas maupun mata kuliah.
Data tersimpan secara persisten menggunakan local storage, sehingga daftar tugas tidak hilang meskipun halaman ditutup.

## Fitur Utama
1. Tambah tugas baru dengan nama, mata kuliah, dan tenggat waktu
2. Edit tugas untuk memperbarui informasi
3. Hapus tugas dari daftar
4. Tandai tugas selesai / belum selesai.
5. Filter dan pencarian tugas berdasarkan status dan kata kunci.
6. Penyimpanan otomatis di local storage

## Screenshot

<img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/b3ac3779-e44b-449d-af1d-81b395f45da0" />
Tampilan awal 
<img width="1919" height="1199" alt="image" src="https://github.com/user-attachments/assets/70f9f92a-b15c-477f-b60d-5de965594d24" />
Tampilan tugas yang telah dimasukkan
<img width="1919" height="1196" alt="image" src="https://github.com/user-attachments/assets/9c037724-44c5-411a-beaa-9ba29fae9a7d" />
Tampilan jika satu tugas sudah selesai
<img width="1919" height="1197" alt="image" src="https://github.com/user-attachments/assets/1b83fb8a-67df-48d6-93fd-59f5ddb4274a" />
Tampilan jika ada tugas yang belum selesai

## Cara Menjalankan Aplikasi

1. Pastikan kamu sudah memiliki browser (Chrome, Edge, atau Firefox)
2. Unduh semua file yang saya lampirkan di repository:
   ```
   index.html
   style.css
   script.js
   ```
3. Klik dua kali **index.html** untuk membukanya di browser 
4. Gunakkan saja selesai
5. Ketika sudah muncul tampilan awal, anda dapat memasukkan nama tugas yang ada inginkan, mata kuliah, dan deadline dari tugas tersebut
6. Setelahnya akan muncul tugas tersebut
7. Anda dapat menekan tombol complete jika sudah selesai
8. Anda juga dapat meng-edit tugas tersebut dengan tombol edit
9. Dan anda juga dapat menghapus tugas tersebut jika mau

## Daftar Fitur yang Telah Diimplementasikan

| No | Fitur | Keterangan |
|----|--------|-------------|
| 1 | Tambah tugas | Input nama, mata kuliah, dan deadline |
| 2 | Edit tugas | Memperbarui data tugas yang sudah ada |
| 3 | Hapus tugas | Menghapus data dari daftar dan localStorage |
| 4 | Tandai selesai | Mengubah status tugas (selesai/belum) |
| 5 | Filter status | Menampilkan semua/pending/selesai |
| 6 | Pencarian | Berdasarkan nama tugas atau mata kuliah |
| 7 | Hitung tugas tersisa | Menampilkan jumlah tugas yang belum selesai |
| 8 | Penyimpanan lokal | Data tersimpan otomatis di localStorage |

## Penjelasan Teknis

### Penggunaan `local storage`
Data tugas disimpan menggunakan `localStorage` agar tetap tersedia walaupun halaman ditutup.  
Cuplikan kode (dari `script.js`):
```javascript
let assignments = JSON.parse(localStorage.getItem('assignments')) || [];

function saveAssignments() {
  localStorage.setItem('assignments', JSON.stringify(assignments));
}
```
- Saat aplikasi dimuat, data akan diambil dari `localStorage`.
- Setiap kali pengguna menambah, mengedit, atau menghapus tugas, data disimpan kembali (`saveAssignments()`).

### Validasi Form
Sebelum data disimpan, form akan dicek agar tidak ada kolom kosong:
```javascript
if (!name || !course || !deadline) {
  errorEl.textContent = 'Please fill in all fields and ensure deadline is valid.';
  return;
}
```
Jika validasi gagal, pesan kesalahan ditampilkan dan data tidak akan diproses.

---

## Teknologi yang Digunakan

- **HTML5** – Struktur halaman  
- **CSS3** – Tampilan dan tata letak  
- **JavaScript (Vanilla)** – Logika aplikasi dan penyimpanan data lokal  




