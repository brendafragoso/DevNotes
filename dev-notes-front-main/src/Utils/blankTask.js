function getLocalDateTimeIso() {
    // Obtém a data e hora local
    var localTime = new Date();
    // Formata para ISO 8601
    var isoLocalTime = localTime.toISOString();
    return isoLocalTime;
}

const blankTask = 
    {
        "id": 1,
        "name_task": "Digite o nome da Tarefa",
        "date_begin": `${getLocalDateTimeIso()}`,
        "date_finish": `${getLocalDateTimeIso()}`,
        "frequency": "Diário",
        "description": "Descreva a tarefa..",
        "box_color": "#ededed",
        "text_color": "#000000",
        "createdAt": `${getLocalDateTimeIso()}`,
        "updatedAt": `${getLocalDateTimeIso()}`,
        "user_id": "36cbc54d-f669-4297-8756-9d93640c20ed"
    }


export default blankTask