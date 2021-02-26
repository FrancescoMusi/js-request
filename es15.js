const fetch = require("node-fetch")

numeroEsercizio = 15

const es = () => {
  fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(parola => {
      if (parola.length % 2 == 0) {
        return parola.toUpperCase()
      }
      return parola.toLowerCase()
    })


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