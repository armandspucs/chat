/*write later*/let zinas = document.querySelector('.chataZinas');
/*write later*/let zina = document.querySelector('.manaZina');


function sutitZinu()
{
    //alert(1)
    console.log('sutitZinu() ir palaists')

    //document.querySelector('.chataTeksti').innerHTML = 'hello'
    //zinas.innerHTML = zinas.innerHTML+'hello'+'<br />'

    zinas.innerHTML = zinas.innerHTML + zina.value + '<br />'

}


async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text();
    zinas.innerHTML = await dati;
}
//ieladetChataZinas();



async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch('chatazinas.json');
    let dati = await datiNoServera.json();
    //zinas.innerHTML = await dati;
    //console.log( await dati.length );

    zinas.innerHTML = '';

    i = 0 //let i
    while (i < await dati.length)
    {
        console.log(dati[i]['zina']);

        zinas.innerHTML = zinas.innerHTML+'<b>'+dati[i]['vards']+':</b> '+dati[i]['zina']+'<br />';
        i++;
    }

}
ieladetChataZinasJson();

