let prato;
let preco_prato;
let bebida;
let preco_bebida;
let sobremesa;
let preco_sobremesa;
let botao_pedido = document.querySelector(".menu-base .botao-pedir")
//Colocar aqui o numero do celular do restaurante
const celular = 5521991037336

function EscolherPrato(escolha){

    const botaoclicado = document.querySelector(".prato .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        prato = document.querySelector(".prato .escolhido .escolha1").innerHTML
    } else {
        prato = ""
    }

    if (prato == "Miojo gourmet"){
        preco_prato=18.90
    } else if (prato=="Contra-file"){
        preco_prato=32.90
    } else if (prato=="Frango divino"){
        preco_prato=22.90
    } else if (prato=="Omelete de queijo"){
        preco_prato=13.90
    } else if (prato=="Empadão de frango"){
        preco_prato=20.90
    } else {
        preco_prato=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }

    console.log(prato)
}

function EscolherBebida(escolha){

    const botaoclicado = document.querySelector(".bebida .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        bebida = document.querySelector(".bebida .escolhido .escolha2").innerHTML
    } else {
        bebida = ""
    }

    if (bebida == "Refrigerante"){
        preco_bebida=3.90
    } else if (bebida=="Suco natural"){
        preco_bebida=6.90
    } else if (bebida=="Cerveja"){
        preco_bebida=4.90
    } else if (bebida=="Água sem gás"){
        preco_bebida=2.00
    } else if (bebida=="Água com gás"){
        preco_bebida=3.00
    } else {
        preco_bebida=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }
}

function EscolherSobremesa(escolha){

    const botaoclicado = document.querySelector(".sobremesa .escolhido")

    if (botaoclicado !== null){
        botaoclicado.classList.remove("escolhido");
    }

    if (botaoclicado !== escolha){
        escolha.classList.add("escolhido")
        sobremesa = document.querySelector(".sobremesa .escolhido .escolha3").innerHTML
    } else {
        sobremesa = ""
    }

    if (sobremesa == "Salada de frutas"){
        preco_sobremesa=4.50
    } else if (sobremesa=="Brigadeiro"){
        preco_sobremesa=2.50
    } else if (sobremesa=="Pudim"){
        preco_sobremesa=5.90
    } else if (sobremesa=="Mousse de maracujá"){
        preco_sobremesa=6.90
    } else if (sobremesa=="Bombom"){
        preco_sobremesa=1.50
    } else {
        preco_sobremesa=0
    }

    if (preco_prato>0 && preco_bebida>0 && preco_sobremesa>0){
        botao_pedido.classList.add("liberado");
        botao_pedido.innerHTML="Fazer o pedido";
    } else {
        botao_pedido.classList.remove("liberado");
        botao_pedido.innerHTML="Selecione os 3 itens para fechar o pedido";
    }
}

function prosseguir(){
    if (botao_pedido.innerHTML == "Fazer o pedido"){
        document.querySelector(".escolhas-confirmacao .prato").innerHTML=prato
        document.querySelector(".escolhas-confirmacao .preco_prato").innerHTML=preco_prato.toFixed(2).replace(".",",")
        document.querySelector(".escolhas-confirmacao .bebida").innerHTML=bebida
        document.querySelector(".escolhas-confirmacao .preco_bebida").innerHTML=preco_bebida.toFixed(2).replace(".",",")
        document.querySelector(".escolhas-confirmacao .sobremesa").innerHTML=sobremesa
        document.querySelector(".escolhas-confirmacao .preco_sobremesa").innerHTML=preco_sobremesa.toFixed(2).replace(".",",")
        preco_total=preco_prato+preco_bebida+preco_sobremesa
        document.querySelector(".escolhas-confirmacao .preco_total").innerHTML="R$ "+preco_total.toFixed(2).replace(".",",")
        document.querySelector(".tela-final").classList.remove("ocultar")
        document.querySelector(".confirmacao-pedido").classList.remove("ocultar")
        document.querySelector(".confirmacao-infos").classList.add("ocultar")
    }
}

function voltar(){
    document.querySelector(".tela-final").classList.add("ocultar")
    document.querySelector(".inputNome").value=""
    document.querySelector(".inputEndereco").value=""
}

function avancarPedido(){
    document.querySelector(".confirmacao-pedido").classList.add("ocultar")
    document.querySelector(".confirmacao-infos").classList.remove("ocultar")
}

function avancarInfos(){
    const nome = document.querySelector(".inputNome").value
    const endereco = document.querySelector(".inputEndereco").value
    if (nome!=="" && endereco!==""){
        let msg=`Olá, gostaria de fazer o pedido: \n - Prato: ${prato}\n - Bebida: ${bebida}\n - Sobremesa: ${sobremesa}\n Total: R$ ${preco_total.toFixed(2)}\n \n Nome: ${nome}\n Endereço: ${endereco}`;
        msg=window.encodeURIComponent(msg);
        let site=`https://wa.me/${celular}?text=${msg}`;
        document.querySelector(".confirmacao-infos").classList.add("ocultar")
        document.querySelector(".ultima-tela").classList.remove("ocultar")    
        window.open(site);  
    }
}

function reiniciar(){
    document.querySelector(".tela-final").classList.add("ocultar")
    document.location.reload(true)
}