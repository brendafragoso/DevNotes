//  Obtem Mês através entrada data ISO 8601

function getMonth(dataISO) {
    const data = new Date(dataISO);
    const month = data.getMonth();
    return month;
}

export default getMonth

