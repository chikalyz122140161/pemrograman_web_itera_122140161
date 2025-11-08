# Praktikum Python Dasar - Program Pengelolaan Data Nilai Mahasiswa

## Deskripsi
Program ini dibuat sebagai bagian dari **Praktikum Python Dasar**.  
Program ini bertujuan untuk mengelola data nilai mahasiswa dengan fitur lengkap, termasuk:

- Menghitung nilai akhir berdasarkan bobot: 30% UTS, 40% UAS, 30% Tugas  
- Menentukan grade (A/B/C/D/E)  
- Menampilkan data mahasiswa dalam format tabel  
- Mencari mahasiswa dengan nilai tertinggi atau terendah  
- Menambahkan data mahasiswa baru  
- Memfilter mahasiswa berdasarkan grade  
- Menghitung rata-rata nilai kelas  

Program ini dibuat **tanpa menggunakan library eksternal**, semua fitur diimplementasikan menggunakan Python standar.

---

## Cara Menjalankan

1. Pastikan Python 3.8+ sudah terinstall. Cek versi Python:

```bash
python --version
```

2. Jalankan program:
```bash
python student_grades_management.py
```

3. Ikuti menu yang muncul untuk melakukan operasi seperti menampilkan data, menambahkan mahasiswa, mencari nilai tertinggi/rendah, filter grade, dan menghitung rata-rata kelas.

---

Fitur Program

1. Display All Students
Menampilkan seluruh data mahasiswa dalam bentuk tabel.

2. Add New Student
Menambahkan mahasiswa baru dengan input: nama, NIM, nilai UTS, nilai UAS, nilai Tugas.

3. Find Highest/Lowest Score
Menampilkan mahasiswa dengan nilai akhir tertinggi atau terendah.

4. Filter by Grade
Memfilter mahasiswa berdasarkan grade tertentu (A/B/C/D/E).

5. Class Average
Menghitung rata-rata nilai akhir seluruh mahasiswa.

6. Exit
Keluar dari program.

---

Kriteria Penilaian
- Fungsi-fungsi berjalan dengan benar
- Penggunaan struktur data (list, dictionary)
- Implementasi input/output yang baik
- Dokumentasi dan kerapian kode

Program ini diimplementasikan sepenuhnya untuk memenuhi kriteria di atas.

---

Catatan
- Semua perhitungan nilai akhir menggunakan rumus:
`Nilai Akhir = 30% UTS + 40% UAS + 30% Tugas`
- Grade ditentukan berdasarkan nilai akhir:
  - A: ≥80
  - B: ≥70
  - C: ≥60
  - D: ≥50
  - E: <50

