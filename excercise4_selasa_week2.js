var tanggal= 23;        // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan= 9;          // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun= 1993;          // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if (tanggal < 1 || tanggal  > 31 || tahun < 1900 || tahun > 2200  ){
    console.log ('mohon maaf salah input baca lagi ketentuan yang berlaku')
}

    switch(bulan){
        case 1:
        bulan = 'Januari';
        break;
        case 2:
        bulan = 'Februari';
        break;
        case 3:
        bulan = 'Maret';
        break;
        case 4:
        bulan = 'April';
        break;
        case 5:
        bulan = 'Mei';
        break;
        case 6:
        bulan = 'Juni';
        break;
        case 7:
        bulan = 'Juli';
        break;
        case 8:
        bulan = 'Agustus';
        break;
        case 9:
        bulan = 'September';
        break;
        case 10:
        bulan = 'Oktober';
        break;
        case 11:
        bulan = 'November';
        break;
        case 12:
        bulan = 'Desember';
        break;

    }

    console.log (tanggal + ' ' + bulan + ' ' + tahun)