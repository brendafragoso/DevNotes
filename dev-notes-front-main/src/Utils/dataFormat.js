// dataIso é em ISO 8601

function formatarDataISO(dataISO) {
    var data = new Date(dataISO);
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    
    dia = dia < 10 ? '0' + dia : dia;
    mes = mes < 10 ? '0' + mes : mes;

    return `${dia}/${mes}/${ano}`;
}

export default formatarDataISO

