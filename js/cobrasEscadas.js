class CobrasEscadas{
    
    constructor(){
        this.jogadorAtual = 1;
        this.fimJogo = false;
        this.jogadores = [0,0];
        this.escadas = [
            {
                start:2,
                end:38
            },
            {
                start:7,
                end:14
            },
            {
                start:8,
                end:31
            },
            {
                start:15,
                end:26
            },
            {
                start:21,
                end:42
            },
            {
                start:28,
                end:84
            },
            {
                start:36,
                end:44
            },
            {
                start:36,
                end:44
            },
            {
                start:51,
                end:67
            },
            {
                start:71,
                end:91
            },
            {
                start:71,
                end:91
            },
            {
                start:78,
                end:98
            },
            {
                start:87,
                end:94
            }
            
        ];
        this.cobras = [
            {
                start:16,
                end:6
            },
            {
                start:49,
                end:11
            },
            {
                start:46,
                end:25
            },
            {
                start:62,
                end:19
            },
            {
                start:64,
                end:60
            },
            {
                start:74,
                end:53
            },
            {
                start:89,
                end:68
            },
            {
                start:92,
                end:88
            },
            {
                start:95,
                end:75
            },
            {
                start:99,
                end:80
            }
            
        ];
    }
  
    jogar(dado1, dado2){
        
        if(this.fimJogo){
            alert('O jogo acabou!');
            return false;
        }
        var index = 0;
        if(this.jogadorAtual == 2){
            index = 1;
        }

        var totalDados = dado1 + dado2;

                if((this.jogadores[index] + totalDados) > 100){
                    var limite = 100 - this.jogadores[index];
                    this.jogadores[index] += limite;
                    var i = totalDados - limite;
                    while(i > 0){
                       this.jogadores[index] --; 
                       i--;
                    }
                }
                else{
                    this.jogadores[index] += totalDados;
                }
               if(this.jogadores[index] == 100){
                   alert('Jogador '+this.jogadorAtual+' Venceu!');
                   this.fimJogo = true;
               }
               else{
                   this.escadas.forEach(escada=>{
                        if(escada.start == this.jogadores[index]) {
                          alert('Voc\u00ea subiu uma escada');  
                          this.jogadores[index] = escada.end;
                        }
                    });
                    
                    this.cobras.forEach(cobra=>{
                        if(cobra.start == this.jogadores[index]) {
                            alert('Voc\u00ea subiu na cabe\u00e7a da cobra');  
                            this.jogadores[index] = cobra.end;
                        }
                    });
                   
                    alert('Jogador '+this.jogadorAtual+' esta na casa '+this.jogadores[index]);
               }
               if(dado1 != dado2){
                   if(this.jogadorAtual == 1){
                       this.jogadorAtual = 2;
                   }
                   else{
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

    document.getElementById("jogador1").textContent = jogo.jogadores[0];
    document.getElementById("jogador2").textContent = jogo.jogadores[1];
    
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









