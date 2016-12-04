function hitung()
{
	var gelang1 = document.getElementById("gelang1").selectedIndex;
	var gelang2 = document.getElementById("gelang2").selectedIndex;
	var gelang3 = document.getElementById("gelang3").selectedIndex;
	var gelang4 = document.getElementById("gelang4").value;
	var nilaiR,satuan;
	if(gelang3 == 7){
		gelang3 = 0.1;
	}
	if(gelang3 == 8){
		gelang3 = 0.01;
	}
	nilaiR = (gelang1*10 + gelang2) * Math.pow(10,gelang3);
	satuan = "";
	if(nilaiR%1000000 == 0){
	  nilaiR = nilaiR/1000000;
	  satuan = "M";
	}else if((nilaiR%100000 == 0)&&(nilaiR>1000000)){
	  nilaiR = nilaiR/1000000;
	  satuan = "M";
	}else if(nilaiR%1000 == 0){
	  nilaiR = nilaiR/1000;
	  satuan = "K";
	}else if((nilaiR%100 == 0)&&(nilaiR>1000)){
	  nilaiR = nilaiR/1000;
	  satuan = "K";
	}
	document.getElementById("hasil").innerHTML = "Nilai R = "+ nilaiR + " "+satuan+"Ω ±"+gelang4+"%";
}
