// funcao que retorna True se duas datas sao no mesmo dia

function isSameDay(unixDateFirst, unixDateSecond) {
    var data1 = new Date(unixDateFirst * 1000); // Multiplica por 1000 para converter segundos em milissegundos
    var data2 = new Date(unixDateSecond * 1000);

    // Verifica se as datas estão no mesmo dia
    var mesmoDia = data1.getDate() === data2.getDate() &&
                   data1.getMonth() === data2.getMonth() &&
                   data1.getFullYear() === data2.getFullYear();

    // Verifica se as datas estão na mesma semana
    var mesmaSemana = data1.getDay() === data2.getDay() &&
                      Math.abs(data1 - data2) < 7 * 24 * 60 * 60 * 1000; // Menos de 7 dias de diferença

    return mesmoDia && mesmaSemana;
}

export default isSameDay