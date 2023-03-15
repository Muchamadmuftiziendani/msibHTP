// Mengambil referensi ke table
let table = document.getElementById('table');

//mengaturr gradee dan predikate unutk setiap nilainya
function getGradePredikat(nilai){
    let grade, predikat;

    if (nilai >= 90 && nilai <= 100) {
        grade = 'A';        
    }   else if (nilai >= 80 && nilai < 90) {
        grade = 'B'; 
    }   else if (nilai >= 70 && nilai < 80) {
        grade = 'C';
    }   else if (nilai >= 60 && nilai < 70) {
        grade = 'D';
    }   else {
        grade = 'E';
    }

    switch (grade){
        case 'A':
            predikat = 'Sangat baik';
            break ;
        case 'B':
            predikat = 'Baik';
            break ;
        case 'C':
            predikat = 'Cukup';
            break ;
        case 'D' :
            predikat = 'Kurang';
            break ;
        default:
            predikat = 'Sangat kurang';
            break ;  
    }

    return [grade, predikat];
}

// kode unutk memberikan warna pada setiap baris tabel sacara bergantian
let colors = ['#FFCCCC', '#CCFFFF', '#FFFFCC'];

for (let i = 1; i < table.rows.length; i ++){
    let row = table.rows[i];
    let nilai = parseInt(row.cells[2].innerHTML);
    let [grade, predikat] = getGradePredikat(nilai);

    // ini untuk menambahkan grade predikat ke dalam tabel
    row.cells[3].innerHTML = grade;
    row.cells[4].innerHTML = predikat;

    //memberikann warrna pada baris tabel
    let color = colors[i % colors.length];
    row.style.backgroundColor = color;
}