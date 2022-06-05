window.onload = function()
{
    const listaProdutos = document.querySelector("#produtos");
    const minhaLista = document.querySelector("#cestaDoCliente")
    const mamao = document.querySelector("#mamao");
    const laranja = document.querySelector("#laranja");
    const manga = document.querySelector("#manga");
    const melao = document.querySelector("#melao");
    const melancia = document.querySelector("#melancia");
    const totalPreco = document.querySelector("#mostraTotalCompra");


    let frutas = ["Mamão Papaia", "Laranja", "Manga", "Melão", "Melancia"];
    let precos = [ 7.50, 10, 4.5, 5, 9.60];

    let mamaoApertado = 0;
    let laranajaApertada = 0;
    let mangaApertada = 0;
    let melaoApertado = 0;
    let melanciaApertada = 0;
    let juntarPreco = 0;


    function inserirItemNaLista(variavel, numeroFruta, numeroPreco)
    {
        
        if(variavel == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[numeroFruta];
            juntarPreco = juntarPreco + precos[numeroPreco];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        }
    }

    mamao.addEventListener("click", function()
    {


       /*  if(mamaoApertado == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[0];
            juntarPreco = juntarPreco + precos[0];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        } */

        inserirItemNaLista(mamaoApertado, 0, 0);
        mamaoApertado =1; 
    })
    laranja.addEventListener("click", function()
    {
        /* if(laranajaApertada == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[1];
            juntarPreco = juntarPreco + precos[1];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        } */
        inserirItemNaLista(laranajaApertada, 1, 1);
        laranajaApertada = 1;
    })
    manga.addEventListener("click", function()
    {/* 
         if(mangaApertada == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[2];
            juntarPreco = juntarPreco + precos[2];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        } */
        inserirItemNaLista(mangaApertada, 2, 2);
        mangaApertada = 1;
    })
    melao.addEventListener("click", function()
    {
        /* if(melaoApertado == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[3];
            juntarPreco = juntarPreco + precos[3];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        } */
        inserirItemNaLista(melaoApertado, 3, 3);
        melaoApertado = 1;
    })
    melancia.addEventListener("click", function()
    {
       /*  if(melanciaApertada == 0)
        {
            let li = document.createElement("li")
            minhaLista.appendChild(li).textContent = frutas[4];
            juntarPreco = juntarPreco + precos[4];
            totalPreco.value = `R$ ${juntarPreco}`;
        }
        else
        {
            alert("Este item já está em sua cesta");
        } */
        inserirItemNaLista(melanciaApertada, 4, 4);
        melanciaApertada = 1;
    })
}