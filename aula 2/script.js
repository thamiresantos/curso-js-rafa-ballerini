let tarefas = []

function adicionarTarefa() {
    
    //recebe valor do input do usuário
    let inputTarefa = document.getElementById("inputTarefa");
    let Tarefa = inputTarefa.value.trim() //trim tira os espaços vazios do começo e do fim da frase.
    // campo vazio <p>
   let mensagem = document.getElementById("mensagem")
    
    // Se o valor do input estiver vazio, retorna a mensagem:
    if (Tarefa == "") {
        mensagem.style.color = '#A34743'
        mensagem.textContent = "Campo vazio! Digite uma tarefa para adicioná-la a sua lista!"

    } else {
        // mensagem de tarerfa adicionada com sucesso
        mensagem.style.color = '#28A745'
        mensagem.textContent = "Tarefa adicionada com sucesso!"
        tarefas.push(Tarefa)
        renderizarTarefas()
       
    }

    //limpa o input do usuário
        inputTarefa.value = ""
 
}

function renderizarTarefas() {
 //cria novo item (li) e insere na lista (ul)
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = ""

    let i =0 
    for (i; i < tarefas.length; i++) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefas[i]
        listaTarefas.appendChild(novaTarefa); //adicionado ao pai
     }
}


