// precisamos criar duas variáveis no JS para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon');
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

// vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémon

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.aberto');

        cartaoPokemonAberto.classList.remove('aberto');

        // ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar 

        const idPokemonSelecionado = pokemon.attributes.id.value;

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado);

        cartaoPokemonParaAbrir.classList.add('aberto');
    
        // remover a classe ativo que marca o pokémon selecionado

        const cartaoPokemonAtivo = document.querySelector('.ativo');

        cartaoPokemonAtivo.classList.remove('ativo');

        // adicionar a classe ativo no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)

        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
});

