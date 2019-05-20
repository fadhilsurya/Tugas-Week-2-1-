var nama = 'ario';
var peran = 'inlander';

if (nama == '' && peran == '' ){s
    console.log('segera isi nama dan peran')
}   else if (nama != '' && peran == 'juragan'){s
    console.log ('selamat datang juragan ' + nama)
    console.log ('para baboe siap melayani anda!')
} else if (nama != '' && peran == 'minjheer'){
    console.log ( 'welkom bit de nobelen ' + nama + ' ' +peran )
    console.log ('stuur onmiddellijk troepen om de inboorling te vernietigen')
} else if (nama != '' && peran == 'inlander'){
    console.log('hai kamu! ' + nama )
    console.log('cepat kerja sana bangun rel kereta dan jalanan godverdomme!')
}

