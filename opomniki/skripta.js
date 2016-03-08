window.addEventListener('load', function() {
	//stran nalozena
	var izvediPrijavo = function() {
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	}	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	
	
	var opomniki = function() {
		var cas = document.querySelector("#cas_opomnika").value;
		var naziv = document.querySelector("#naziv_opomnika").value;
		alert(cas + naziv);
		document.querySelector("#cas_opomnika").innerHTML = "";
		document.querySelector("#naziv_opomnika").innerHTML = "";
	}
	
	document.querySelector("#dodajGumb").addEventListener('click', opomniki);
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");

		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});