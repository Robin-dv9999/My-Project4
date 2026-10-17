// Mengambil elemen HTML berdasarkan ID
const tombol = document.getElementById('btnKlik');
const pesan = document.getElementById('pesan');

// Menambahkan aksi ketika tombol diklik
tombol.addEventListener('click', function() {
    pesan.innerText = "Halo! Kode JavaScript berhasil berjalan di Spck Editor 🎉";
    pesan.style.color = "green";
});
