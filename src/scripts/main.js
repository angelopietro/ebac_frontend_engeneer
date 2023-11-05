AOS.init();

const contador = document.getElementById( "contador" );
const dataEvento = document.getElementById( "data-evento" );
const dataDoEvento = new Date( "Jul 10, 2024 20:00:00" );
const timeStampDoEvento = dataDoEvento.getTime();

const dia = dataDoEvento.getDate();
const mes = dataDoEvento.getMonth();
const ano = dataDoEvento.getFullYear();
const horario = dataDoEvento.getHours();

const contaAsHoras = setInterval( () => {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor( distanciaAteOEvento / diaEmMs );
    const horasAteOEvento = Math.floor(
        ( distanciaAteOEvento % diaEmMs ) / horaEmMs
    );
    const minutosAteOEvento = Math.floor(
        ( distanciaAteOEvento % horaEmMs ) / minutoEmMs
    );
    const segundosAteOEvento = Math.floor(
        ( distanciaAteOEvento % minutoEmMs ) / 1000
    );

    contador.innerHTML = `${ diasAteOEvento }d ${ horasAteOEvento }h ${ minutosAteOEvento }m ${ segundosAteOEvento }s`;
    dataEvento.innerHTML = `${ dia }/${ mes + 1 }/${ ano } às ${ horario }hs`;

    if ( diasAteOEvento < 0 ) {
        clearInterval( contaAsHoras );
        contador.innerHTML = "Evento expirado";
    }
}, 1000 );
