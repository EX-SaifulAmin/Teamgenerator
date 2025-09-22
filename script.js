 function buatKelompok() {
    let names = document.getElementById("names").value//mengambil nama yang di input
    .trim()//hapus spasi
    .split("\n")//array dibagi per baris/enter
    .filter(n => n);//memghapus baris kosong
    let jumlahKelompok = parseInt(document.getElementById("groups").value);
    if (jumlahKelompok > 50) jumlahKelompok = 50;
  if (!names.length) {
    alert("⚠️ Nama peserta belum dimasukkan!");
    return;
  }
  if (!jumlahKelompok) {
    alert("⚠️ Jumlah kelompok belum diisi!");
    return;
  }
  if (jumlahKelompok > names.length) {
    alert("⚠️ Jumlah kelompok lebih banyak dari jumlah peserta!");
    return;
  }
    //mengambil jumlah kelompok yang di isi
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";//menghapus hasil sebelumnya
    // Acak urutan nama
    names = names.sort(() => Math.random() - 0.5);
    // membuat array berdasarkan jumlah kelompok
    let groups = Array.from({ length: jumlahKelompok }, () => []);
    //memasukan nama ke dalam kelompok
    names.forEach((nama, index) => {
      groups[index % jumlahKelompok].push(nama);
    });

    // Tampilkan hasil//
    groups.forEach((group, index) => {
     let div = document.createElement("div");
      div.classList.add("group");
      div.innerHTML = `<h3>Kelompok ${index + 1}</h3><ul>${group.map((n,i) => `<li>(${i + 1}) ${n}</li>`).join("")}</ul>`;
      resultDiv.appendChild(div);
      });
  }
function Clearall() {
    if (confirm("Apa anda yakin ingin menghapus semuanya")) {
      names.value = "";
      groups.value = "";
      document.getElementById("result").innerHTML = "";
     alert("Data terhapus dengan sukses");
    }
    else {
      alert("Tindakan dibatalkan");
    }
  }

  
  const hitam = document.querySelector('.toggle-input');
  
if (localStorage.getItem('darkMode') === 'true') {
  hitam.checked = true
document.documentElement.style.setProperty('--primary', '#9ca3af');
    document.documentElement.style.setProperty('--bg', '#0b1220');
    document.documentElement.style.setProperty('--primary-hover', '#7c8390');
    document.documentElement.style.setProperty('--area', '#000');
} else {
  hitam.checked = false
}



hitam.addEventListener('change', () => {
  if (hitam.checked) {
    localStorage.setItem('darkMode', true);
    document.documentElement.style.setProperty('--primary', '#9ca3af');
    document.documentElement.style.setProperty('--bg', '#0b1220');
    document.documentElement.style.setProperty('--primary-hover', '#7c8390');
    document.documentElement.style.setProperty('--area', '#000');
  } else {
    localStorage.setItem('darkMode', false);
    document.documentElement.style.setProperty('--primary', '#00fff7');
    document.documentElement.style.setProperty('--bg', 'linear-gradient(120deg, #f0f, #0ff, #f0f)');
    document.documentElement.style.setProperty('--primary-hover', '#00cccc');
    document.documentElement.style.setProperty('--area', '#fff');
  }
});
  const aja = document.querySelector('.about')
  const about = document.querySelector('.aboutaja');
  about.onclick = () => {
    aja.classList.toggle('active');
    setTimeout(() => {
      aja.classList.remove('active');
    },2000)
  }
  
  const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');

  hamburgerMenu.onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
  };

  
  
  document.addEventListener('click', function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    };
  });
  
  const a = document.querySelector('.aboutaja');
  const element = document.querySelector('.about');
const styles = window.getComputedStyle(element);

if (styles.display === 'none') {
  a.href = '#about2'
} 
document.addEventListener('DOMContentLoaded', function() {
  aja.classList.add('active');
  setTimeout(() => {
    aja.classList.remove('active')
  }, 2000)
});
