function total() {  
        var satu1 = (document.getElementById('satu').value.length);
        var dua2 = (document.getElementById('dua').value.length);
        var tiga3 = (document.getElementById('tiga').value.length);
        var empat4 = (document.getElementById('empat').value.length);
        var lima5 = (document.getElementById('lima').value.length);
        var enam6 = (document.getElementById('enam').value.length);
        var tujuh7 = (document.getElementById('tujuh').value.length);
        var dlpn8 = (document.getElementById('delapan').value.length);
        var smbln9 = (document.getElementById('sembilan').value.length);
        var splh10 = (document.getElementById('sepuluh').value.length);
        var sbls11 = (document.getElementById('sebls').value.length);
        var dbls12 = (document.getElementById('duabls').value.length);
        var tbls13 = (document.getElementById('tigabls').value.length);
        var ebls14 = (document.getElementById('empatbls').value.length);
        var lbls15 = (document.getElementById('limabls').value.length);
        var enbls16 = (document.getElementById('enambls').value.length);
        var tjhbls17 = (document.getElementById('tujuhbls').value.length);
        var dlpnbls18 = (document.getElementById('delapanbls').value.length);
        var sblnbls19 = (document.getElementById('sembilanbls').value.length);
        var dplh20 = (document.getElementById('duapuluh').value.length);
        var dstu21 = (document.getElementById('duasatu').value.length);
        
        var result = satu1 + dua2 + tiga3 + empat4 + lima5 + enam6 + tujuh7 + dlpn8 + smbln9 + splh10 
        + sbls11 + dbls12 + tbls13 + ebls14 + lbls15 + enbls16 + tjhbls17 + dlpnbls18 + sblnbls19 + dplh20 + dstu21 ;

        document.getElementById('total').value = result;
    }

function hasil() {
    var result = document.getElementById('total').value;
    if (result == 1) {
       document.getElementById('Hasil').value = "Resiko Rendah"; 
    }
}