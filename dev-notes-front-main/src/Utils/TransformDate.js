// funcao que retorna uma data do tipo time com a entrada de um tipo iso 8601

function transformDate(isoDate ){

    const date = new Date(isoDate)

    const hour = date.getHours();
    const minute = date.getMinutes();
    let timeValue = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

    return timeValue 
}

export default transformDate