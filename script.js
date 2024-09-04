//Arrays de imagem, link e nome dos RPGs
const listaRPG = [
    "https://ordemparanormal.com.br/wp-content/uploads/elementor/thumbs/Ordem_Paranormal_-_Epis3Fdio_1-papg14jgjjci9l2c7ozxmlwgxekjk3v38ks7cidvl6.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWIyYjQ4MDktYjA0OC00YzE4LTkyZWEtNzg2MWZmMjgzYTliXkEyXkFqcGdeQXVyMTAwOTAxNjI0._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTToqUbTNPZEV2AZkNvFbWfYIZrrOk52cbVNhdcF_M3i4GvaDen6E2cR5vqBlOn2SOzeKU&usqp=CAU",
    "https://ordemparanormal.com.br/wp-content/uploads/elementor/thumbs/TRSlNehdWzs-HD-pd9dsqgt3ux1agpdi4sajm4vghgemwhq2abq0l3up6.jpg",
    "https://i.ytimg.com/vi/jo426LkONNc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfwVXHElSlpIs70a8UuLU8NVB3Pg"
  ];
  const listaLink = [
    "https://www.youtube.com/playlist?list=PL7ZwE005lvhrBCqdHc3zQKoqzkklKUhN0",
    "https://www.youtube.com/playlist?list=PL7ZwE005lvhoGkp88Ur7MBL3jXf4XqMjF",
    "https://www.youtube.com/playlist?list=PL7ZwE005lvhoeU1boBxblL0t_JL1B0Bfo",
    "https://www.youtube.com/playlist?list=PL7ZwE005lvhpwy5LoKj8FXi2MXtJyey54",
    "https://www.youtube.com/playlist?list=PLJ3A9Ntb1tg69P94-iQo0xCdgaBVX-ecu"
  ];
  const listaNome = ["A Ordem Paranormal", "O Segredo Na Floresta", "Ordem Paranormal: Desconjuração", "Ordem Paranormal: Calamidade", "O Segredo Na Ilha"];
  
  //Código para os RPGs pré-estabelecidos
  for (var i = 0; i < listaRPG.length; i++) {
    document.getElementById("imagem").innerHTML += `<figure><a href=${listaLink[i]}><img src=${listaRPG[i]}></a><figcaption>${listaNome[i]}</figcaption></figure>`;
  
  }
  //Código para inserir novos RPGs
  function Adicionar() {
    
    var imgRPG = document.getElementById("img-rpg").value;
    var linkRPG = document.getElementById("link-rpg").value;
    var nomeRPG = document.getElementById("nome-rpg").value;
    
    if (imgRPG == "" || linkRPG == "" || nomeRPG == "") {
      alert("Insira o link/nome!");
      return listaRPG.pop();
      return listaLink.pop();
    } else if (listaRPG.includes(imgRPG) || listaLink.includes(linkRPG)) {
       alert("A imagem e link já estão catalogados!");
    } else {
       listarRPGNaTela(linkRPG, imgRPG, nomeRPG);
    }
    document.getElementById("img-rpg").value = "";
    document.getElementById("link-rpg").value = "";
    document.getElementById("nome-rpg").value = "";
  }
  
  //Código para listar os elementos na página
  function listarRPGNaTela(linkRPG, imgRPG, nomeRPG) {
    
    listaRPG.push(imgRPG);
    listaLink.push(linkRPG);
    listaLink.push(nomeRPG);
    var a = (listaRPG.length && listaLink.length && listaNome).length
    
    for (i = 5; i <= (listaRPG.length && listaLink.length && listaNome).length; i++) {
      let elementoRPG = `<figure><a href=${linkRPG}><img src=${imgRPG}></a><figcaption>${nomeRPG}</figcaption></figure>`;
      document.getElementById("imagem").innerHTML += elementoRPG;
    }
  }
  
  //Código para remover os elementos na página
  function Remover() {
    if (listaRPG.length === 0 || listaLink.length === 0) {
      alert("Sem novos RPGs para remover");
    } else {
        document.getElementById("imagem").lastChild.remove();
        listaRPG.pop();
        listaLink.pop();
      }
    }