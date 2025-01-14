function adicionarTarefa() {
    let mensagem = "Tarefa adicionada com sucesso!"
    
    let inputTarefa = document.getElementById("inputTarefa");
    let Tarefa = inputTarefa.value;
    

   

    if (Tarefa == "") {
        listaTarefas.textContent = "Campo vazio! Digite algo!"
    } else {
        let listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement('li');
        
        novaTarefa.textContent = Tarefa;
    
        listaTarefas.appendChild(novaTarefa);

        document.getElementById("mensagem").textContent = mensagem;
    }

    
}


