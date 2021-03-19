const fetch = require("node-fetch")

numeroEsercizio = 13

const es = () => {
  fetch("http://localhost:8080/esercizi/" + numeroEsercizio, {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map((e, i , arr) => (i <= arr.length - 2) ? (e + arr[i+1]) : e)

    /*
    let risultato = resBody.data.map((e, i , arr) => {
      if (i <= arr.length - 2) {
        return e + arr[i+1]
      }
      return e
    }) 
    */
    


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