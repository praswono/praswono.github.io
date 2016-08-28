var DaftarKontak = [{
  nama:"Peter",
  email:"peter@mulmut.com",
  telepon:"081380858067"
}];
var Program = {};

Program.tambahKontak = function(nama, email, telepon) {
    DaftarKontak.push({
        nama:nama,
        email:email,
        telepon:telepon
    })
    console.log("--- Kontak Baru Ditambahkan ---");
}
Program.lihatSemua = function() {
    console.log("--- Daftar Nama ---");
    DaftarKontak.forEach(function(entry, i) {
        console.log(i +".  Nama: " + entry.nama + "\n     Email: " + entry.email + "\n     Telepon: " + entry.telepon);
    });
}
Program.cariKontak = function(nama) {
    console.log("--- Cari Nama ---");
    DaftarKontak.forEach(function(entry, i) {
        if (entry.nama === nama) {
            console.log("Nama: " + entry.nama + "\n Email: " + entry.email + "\n Telepon: " + entry.telepon);
        }
    });
}

Program.tambahKontak("Tiffany", "tiffany@mulmut.com", "081295008090");
Program.lihatSemua();
Program.cariKontak("Tiffany");