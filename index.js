let modo_noturno = false;

function ativarModoNoturno()
{
    document.documentElement.style.setProperty('--texto', 'var(--texto-noturno)');
    document.documentElement.style.setProperty('--fundo', 'var(--fundo-noturno)');
    document.documentElement.style.setProperty('--border', 'var(--border-noturno)');
    document.documentElement.style.setProperty('--link', 'var(--link-noturno)');

}
function desativarModoNoturno()
{
    document.documentElement.style.setProperty('--texto', '#0c0c0c');
    document.documentElement.style.setProperty('--fundo', '#f8f8f8');
    document.documentElement.style.setProperty('--border', '#cccccc');
    document.documentElement.style.setProperty('--link', '#5c5c5c');

}

function toggleModoNoturno()
{
    (modo_noturno) ? ativarModoNoturno() : desativarModoNoturno();
}

let btnModoNoturno = document.getElementById('btnModoNoturno');
    
btnModoNoturno.addEventListener('click', () => 
{
    modo_noturno = modo_noturno ? false : true;
    toggleModoNoturno();
});

// categoria selecionada
const categorias =
{
    Esportes: 0,
    Politica: 1,
    Cultura:  2
};

const manchetes = 
{
    Esportes: 
    [ 
        [
            "West Ham sinaliza com oferta de R$ 225 milhões pelo atacante Igor Jesus, do Botafogo",
            "Jogador é procurado por time da Premier League"
        ],

        [
            "Bola de Ouro 2024: Rodri é eleito o melhor jogador do mundo, e Vini Jr. é segundo",
            "Meio-campista do Manchester City quebra jejum de 64 anos da Espanha e desbanca atacante brasileiro do Real Madrid, apontado como favorito e ausente na cerimônia"
        ],

        [
            "Atleta Bruno Henrique é alvo de operação policial após indicios de manipulação de resultados (Xiiiii)",
            "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
        ],

        [
            "Raphinha do Barcelona se destaca em gols/assistências na Champions League",
            "Brasileiro é peça chave para o time de Hansi Flick",
            "imagens/raphinha.webp"
        ]
    ],
    Politica: 
    [ 

        [
            "Bola de Ouro 2024: Rodri é eleito o melhor jogador do mundo, e Vini Jr. é segundo",
            "Meio-campista do Manchester City quebra jejum de 64 anos da Espanha e desbanca atacante brasileiro do Real Madrid, apontado como favorito e ausente na cerimônia"
        ],

        [
            "Atleta Bruno Henrique é alvo de operação policial após indicios de manipulação de resultados (Xiiiii)",
            "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
        ],

        [
            "Atleta Bruno Henrique é alvo de operação policial após indicios de manipulação de resultados (Xiiiii)",
            "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
        ],

        [
            "EUA terminam contagem de delegados: Trump 312 X 226 Kamala",
            "Republicano venceu em todos os 7 Estados-pêndulo, inclusive no Arizona, o último a ter resultados divulgados na noite de sábado (9.nov.2024)",
            "imagens/trump.webp"
        ]
    ],
    Cultura: 
    [ 
        [
            "RESENHA: Ainda Estou Aqui é drama universal com Fernanda Torres brilhante",
            "Novo filme de Walter Salles tem técnica impecável e história emocionante"
        ],

        [
            "Milton Nascimento disputa o Grammy 2025, já com status de divindade, por álbum de jazz com Esperanza Spalding",
            "Longe de ser improvável, a vitória seria merecida para coroar a trajetória transcendental do artista"
        ],

        [
            "ENTREVISTA: Francis Ford Coppola fala sobre 'Megalópolis', falta de riscos em Hollywood e futuro do cinema",
            "'Hollywood quer apenas fazer dinheiro para pagar dívidas', diz diretor lendário de clássicos como 'O poderoso chefão' e 'Apocalypse now'. Leia entrevista"
        ],

        [
            "“Ainda Estou Aqui” estreia no Brasil com esperanças de indicação ao Oscar e aclamação internacional",
            "Filme é estrelado por Fernanda Torres, Selton Mello e conta com participação de Fernanda Montenegro",
            "imagens/ainda estou aqui.jpeg"
        ]
    ],
}

// alterar machetes dependendo da categoria

let titulo1 = document.getElementById("titulo1")
let titulo2 = document.getElementById("titulo2")
let titulo3 = document.getElementById("titulo3")

let titulo4 = document.getElementById("titulo4");

let subtitulo1 = document.getElementById("subtitulo1")
let subtitulo2 = document.getElementById("subtitulo2")
let subtitulo3 = document.getElementById("subtitulo3")

let subtitulo4 = document.getElementById("subtitulo4");

let imagem_destaque = document.getElementById("imagem-destaque")

let cat_atual = categorias.Esportes;

function atualizarManchetes()
{
    switch (cat_atual)
    {
        case categorias.Esportes:
            titulo1.innerText = manchetes.Esportes[0][0];
            titulo2.innerText = manchetes.Esportes[1][0];
            titulo3.innerText = manchetes.Esportes[2][0];

            titulo4.innerText = manchetes.Esportes[3][0];

            subtitulo1.innerText = manchetes.Esportes[0][1];
            subtitulo2.innerText = manchetes.Esportes[1][1];
            subtitulo3.innerText = manchetes.Esportes[2][1];

            subtitulo4.innerText = manchetes.Esportes[3][1];

            imagem_destaque.src = manchetes.Esportes[3][2];
            break;

        case categorias.Politica:
            titulo1.innerText = manchetes.Politica[0][0];
            titulo2.innerText = manchetes.Politica[1][0];
            titulo3.innerText = manchetes.Politica[2][0];

            titulo4.innerText = manchetes.Politica[3][0];

            subtitulo1.innerText = manchetes.Politica[0][1];
            subtitulo2.innerText = manchetes.Politica[1][1];
            subtitulo3.innerText = manchetes.Politica[2][1];
            
            subtitulo4.innerText = manchetes.Politica[3][1];

            imagem_destaque.src = manchetes.Politica[3][2];
            break;

        case categorias.Cultura:
            titulo1.innerText = manchetes.Cultura[0][0];
            titulo2.innerText = manchetes.Cultura[1][0];
            titulo3.innerText = manchetes.Cultura[2][0];

            titulo4.innerText = manchetes.Cultura[3][0];

            subtitulo1.innerText = manchetes.Cultura[0][1];
            subtitulo2.innerText = manchetes.Cultura[1][1];
            subtitulo3.innerText = manchetes.Cultura[2][1];
            
            subtitulo4.innerText = manchetes.Cultura[3][1];

            imagem_destaque.src = manchetes.Cultura[3][2];
            break;
        default:
            break;
    }
}

atualizarManchetes();

let btnEsportes = document.getElementById('btnEsportes');

btnEsportes.addEventListener('click', () => 
{
    cat_atual = categorias.Esportes;
    atualizarManchetes();
});

let btnPolítica = document.getElementById('btnPolítica');

btnPolítica.addEventListener('click', () => 
{
    cat_atual = categorias.Politica;
    atualizarManchetes();
});

let btnCultura = document.getElementById('btnCultura');

btnCultura.addEventListener('click', () => 
{
    cat_atual = categorias.Cultura;
    atualizarManchetes();
});