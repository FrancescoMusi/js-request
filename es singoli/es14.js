const fetch = require("node-fetch")

numeroEsercizio = 14

const es = () => {
  fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema

    //let negativi = resBody.data.filter(x => x < 0)

    let negativi = resBody.data.filter(x =>  {
      return x < 0
    })

    let zeri = resBody.data.filter(x =>  {
      return x == 0
    })

    let positivi = resBody.data.filter(x =>  {
      return x > 0
    })

    //andava contato, così ho diviso gli array
    //o faccio il foreach o conto lunghezza questi array

    let risultato = {
      "positivi": positivi.length,
      "negativi": negativi.length,
      "zeri": zeri.length
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