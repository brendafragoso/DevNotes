// função que retorna apenas os itens da lista que possuem a ocorrencia da palavra.

function searchWord(items, word) {
    console.log(items)
    return items.filter(item => {
      const searchLower = word.toLowerCase();
      return item.name_task.toLowerCase().includes(searchLower) || item.description.toLowerCase().includes(searchLower);
    });
  }

export default searchWord

