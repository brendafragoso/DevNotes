// função que com uma data de entrada retorna uma data nova com um shift de "shiftIndex" dias

function calculateNewDate(isoDate, shiftIndex) {

    // Converte a string ISO 8601 para um objeto Date
    const localDate = new Date(isoDate);

    // Cria uma nova instância de Date baseada na data original
    const newDate = new Date(localDate.getTime());
    
    // Adiciona o índice (número de dias) à data
    newDate.setDate(localDate.getDate() + shiftIndex);

    return newDate;
}

export default calculateNewDate

/* Exemplo de uso:
const localDate = new Date();
console.log("Data original:", localDate);

// Calcula a data um dia antes
const previousDay = calculateNewDate(localDate, -1);
console.log("Um dia antes:", previousDay);

// Calcula a data três dias depois
const threeDaysLater = calculateNewDate(localDate, 3);
console.log("Três dias depois:", threeDaysLater);

// Calcula a mesma data (nenhum dia de diferença)
const sameDay = calculateNewDate(localDate, 0);
console.log("Mesmo dia:", sameDay)

*/