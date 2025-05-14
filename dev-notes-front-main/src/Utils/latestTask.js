// obtem a data da tarefa mais recente de uma lista de tarefas de entrada

function latestTask(listTask){
    if(listTask.length ===0){
        return null;
    }

    let latestUpdatedAt = new Date(listTask[0].updatedAt)

    for (let i = 1; i < listTask.length; i++) {
        const updatedAt = new Date(listTask[i].updatedAt);
        if (updatedAt > latestUpdatedAt) {
          latestUpdatedAt = updatedAt;
        }
      }

    return latestUpdatedAt
}

export default latestTask