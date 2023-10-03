document.getElementById("mostrar-menu").addEventListener("click", function () {
    const entradaSelecionada = document.getElementById("entrada");
    const pratoSelecionado = document.getElementById("prato-principal");
    const sobremesaSelecionada = document.getElementById("sobremesa");

    const menuEscolhido = document.getElementById("menu-escolhido");
    const menuItems = document.getElementById("menu-items");

    menuItems.innerHTML = ""; // delete

    // Imagens
    function criarImagem(caminhoDaImagem, altText) {
        const imagem = document.createElement("img");
        imagem.src = caminhoDaImagem;
        imagem.alt = altText;
        imagem.width = 300; // Largura 
        imagem.height = 250; // Altura
        return imagem;
    }

    const entradaItem = document.createElement("div");
    entradaItem.innerHTML = `<p>Entrada: ${entradaSelecionada.options[entradaSelecionada.selectedIndex].text}</p>`;
    entradaItem.appendChild(criarImagem(`img/entrada${entradaSelecionada.value.charAt(entradaSelecionada.value.length - 1)}.jpeg`, `Entrada ${entradaSelecionada.value.charAt(entradaSelecionada.value.length - 1)}`));
    menuItems.appendChild(entradaItem);

    const pratoItem = document.createElement("div");
    pratoItem.innerHTML = `<p>Prato Principal: ${pratoSelecionado.options[pratoSelecionado.selectedIndex].text}</p>`;
    pratoItem.appendChild(criarImagem(`img/prato${pratoSelecionado.value.charAt(pratoSelecionado.value.length - 1)}.jpeg`, `Prato ${pratoSelecionado.value.charAt(pratoSelecionado.value.length - 1)}`));
    menuItems.appendChild(pratoItem);

    const sobremesaItem = document.createElement("div");
    sobremesaItem.innerHTML = `<p>Sobremesa: ${sobremesaSelecionada.options[sobremesaSelecionada.selectedIndex].text}</p>`;
    sobremesaItem.appendChild(criarImagem(`img/sobremesa${sobremesaSelecionada.value.charAt(sobremesaSelecionada.value.length - 1)}.jpeg`, `Sobremesa ${sobremesaSelecionada.value.charAt(sobremesaSelecionada.value.length - 1)}`));
    menuItems.appendChild(sobremesaItem);

    menuEscolhido.style.display = "block";
});
