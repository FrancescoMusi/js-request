const fetch = require("node-fetch")

numeroEsercizio = 28

const es = () => {
  fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = {}

    for (let i = 0; i < resBody.data.negozio.length; i++) {
      risultato[resBody.data.negozio[i]] = resBody.data.magazzino.filter(e => e == resBody.data.negozio[i]).length
      //questa espresione crea un array con i dati voluti e conta la lunghezza
    }

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
      method: "post", 
      body: JSON.stringify({
        data: risultato
      }), 
      headers: { "Content-Type" : "application/json" },
    })
  })
  .then(res => res.json())
  .then(resBody => console.log(resBody))
  .catch(err => console.log(err))
}


es()