const fetch = require("node-fetch")




const accreditamento = () => {
  fetch("http://localhost:8080/accreditamento", {
    method: "post", 
    body: JSON.stringify({nome: "Francesco Musi"}), 
    headers: { "Content-Type" : "application/json" },
  })
  .then(res => res.json()) 
  .then(es => console.log(es))
  .catch(err => console.log(err))
  
}





const es1 = () => {
  fetch("http://localhost:8080/esercizi/1", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.toLowerCase()

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/1", {
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





const es2 = () => {
  fetch("http://localhost:8080/esercizi/2", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = Math.pow(resBody.data, 2)

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/2", {
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




const es3 = () => {
  fetch("http://localhost:8080/esercizi/3", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.cognome

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/3", {
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





const es4 = () => {
  fetch("http://localhost:8080/esercizi/4", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.length

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/4", {
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




const es5 = () => {
  fetch("http://localhost:8080/esercizi/5", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(e => e.toUpperCase());

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/5", {
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





const es6 = () => {
  fetch("http://localhost:8080/esercizi/6", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.reduce((previous, next) => {
      return previous + next;
    });

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/6", {
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





const es7 = () => {
  fetch("http://localhost:8080/esercizi/7", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.reduce((previous, next) => {
      if (next > 5) {
        return previous + next;
      }

      return previous 
    });

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/7", {
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





const es8 = () => {
  fetch("http://localhost:8080/esercizi/8", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let c = 0
    let risultato = resBody.data.reduce((previous, next) => {
      c++
      if (c % 2 == 0) {
        return previous + next;
      }

      return previous 
    });

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/8", {
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





const es9 = () => {
  fetch("http://localhost:8080/esercizi/9", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.reduce((acc, e) => {
      if (e % 2 != 0) {
        return acc + e;
      }

      return acc 
    }, 0); //se non metto che parte da 0 parte dal primo numero della lista
    

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/9", {
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





const es10 = () => {
  fetch("http://localhost:8080/esercizi/10", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.sort()


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/10", {
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






const es11 = () => {
  fetch("http://localhost:8080/esercizi/11", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(e => e.toLowerCase()).sort()


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/11", {
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





const es12 = () => {
  fetch("http://localhost:8080/esercizi/12", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(x => x - 1)


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/12", {
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





const es13 = () => {
  fetch("http://localhost:8080/esercizi/13", {
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

    return fetch("http://localhost:8080/esercizi/13", {
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







const es14 = () => {
  fetch("http://localhost:8080/esercizi/14", {
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

    return fetch("http://localhost:8080/esercizi/14", {
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






const es15 = () => {
  fetch("http://localhost:8080/esercizi/15", {
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

    return fetch("http://localhost:8080/esercizi/15", {
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







const es16 = () => {
  fetch("http://localhost:8080/esercizi/16", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.join(" ")


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/16", {
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







const es17 = () => {
  fetch("http://localhost:8080/esercizi/17", {
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

    return fetch("http://localhost:8080/esercizi/17", {
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





const es18 = () => {
  fetch("http://localhost:8080/esercizi/18", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = ""
    resBody.data.forEach(parola => {
      if (parola.length > 4) {
        risultato += parola[0]
      }
    })


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/18", {
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






const es19 = () => {
  fetch("http://localhost:8080/esercizi/19", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = []

    for (let i = 0; i <= resBody.data; i++) {
      if (resBody.data % i == 0) {
        risultato.push(i)
      }
    }


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/19", {
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






const es20 = () => {
  fetch("http://localhost:8080/esercizi/20", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(dictionary => {
      return dictionary.figli.length
    })


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/20", {
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






const es21 = () => {
  fetch("http://localhost:8080/esercizi/21", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.filter(n => {
      return n<=5
    })

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/21", {
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





const es22 = () => {
  fetch("http://localhost:8080/esercizi/22", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.filter(n => {
      if (n <= 6 && n >= 3) {
        return n
      }
    })


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/22", {
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






const es23 = () => {
  fetch("http://localhost:8080/esercizi/23", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = 0
    resBody.data.forEach(dictionary => {
      risultato += dictionary.anni
    })


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/23", {
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






const es24 = () => {
  fetch("http://localhost:8080/esercizi/24", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = []

    resBody.data.forEach(dictionary => {
      if (dictionary.cognome[0] == "C") {
        risultato.push(dictionary.nome)
      } 
    })


    //stampa il risultato ottenuto
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/24", {
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






const es25 = () => {
  fetch("http://localhost:8080/esercizi/25", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = 0
    resBody.data.forEach(stringa => {
      for (let i = 0; i < stringa.length; i++){
        if (stringa[i] == "a") {
          risultato++
        }
      }
    })


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/25", {
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







const es26 = () => {
  fetch("http://localhost:8080/esercizi/26", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = resBody.data.map(n => {
      return -n
    })

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/26", {
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






const es27 = () => {
  fetch("http://localhost:8080/esercizi/27", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = []

    resBody.data.negozio.forEach(e => {
      if (!risultato.includes(e)) {
        risultato.push(e)
      }
    })       
    
    resBody.data.magazzino.forEach(e => {
      if (!risultato.includes(e)) {
        risultato.push(e)
      }
    })    

    risultato.sort()
    

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/27", {
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







const es28 = () => {
  fetch("http://localhost:8080/esercizi/28", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = {}

    
    for (let i = 0; i < resBody.data.negozio.length; i++) {
      risultato[resBody.data.negozio[i]] = resBody.data.magazzino.filter(e => e == resBody.data.negozio[i]).length + resBody.data.negozio.filter(e => e == resBody.data.negozio[i]).length
      //questa espresione crea un array con i dati voluti e conta la lunghezza
    }

    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/28", {
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






const es29 = () => {
  fetch("http://localhost:8080/esercizi/29", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let risultato = 1

    for (let i = 1; i <= resBody.data; i++) {
      risultato *= i
    }


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/29", {
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







const es30 = () => {
  fetch("http://localhost:8080/esercizi/30", {
  method: "get", 
  headers: { "x-data" : "true" },
  })
  .then(res => res.json()) 
  .then(resBody => {
    console.log(resBody)

    //risoluzione problema
    let rows = resBody.data.split("\n")
    let h = rows.length
    let w = rows[0].length
    
    let risultato = {}

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (rows[y][x] == "X") {
          risultato.x = x
          risultato.y = y
        }
      }
    }


    //stampa il risultato ottenuto 
    console.log(risultato)

    return fetch("http://localhost:8080/esercizi/30", {
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








accreditamento()
es1()
es2()
es3()
es4()
es5()
es6()
es7()
es8()
es9()
es10()
es11()
es12()
es13()
es14()
es15()
es16()
es17()
es18()
es19()
es20()
es21()
es22()
es23()
es24()
es25()
es26()
es27()
es28()
es29()
es30()




/*
1 Data una parola maiuscola restituiscila minuscola
2 Dato un numero restituiscilo moltiplicato per se stesso
3 Dato un dictionary restituisci il valore alla chiave 'cognome'
4 Data una lista restituisci la sua lunghezza
5 Data una lista di parole invia una lista contenente le stesse parole tutte maiuscole
6 Data una lista di numeri restituiscine la somma
7 Data una lista di numeri restituisci la somma dei numeri maggiori di 5
8 Data una lista di numeri restituisci la somma dei numeri in posizioni pari (zero compreso)
9 Data una lista di numeri restituisci la somma dei numeri dispari
10 Data una lista di parole ordinale in ordine alfabetico
11 Data una lista di parole ordinale in ordine alfabetico e restituiscile tutte minuscole (attenzione, le parole possono avere delle lettere maiuscole)
12 Data una lista di numeri restituiscine una contenente i numeri precedenti a quelli dati; es: [3, 5, 2] ---> [2, 4, 1]
13 Data una lista di numeri restituiscine una in cui ogni numero sia sommato con quello alla posizione successiva; l'ultimo numero della lista rimane invariato
14 Data una lista di numeri, conta i positivi, i negativi e gli zeri e restituisci un dictionary che riporti i dati rilevati con le seguenti chiavi: "positivi", "negativi", "zeri"
15 data una lista di parole, restituisci una nuova lista in cui le parole con un numero di lettere pari siano scritte in maiuscolo e le altre in minuscolo
16 data una lista di parole, restituisci una sola stringa che contenga tutte le parole della lista separate da uno spazio. ATTENZIONE: l'ultima parola non deve essere seguita da uno spazio
17 data una lista di parole, restituisci una sola stringa formata dall'ultimo carattere di ogni parola
18 data una lista di parole, restituisci una sola stringa formata dal primo carattere di ogni parola più lunga di 4 caratteri
19 Dato un numero restituisci una lista contenente tutti i suoi divisori ordinati in ordine crescente
20 Dato una lista di persone restituisci una lista contenente il numero di figli di ciascuna persona
21 Data una lista di numeri restituisci una lista in cui siano esclusi tutti i valori maggiori di 5
22 Data una lista di numeri restituiscine una in cui ci siano presenti solo i valori compresi tra 3 e 6 inclusi
23 Data una lista di persone restituisci il numero derivato dalla somma di tutti i loro anni
24 Data una lista di persone restituisci una lista di nomi di tutte le persone che hanno un cognome che inizia per C
25 data una lista di stringhe restituisci il numero di "a" che compaiono in totale
26 data una lista di numeri restituisci una lista in cui tutti i positivi siano negativi e viceversa
27 dato un dictionary contenente le chiavi "negozio" e "magazzino", restituisci una lista formata da tutti i prodotti di entrambe le liste non ripetuti e ordinati alfabeticamente
28 dato un dictionary contenente le chiavi "negozio" e "magazzino", restituisci un dictionary nel quale la chiave sia il nome di ciascun prodotto DEL NEGOZIO e il valore sia il numero di pezzi di quel prodotto presenti SIA NEL NEGOZIO CHE NEL MAGAZZINO
29 dato un numero calcolane il fattoriale
30 data una mappa costituita da una stringa di varie righe, trova le coordinate della posizione del tesoro (reppresentata dal carattere X) e restituiscile in un dictionary alle chiavi "x" e "y"
*/