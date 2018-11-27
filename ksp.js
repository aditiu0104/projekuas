function terimainput() {

		var x=document.forms["koperasi"]["nama"].value;
		var y=document.forms["koperasi"]["komentar"].value;

if (x==null || x==""||y==null || y==""){
	alert("Data Masih Ada yang Kosong, Mohon Untuk dilengkapi Lagi");
return false;
}
if (confirm('apakah anda ingin menambahkan data?')){
	var tabel = document.getElementById("data");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);



	cell1.innerHTML = x;
	cell2.innerHTML = y;


	alert("Data Berhasil di Masukan, klik OK untuk melanjutkan");
	}
}
