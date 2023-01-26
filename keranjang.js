function bayar() {
  let pesanan = document.getElementById('pesanan').value;
  let banyaknya = parseInt(document.getElementById('banyaknya').value);
  if (pesanan == 'rendang') {
    let bayar = 13000 * banyaknya;
    document.getElementById("bayar").innerHTML = bayar;
  } else if (pesanan == 'dendeng') {
    let bayar = 12000 * banyaknya;
    document.getElementById("bayar").innerHTML = bayar;
  } else if (pesanan == 'ayamgulai') {
    let bayar = 11000 * banyaknya;
    document.getElementById("bayar").innerHTML = bayar;
  } else if (pesanan == 'gulaitunjang') {
    let bayar = 15000 * banyaknya;
    document.getElementById("bayar").innerHTML = bayar;
  } else {
    document.getElementById("bayar").innerHTML = "Maaf error :)";
  }
}
