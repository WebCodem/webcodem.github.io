  document.addEventListener("DOMContentLoaded", function() {
  var chat = document.getElementById("chat");
  var input = document.getElementById("input");
  var send = document.getElementById("send");

  function createMessage(text, className) {
    var message = document.createElement("div");
    message.classList.add("message");
    message.classList.add(className);
    message.textContent = text;
    return message;
  }

  function sendMessage(event) {
    event.preventDefault();
    var text = input.value;
    if (text) {
      var message = createMessage(text, "user");
      chat.appendChild(message);
      chat.scrollTop = chat.scrollHeight;
      input.value = "";
      replyMessage(text);
    }
  }

  function replyMessage(text) {
    var reply;
    text = text.toLowerCase();
    
    var regexSuma = /(\d+)\s*\+\s*(\d+)/;
    var matchSuma = text.match(regexSuma);

    var regexResta = /(\d+)\s*\-\s*(\d+)/;
    var matchResta = text.match(regexResta);

    var regexMultiplicacion = /(\d+)\s*\*\s*(\d+)/;
    var matchMultiplicacion = text.match(regexMultiplicacion);

    var regexDivision = /(\d+)\s*\/\s*(\d+)/;
    var matchDivision = text.match(regexDivision);

    var regexRaizCuadrada = /raiz\s+cuadrada\s+de\s*(\d+)/;
    var matchRaizCuadrada = text.match(regexRaizCuadrada);

    if (matchSuma || matchResta || matchMultiplicacion || matchDivision || matchRaizCuadrada) {
      reply = matematica(text);
    } else {
      reply = lenguaje(text);
    }
    
    var message = createMessage(reply, "bot");
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
  }

  send.addEventListener("click", sendMessage);
});
