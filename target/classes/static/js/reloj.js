function actualizarHora() {

    var ahora = new Date();

    var hora = ahora.getHours();

    var minutos = ahora.getMinutes();

    var segundos = ahora.getSeconds();

    hora = hora < 10 ? '0' + hora : hora;

    minutos = minutos < 10 ? '0' + minutos : minutos;

    segundos = segundos < 10 ? '0' + segundos : segundos;

    var horaActual = hora + ':' + minutos + ':' + segundos;

    document.getElementById('reloj').innerHTML = horaActual;

  }
  
  setInterval(actualizarHora, 1000);