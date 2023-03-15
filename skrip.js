function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = form.nama.value;
    let pekerjaan = forms.pekerjaan.value;
    let hobby = forms.hoby.value;
    let data = `input data :
    <br> Nama: ${nama}
    <br> Pekerjaan: ${pekerjaan}
    <br> hobby : ${hobby}
    `
    document.getElementById('hasil').innerHTML = data;
}