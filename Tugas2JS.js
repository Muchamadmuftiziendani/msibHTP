// ini input data pengawai

let nama = " Mufti Ziendani";
let jabatan = "Manager" ;
let status = " Menikah ayo kuliah dulu juga ayo " ;

//ini hitungan gaji pokok yang berdasarkan jabatanya

let gajipokok = 0;
switch ( jabatan ) {
    case "Manager":
        gajipokok = 10;
        break ;
    case "Asisten manager":
        gajipokok = 8;
        break ;
    case " Staff" :
        gajipokok = 5;
        break ;
    default:
        console.log ("jabatan yang tidak diketahui");

    
}

// ini hitungan tunjangan jabatan

let tunjanganJabatan = gajipokok * 0.1;

// hitungan BPJS

let bpjs = gajipokok * 0.1;

// ini hitungan tunjangan keluarrga 

let tunjanganKeluarga = status === "Menikah ayo kuliah dulu juga ayo" ? gajipokok * 0.1 : 0 ;

// hitungan total dari pendapatan dan penghasilan

let totalpendapatan =  gajipokok + tunjanganJabatan + bpjs + tunjanganKeluarga ;


// ini adalah cetak data pengawai dan sebaganya

console.log ('Nama Pengawai : $ {nama} ');
console.log (' Jabatan : ${jabatan} ');
console.log ( ' Gaji Pokok : $ {gajipokok} Juta ');
console.log ( ' Tunjangan Jabatan : $ {tunjanganjabatan} Juta');
console.log ( ' BPJS : ${bpjs} Juta ');
console.log (' Tunjangan Keluarga : $ {tunjangankeluarga} Juta ');
console.log ( ' Total Pendapatan $ { totalpendapatan } Juta ');









