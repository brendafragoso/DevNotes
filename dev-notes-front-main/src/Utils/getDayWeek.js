//  Obtem dia da semana através entrada data ISO 8601

function getDayWeek(dataISO) {
    const data = new Date(dataISO);
    const dayWeek = data.getDay();
    return dayWeek;
}

export default getDayWeek