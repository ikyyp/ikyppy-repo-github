// Seleksi elemen HTML
const loadingElement = document.querySelector('.loading');
const bioDataElement = document.querySelector('.bio-data');

// Fungsi untuk menampilkan bio data
function showBioData() {
  // Sembunyikan elemen loading
  loadingElement.style.display = 'none';

  // Tampilkan elemen bio data
  bioDataElement.style.display = 'block';
}

// Tunda pemanggilan fungsi showBioData() selama 2 detik (2000 milidetik)
setTimeout(showBioData, 2000);
