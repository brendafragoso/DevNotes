//Com base no numero do mês, 1=janeiro, 2=fevereiro e o ano ex 2024
//retorna o numero de dias daquele mês.

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export default getDaysInMonth