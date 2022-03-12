/*write later*/let teksti = document.querySelector('.chataTeksti');
/*write later*/let zina = document.querySelector('.zina');


function sutitZinu()
{
    //alert(1)
    console.log('sutitZinu() ir palaists')

    //document.querySelector('.chataTeksti').innerHTML = 'hello'
    //teksti.innerHTML = teksti.innerHTML+'hello'+'<br />'

    teksti.innerHTML = teksti.innerHTML + zina.value + '<br />'

}


async function ieladetChataTekstus()
{
    let datiNoServera = await fetch('chataTeksti.txt');
    let dati = await datiNoServera.text();
    teksti.innerHTML = await dati;
}

ieladetChataTekstus();

