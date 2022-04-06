//Desenvolvedor : Renan Augusto de Carvalho 
// Aluno da Blueteck: Modulo 01 Turma 13


console.clear();
const prompt = require("prompt-sync")();
// Declaração das variaveis e objetos
let jogo = true;
let escolhaTrabalhoMenu = true;
let escolhaLojaMenu = true;
const horario = {};
let jogador = [];
let opcao;
let dia = 1;
let hora = 6;
let diaA = 1;
const player = {};
let nome;


// objeto com os status do jogador inicial
const status = {
    
  tempoVida: 24,
  saude: 10,
  dinheiro: 100
}

// função da loja, onde existe o aumentos e ou a diminuição dos status dependendo da escolha
function loja (horaAtual, diaAtual){
console.clear();  
  let escolhaLoja = 0;
    
    while(escolhaLojaMenu){
  
      if (horaAtual >=24){
        horaAtual -=24;
        diaAtual ++;
        dia = diaAtual;
        continue
              
      }
  
  
      if (status.tempoVida > 0){
  
        console.clear();
        console.log("[1] Refeição --> Aumenta 4 de SAUDE, custo de R$ 20,00");
        console.log("[2] Bebida --> Aumenta 2 de SAUDE, custo de R$ 8,00");
        console.log("[3] Tempo de vida --> Aumenta em 3 horas de TEMPO DE VIDA, custo de R$ 50,00");
        console.log("[4] Voltar ao menu");
        escolhaLoja = +prompt('');
  
        switch (escolhaLoja){
          case 1: 
            
          if(status.dinheiro >=20){

            status.tempoVida -= 1;
            status.dinheiro -= 20;
            status.saude +=4;
            horaAtual += 1;
            console.log("Parabens, você comprou uma Refeição, isso te custou R$20,00\n");
            console.log(`Agora seus status é: \n Tempo de vida: ${status.tempoVida} horas\n Saude: ${status.saude}\n Dinheiro: R$${(status.dinheiro).toFixed(2)}\n`);
             
          }
            else {
              console.log("Saldo insuficiente! :( ");

            } 
            prompt ('Pressione [ENTER] para retornar ao menu');        
            break;
  
          case 2:
            
            if(status.dinheiro >= 8){

              status.tempoVida -= 1;
              status.dinheiro -= 8;
              status.saude +=2;
              horaAtual += 1;
              console.log("Parabens, você comprou uma Bebida, isso te custou R$ 8,00\n");
              console.log(`Agora seus status é: \n Tempo de vida: ${status.tempoVida} horas\n Saude: ${status.saude}\n Dinheiro: R$${(status.dinheiro).toFixed(2)}\n`);
               
            }
              else {
                console.log("Saldo insuficiente! :( ");
  
              } 
              prompt ('Pressione [ENTER] para retornar ao menu');        
              break;

          case 3:
            
            if(status.dinheiro >= 50){

              status.tempoVida += 3;
              status.dinheiro -= 50;
              horaAtual += 1;
              console.log("Parabens, você comprou um Tempo de vida, isso te custou R$50,00\n");
              console.log(`Agora seus status é: \n Tempo de vida: ${status.tempoVida} horas\n Saude: ${status.saude}\n Dinheiro: R$${(status.dinheiro).toFixed(2)}\n`);
               
            }
              else {
                console.log("Saldo insuficiente! :( ");
  
              } 
              prompt ('Pressione [ENTER] para retornar ao menu');        
              break;
        
          case 4:
            
            status.tempoVida -= 1;
            horaAtual += 1 
            console.log("\nPressione [ENTER] para retornar ao menu principal, se passou 1 HORA !");
            prompt(' ');
            return hora = horaAtual;          
            break;
  
          default:
  
            status.tempoVida -= 2;
            horaAtual += 2
            console.log("Digite um valor válido\n");
            console.log("Digite [ENTER] para voltar ao menu principal, se passou 2 HORAS");
            prompt('');

        }
      }
    }
  }
            

