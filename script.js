/*write later*/let zinas = document.querySelector('.chataZinas');
/*write later*/let zina = document.querySelector('.manaZina');
/*write later*/let vards = document.querySelector('.vards');


function sutitZinu()
{
    //alert(1)
    console.log('sutitZinu() ir palaists')

    //document.querySelector('.chataTeksti').innerHTML = 'hello'
    //zinas.innerHTML = zinas.innerHTML+'hello'+'<br />'

    /*later add if*/
    if(vards.value == '' || zina.value == '')
    {
        alert('Nav ievadīts vārds vai ziņa');
    }
    else
    {
        zinas.innerHTML = zinas.innerHTML + zina.value + '<br />'

        /*later*/fetch('https://chatserver.armandspucs.repl.co/sutit?zina='+zina.value+'&vards='+vards.value);
    }

}

/* bonus funkcija ziņu sūtīšana ar POST metodi */
async function sutitZinuPost()
{

    let requestBodyJson = {"vards": "Janis", "zina": "Cau" };
    let requestBodyString = JSON.stringify(requestBodyJson);


    let request = await fetch('https://chatserver.armandspucs.repl.co/sutit_post',
    {
    method:"POST",
    headers:
        {
        'X-API-KEY': 'asd',
        'Content-Type': 'application/json'
        },
    body:requestBodyString
    });

    let atbilde = await request.text();
    console.log(atbilde);

}
//sutitZinuPost();


async function ieladetChataZinas()
{
    let datiNoServera = await fetch('chatazinas.txt');
    let dati = await datiNoServera.text();
    zinas.innerHTML = await dati;
}
//ieladetChataZinas();



async function ieladetChataZinasJson()
{
    let datiNoServera = await fetch('https://chatserver.armandspucs.repl.co/lasit'); //chatazinas.json
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

    zinas.scrollTop = zinas.scrollHeight;

}
//ieladetChataZinasJson();

setInterval(ieladetChataZinasJson, 1000)

