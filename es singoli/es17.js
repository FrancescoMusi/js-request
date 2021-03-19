const fetch = require("node-fetch")

numeroEsercizio = 17

const es = () => {
  fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //RISOLUZIONE DEL PROBLEMA - crea la stringa 
    //resbody è un json quindi con .data ottengo l'array voluto
    let risultato = resBody.data.reduce((acc, e) => {
      return acc + e.slice(-1) //uguale a e[e.length - 1]
    }, "") 

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