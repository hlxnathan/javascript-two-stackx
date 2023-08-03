/**
 * Chatlab - Conceitos de array/object em Javascript.
 * 
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

var listaMensagens = []; // Array para armazenar as mensagens

function adicionarMensagem(apelido, mensagem) { // Função para adicionar uma mensagem ao array
    listaMensagens.push({
        "apelido": apelido,
        "mensagem": mensagem
    });
}

function formatarMensagens() { // Função para formatar as mensagens em HTML
    var html = "";
    for (var i = 0; i < listaMensagens.length; i++) {
        var mensagem = listaMensagens[i];
        html += '<div class="chat-message">';
        html += '<span class="chat-message-apelido">' + mensagem.apelido + '</span>';
        html += '<span class="chat-message-item">' + mensagem.mensagem + '</span>';
        html += '</div>';
    }
    return html;
}


function atualizarHTML() { // Função para atualizar o conteúdo da div com as mensagens formatadas
    var mensagemDiv = document.getElementById('chat-messages');
    mensagemDiv.innerHTML = formatarMensagens();
}

function commitMessageClickHandler(){ // Adiciona o evento de clique ao botão de adicionar mensagem
    let mensagemInput = document.getElementById("message-input")

    if(mensagemInput.value.trim().length == 0){
      mensagemInput.focus()
      return
    }

    adicionarMensagem("Nathan says: ", mensagemInput.value)
    atualizarHTML()
    document.getElementById("message-input").value = ``
  }

// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------