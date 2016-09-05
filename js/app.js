window.addEventListener("load", function() {
	var boton = document.getElementById("monto");
	boton.addEventListener("click", function() {
		var numero1 = parseInt(document.getElementById("numero1").value);
		var numero2 = parseInt(document.getElementById("numero2").value);
		var numero3 = parseInt(document.getElementById("numero3").value);

		if(numero1 >= 1 && numero2 >= 1 && numero3 === ""){
			var resultado = document.getElementById("resultado");
			resultado.innerHTML = "<p>El resultado es S/. " + montoFinal(numero1,numero2) + "</p>";
		} else if (numero1 >= 1 && numero2 >= 1 && numero3 >= 1){
			var resultado = document.getElementById("resultado");
			resultado.innerHTML = "<p>El resultado es S/. " + montoDescuento(numero1,numero2,numero3) + "</p>";
		} else {
			var resultado = document.getElementById("resultado");
      		resultado.innerHTML = "<p>Ingresa un valor válido" + "</p>";
		}
		
	});

	function montoFinal(numero1, numero2) {
		var monto = numero1*numero2;
        var redondo = monto.toFixed(2);
		return redondo;
	}
	function montoDescuento(numero1, numero2, numero3) {
		var montoDescuento = (numero1*numero2)-(numero1*numero2)*(numero3/100);
        var redondoDos = montoDescuento.toFixed(2);
		return redondoDos;
	}
});