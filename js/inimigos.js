const inimigos = [
  {
    nome: "João",
    descricao:
      "Amigo de longa data do Breno, sempre foi o patrocinador oficial das cocas.<br /><br />" +
      "Mas até a paciência dele tem limite.<br /><br />" +
      "Hoje, ele decidiu que ou o Breno paga, ou vai correr!",
    sprite: "img/joao-aumentado.gif",
  },
  {
    nome: "João Gabriel",
    descricao:
      "Uma vez emprestou o carregador do celular pro Breno. Resultado?<br /><br />" +
      "Nunca mais viu nem o carregador, nem a coca prometida em troca.<br /><br />" +
      "Agora corre atrás dele, não pelo carregador, mas pela justiça!",
    sprite: "img/Joao-Gabriel-Aumentado.gif",
  },
  {
    nome: "Mauro",
    descricao:
      "Colega de faculdade do Breno. <br /><br />" +
      "Teve a paciência de ajudar o cara a montar toda a apresentação do projeto, em troca de uma mísera coca.<br /><br />" +
      "Nunca nem sentiu o cheiro da garrafa. Tá na pista pra cobrar com juros!",
    sprite: "img/Mauro-aumentado.gif",
  },
  {
    nome: "Emanuel",
    descricao:
      "Colega de serviço do Breno e conhecido pela GRANDE presença.<br /><br />" +
      "Um dia Breno passou umas tarefas pra ele resolver em seu lugar, prometendo pagar com uma coca. E adivinha?<br /><br />" +
      "Emanuel ganhou só serviço — e nenhum gole. Agora vem pesado na cobrança, literalmente.",
    sprite: "img/Emanuel-aumentado.gif",
  },
  {
    nome: "Rafael",
    descricao:
      "Breno não deve nada pra ele…<br /><br />" +
      "Mas prometeram uma coca se ajudasse na captura!<br /><br />" +
      "Motivo suficiente pra entrar nessa caçada.",
    sprite: "img/Rafael-aumentado.gif",
  },
  {
    nome: "Pastelzin",
    descricao:
      "O maior ponto fraco do Breno.<br /><br />" +
      "Mesmo fugindo do acerto de contas, um pastelzin bem frito pode fazer ele esquecer que está sendo perseguido.<br /><br />" +
      "Mas cuidado! Enquanto ele baba no pastel, João se aproxima sorrateiro... e com fome também! (Só que de justiça)",
    sprite: "img/barraca_pastel.png",
  },
];

let indice = 0;

function atualizarNome(novoNome) {
  const nomes = document.getElementsByClassName("nome");
  for (let i = 0; i < nomes.length; i++) {
    nomes[i].textContent = novoNome;
  }
}

function proximoInimigo() {
  indice = (indice + 1) % inimigos.length;
  atualizarNome(inimigos[indice].nome);
  document.getElementById("descricao").innerHTML = inimigos[indice].descricao;
  document.getElementById("descricao-container").scrollTop = 0;
  document.getElementById("sprite").src = inimigos[indice].sprite;
}

function voltarInimigo() {
  indice = (indice - 1 + inimigos.length) % inimigos.length;
  atualizarNome(inimigos[indice].nome);
  document.getElementById("descricao").innerHTML = inimigos[indice].descricao;
  document.getElementById("sprite").src = inimigos[indice].sprite;
}
