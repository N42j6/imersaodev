/*
    Função pesquisar():
    Essa função é responsável por realizar uma pesquisa e exibir os resultados na seção com o ID "resultados-pesquisa".
*/
function pesquisar() {
    /*
        Busca o elemento HTML com o ID "resultados-pesquisa" e armazena em uma variável.
        Esse elemento será utilizado para exibir os resultados da pesquisa.
    */
    let section = document.getElementById("resultados-pesquisa");
    console.log(section);

    // Não utilizar" campo-pesquisa", tendo em vista queo js não vai reconhecer o -pesquisa
    // Quanto se utiliza mais de uma palavra, a segunda consta com maiuscula
    // camelCase
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);
    //

    //se campoPesquisa for uma stg sem nada, 
    // um = atribui valor
    // dois == comparam com um valor
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


    /*
        Inicializa uma string vazia para armazenar os resultados da pesquisa.
        Essa string será preenchida com o HTML dos resultados e, posteriormente, atribuída ao elemento section.
    */
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    /*
        Itera sobre cada item (dado) da lista de dados.
        Para cada item, cria um novo elemento HTML com as informações do dado e adiciona à string de resultados.
    */
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa, então, faça.
        //cria um novo elemento
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank"> Mais informações. </a>
            </div>
        `;
        }
    }

    // utilizar ! para indicar que a condição é aquilo não existir.
if(!resultados){
resultados = "<p>Nada foi encontrado!</p>"
}



    /*
        Atribui o conteúdo da string "resultados" ao elemento section,
        atualizando a página com os resultados da pesquisa.
    */
    section.innerHTML = resultados;
}