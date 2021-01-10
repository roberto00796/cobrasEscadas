class CobrasEscadas{
    
    constructor(){
        this.jogador1 = 0;
        this.jogador2 = 0;
        this.jogadorAtual = 1;
        this.fimJogo = false;
        this.escadas = [
            
        ];
        this.cobas = [
            
        ];
    }
  
    jogar(dado1, dado2){
        
        if(this.fimJogo){
            alert('O jogo acabou!');
            return false;
        }

        var totalDados = dado1 + dado2;

           if(this.jogadorAtual == 1){
                if((this.jogador1 + totalDados) > 100){
                    var limite = 100 - this.jogador1;
                    this.jogador1 += limite;
                    var i = totalDados - limite;
                    while(i > 0){
                       this.jogador1 --; 
                       i--;
                    }
                }
                else{
                    this.jogador1 += totalDados;
                }
               if(this.jogador1 == 100){
                   alert('Jogador 1 Venceu!');
                   this.fimJogo = true;
               }
               else{
                    alert('Jogador 1 esta na casa '+this.jogador1);
               }
               if(dado1 != dado2){
                    this.jogadorAtual = 2;
               }
           }
           else{
               if((this.jogador2 + totalDados) > 100){
                    var limite = 100 - this.jogador2;
                    this.jogador2 += limite;
                    var i = totalDados - limite;
                    while(i > 0){
                       this.jogador2 --; 
                       i--;
                    }
                }
                else{
                    this.jogador2 += totalDados;
                }
                
                if(this.jogador2 == 100){
                   alert('Jogador 2 Venceu!');
                   this.fimJogo = true;
                }
                else{
                    alert('Jogador 2 esta na casa '+this.jogador2);
                }
               if(dado1 != dado2){
                    this.jogadorAtual = 1;
               }
           }
   }

}

var jogo = new CobrasEscadas();


function jogarDados(){
    dado1 = Math.floor(Math.random() * 6) + 1; 
    dado2 = Math.floor(Math.random() * 6) + 1; 
    jogo.jogar(dado1,dado2);

    document.getElementById("jogador1").textContent = jogo.jogador1;
    document.getElementById("jogador2").textContent = jogo.jogador2;
    
    if(jogo.jogadorAtual == 1){
        document.getElementById("jogadorAtual").style.color = "#000099";
    }
    else{
        document.getElementById("jogadorAtual").style.color = "#003300";
    }
    if(!jogo.fimJogo){
        document.getElementById("dados").textContent = dado1+" e "+dado2;
        document.getElementById("jogadorAtual").textContent = jogo.jogadorAtual;
    }
}