//Função do trabalho, onde aumenta a quantidade de dinehro, porem diminui a saúde e o tempo de vida
function trabalho (horaAtual, diaAtual, nomeAtual){

console.clear();
let escolhaTrabalho = 0;
  
  while(escolhaTrabalhoMenu){

    if (horaAtual >=24){
      horaAtual -=24;
      diaAtual ++;
      dia = diaAtual;
      continue
            
    }


    if (status.tempoVida > 0){

      console.clear();
      console.log("[1] Trabalho Arduo (periodo inteiro) --> valor arrecadado R$150,00, custo de tempo de vida: 10 horas");
      console.log("[2] Trabalho Tranquilo (meio periodo) --> valor arrecadado R$65,00, custo de tempo de vida : 6 horas");
      console.log("[3] Voltar ao menu");
      escolhaTrabalho = +prompt('');

      switch (escolhaTrabalho){
        case 1: 
          
          status.tempoVida -= 12;
          status.dinheiro += 150;
          status.saude -=4;
          horaAtual += 12;
          console.log("\nParabens, você trbalhou bastante horas e conquistou R$150,00\n");
          console.log(`Agora seus status é: \n Tempo de vida: ${status.tempoVida} horas\n Saude: ${status.saude}\n Dinheiro: R$${(status.dinheiro).toFixed(2)}\n`);
          prompt ('Pressione [ENTER] para retornar ao menu');          
          break;

        case 2:
          
          status.tempoVida -= 6;
          status.dinheiro += 65;
          status.saude -=2;
          horaAtual += 6;
          console.log("\nParabens, você trbalhou meio periodo e conquistou R$65,00\n");
          console.log(`Agora seus status é: Tempo de vida ${status.tempoVida}\n Saude: ${status.saude}\n Dinheiro: R$${(status.dinheiro).toFixed(2)}\n`);
          prompt ('Pressione [ENTER] para retornar ao menu'); 
          
          break;
      
        case 3:
          
          status.tempoVida -= 1;
          horaAtual += 1 
          console.log("\nPressione [ENTER] para retornar ao menu principal, se passou 1 HORA !");
          prompt(' ');
          return hora = horaAtual;          
          break;

          default:

          status.tempoVida -= 2;
          horaAtual += 2
          console.log("Digite um valor válido\n");
          console.log("Digite [ENTER] para voltar ao menu principal, se passou 2 HORAS");
          prompt('');
          
          

      }  
      
    }else if(status.tempoVida <= 0 ){
          console.log(`Acabou seu tempo ${nome}, que pena !!`);
          prompt(' ');
          escolhaTrabalhoMenu = false;
          jogo = false;
          fim ();}
  } 
 


}
 
//Função de inicio do jogo, onde tem a aprensentação e a barra de menu para navegar pelo game
function inicio(horaAtual, diaAtual, nomeAtual) {
  
console.log();
console.log("************************************");
console.log("**   Seja Bem Vindo ao Life Time  **");
console.log("************************************");
console.log();
  
console.log(" História do Jogo: Esse jogo se baseia no filme In Time, onde a vida das pessoas são medida em horas, então o quanto de horas essa pessoa tem de vida, assim que acaba esse marcador de horas, a pessoa morre.\n O jogo basicamente é focado em você, o jogador realizar escolhas sensatas para viver mais um dia e assim até o maximo de didas que conseguir viver e admnistrar suas horas para mais um dia de vida.\n A principio, o jogador começa com o horario equivalente a 24 horas, podendo admnistrar essas horas para sobreviver dia a dia, ou viver apenas esse dia, utilizando esse horario em baladas, bens de consumo, bebedeiras entre outros.");
console.log();
  
nome = prompt("Digite o nome do personagem para iniciarmos o jogo: ");
player.nome = nome;

    while (jogo) {
 
      console.log("\n[1] STATUS");
      console.log("[2] HORARIO");
      console.log("[3] LOJA");
      console.log("[4] TRABALHAR");
      console.log("[5] SAIR DO JOGO");
      opcao  = +prompt('');

        switch (opcao) {
        case 1:
          console.log(`\nSeu status:\nTempo de Vida: ${status.tempoVida}\nSaude: ${status.saude}\nDinheiro: R$${(status.dinheiro).toFixed(2)}`);
          console.log("\nDigite [ENTER] para voltar ao menu principal");
          prompt('');
          break;

        case 2: 
            
            console.log(`\n${nome}, você está na hora ${hora} do dia ${dia}`);
            console.log("\nDigite [ENTER] para voltar ao menu principal");
            prompt('');
            break;

        case 3:
          
        loja(hora, dia);
        break;
            
        case 4:
          trabalho(hora, dia, nome)
          break;
            
        case 5:
          fim();
            jogo = false;
          break;

        default:
          console.log("Digite um valor válido\n");
          console.log("Digite [ENTER] para voltar ao menu principal");
          prompt('');
      }   
      console.clear();
     }
    
  }
//Função de encerramento do jogo, ou a posibilidade de uma nova jogatina
  function fim() {
    
    let op;
    
    while (op != 1 && op != 2) {
      
      console.log("\nIniciar o jogo novamente?");
      console.log("[1] SIM");
      console.log("[2] NÃO");
      op =+prompt('');
      
      switch (op) {
          
        case 1:
          
          status.tempoVida = 24
          status.saude = 10
          status.dinheiro = 100
          hora = 6;
          dia = 1;
          escolhaTrabalhoMenu = true;
          inicio(hora, dia, nome);
          break;
          
        case 2:
          
          jogo = false;
          break;
          
        default:
          
          console.log("Digite um valor válido");
      }
    }
  }
inicio(hora, dia, nome);
console.log("GAME OVER");
console.log();

//FIM