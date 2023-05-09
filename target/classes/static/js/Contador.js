const tiempoLimite = 2 * 60 * 1000;

const contador = document.getElementById('Cuenta_Atras');

function iniciarCuentaAtras() {
  const fechaLimite = new Date().getTime() + tiempoLimite;

  const intervalo = setInterval(() => {

    const fechaActual = new Date().getTime();

    const diferencia = fechaLimite - fechaActual;

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contador.textContent = `Tiempo restante: ${minutos}:${segundos.toString().padStart(2, '0')}`;

    if (diferencia < 0) {

      clearInterval(intervalo);

      const resultado = prompt('¡Tiempo terminado! ¿Quieres finalizar la partida? Introduzca si o no');

      if (resultado === 'si') {

        window.location.href = 'Si.html';

      } else if (resultado === 'no') {

        location.reload();

      }
    }
  }, 1000);
}