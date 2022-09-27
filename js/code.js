/**/

const mostrarReloj = () => {
    let fecha = new Date();
    let horas = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sáb', 'Dom'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    let fechaTExto = `${diaSemana}|${dia}|${mes}`;

    document.getElementById('fecha').innerHTML = fechaTExto

    document.getElementById('contenedor').classList.toggle('animar')
}

const formatoHora = (hora) => {
    if(hora < 10)
        hora = '0' + hora;

    return hora;
};

setInterval(mostrarReloj, 1000);