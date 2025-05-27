function criaCartao (categoria, pergunta, resposta) {
 let container = document.getElementById('container')
 let cartao = document.createElement('article')
cartao.className = 'cartao'
cartao.innerHTML = `
            <div class="cartao__conteudo"> 
                <h3>Programacao</h3>
                 <div class= "cartao__conteudo__pergunta"> 
                O que é JS? 
                 </div> 
                 <div class="cartao__conteudo__resposta"> 
                Linguagem de Programação 
                </div> 
                </div>
                `
                container.appendChild(cartao)
}
