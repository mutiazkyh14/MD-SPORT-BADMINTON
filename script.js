// 1. Fitur Interaktif Klaim Kupon Diskon Kilat (Pengganti Loot Box)
function klaimDiskon() {
  // Memilih elemen HTML berdasarkan ID
  var infoDiskon = document.getElementById("teks-loot");
  var tombolKlaim = document.getElementById("tombol-loot");
  
  // Mengubah isi teks (innerHTML) memberikan info kupon
  infoDiskon.innerHTML = "Selamat! Anda Mendapatkan Kupon Diskon 20% untuk Penyewaan Lapangan di Jam Malam!";
  
  // Mengubah gaya CSS secara dinamis (Teks berubah jadi warna hijau cerah ala badminton)
  infoDiskon.style.color = "#4ade80";
  infoDiskon.style.fontWeight = "bold";
  infoDiskon.style.padding = "10px";
  infoDiskon.style.border = "2px dashed #4ade80";
  infoDiskon.style.backgroundColor = "#166534";
  
  // Mengubah status tombol agar tidak bisa diklik dua kali
  tombolKlaim.innerHTML = "Kupon Telah Diklaim";
  tombolKlaim.style.backgroundColor = "#555555";
  tombolKlaim.style.cursor = "not-allowed";
}