//  Obtem dia do mes através entrada data ISO 8601

function getDayMonth(dataISO) {
    const data = new Date(dataISO);
    const dayMonth = data.getDate();
    return dayMonth;
}

export default getDayMonth
