// funcao que retorna uma data do tipo Unix com a entrada de um tipo iso 8601

function transformDateUnix(isoDate) {
    return Math.floor(Date.parse(isoDate) / 1000);
}

export default transformDateUnix