function vaciar(){
	    var inputs = document.getElementsByClassName('media');
		
		for (ind=0; ind<inputs.length; ind++) {
		    inputs[ind].value = "";
		}
		document.getElementById('media').innerHTML="0.0"
	}
	
	function media(){
		var inputs = document.getElementsByClassName('media');
		
		suma = 0.0;
		for (ind=0; ind<inputs.length; ind++) {
		   value = parseFloat(inputs[ind].value)
		   
		   if (!isNaN(value))
			   suma = suma + value;
		}
		
		mediaval = suma / inputs.length;
		document.getElementById('media').innerHTML=mediaval;
	}
	
	function remarcarDia(){
		var hoy = new Date();
		var dia = hoy.getDay();
		var mes = hoy.getMonth();
		var color = "black 6px solid";
		
		if (dia==1) {//LUNES 
			document.getElementById('lunes').style.border=color;
			document.getElementById('lunes').innerHTML="<strong>Lunes</strong>";
		}
		if (dia==2) {//MARTES
			document.getElementById('martes').style.border=color;
			document.getElementById('martes').innerHTML="<strong>Martes</strong>";
		}
		if (dia==3) {//MIERCOLES
			document.getElementById('miercoles').style.border=color;
			document.getElementById('miercoles').innerHTML="<strong>Miercoles</strong>";
		}
		if (dia==4) {//JUEVES
			document.getElementById('jueves').style.border=color;
			document.getElementById('jueves').innerHTML="<strong>Jueves</strong>";
		}
		if (dia==5) {//VIERNES
			document.getElementById('viernes').style.border=color;
			document.getElementById('viernes').innerHTML="<strong>Viernes</strong>";
		}
		if (dia==6){//SABADO
			document.getElementById('sabado').style.border=color;
			document.getElementById('sabado').innerHTML="<strong>Sabado</strong>";
		}
		if (dia==0) {//DOMINGO
			document.getElementById('domingo').style.border=color;
			document.getElementById('domingo').innerHTML="<strong>Domingo</strong>";
		}
		if(mes==0 || mes==1 || mes==11) {//INVIERNO
		document.getElementById("body").style.backgroundImage = "url('./imagenes/invierno.jpg')";
		}
		if(mes==2 || mes==3 || mes==4) {//PRIMAVERA
		document.getElementById("body").style.backgroundImage = "url('./imagenes/primavera.jpg')";
		}
		if(mes==5 || mes==6 || mes==7) {//VERANO
		document.getElementById("body").style.backgroundImage = "url('./imagenes/verano.jpg')";
		}
		if(mes==8 || mes==9 || mes==10) {//OTOÑO
		document.getElementById("body").style.backgroundImage = "url('./imagenes/otoño.jpg')";
		}
	}
	//Codigo JS del reloj
	function PonerCero(i){
		if(i<10){
			i="0"+i;
		}
		return i;
	}
	
	function reloj() {
		var hoy = new Date();
		var h = PonerCero(hoy.getHours());
		var m = PonerCero(hoy.getMinutes());
		var s = PonerCero(hoy.getSeconds());
		document.getElementById('reloj_texto').innerHTML= h + ":" + m + ":" + s;
	}
	//fin codigo JS reloj
	
	// Codigo JS del contador

	function contador() {
		var minutes_day = 1440;

		var hora_inicio_clases = 8;
		var minuto_inicio_clases = 30;
		var hora_inicio = (hora_inicio_clases*60)+minuto_inicio_clases;

		var hora_fin_clases = 14;
		var minuto_fin_clases = 20;
		var hora_fin = (hora_fin_clases*60)+minuto_fin_clases;

		var hoy = new Date();
		var h = hoy.getHours();
		var m = hoy.getMinutes();
		var hora_actual = (h*60) + m;

		var day = hoy.getDay();

		if ((day == 6 || day == 0) || hora_actual < hora_inicio || hora_actual > hora_fin) // Sábado o domingo, o antes de inicio, o después de fin
		{
			var horas_proxima_clase = 0;

			horas_proxima_clase = horas_proxima_clase + (minutes_day - hora_actual); // Suma los minutos que quedan del día actual
			horas_proxima_clase = horas_proxima_clase + hora_inicio; // Suma minutos hasta inicio primera clase

			if (day == 6) { // Si además es sabado	
				horas_proxima_clase = horas_proxima_clase + minutes_day; // Suma todos los minutos del domingo
			} 


			document.getElementById('contador_texto').innerHTML= "Tiempo para próxima clase:" + "<br/>" + PonerCero(parseInt(horas_proxima_clase/60)) + ":" + PonerCero(horas_proxima_clase%60) + "h";
		} else {
			var horas_fin_clase = hora_fin - hora_actual;
			document.getElementById('contador_texto').innerHTML= "Tiempo para final clases:" + "<br/>" + PonerCero(parseInt(horas_fin_clase/60)) + ":" + PonerCero(horas_fin_clase%60) + "h";
		}
	}

	// Fin JS del contador
	
	// Ejecuto la función que pinta el reloj y el contador
    setInterval(reloj ,1000);
    setInterval(contador ,1000);