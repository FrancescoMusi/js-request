const fetch = require("node-fetch")

fetch("http://localhost:8080/accreditamento", {
  method: "post", 
  body: JSON.stringify({nome: "Francesco Musi"}), 
  headers: { "Content-Type" : "application/json" },
})
.then(res => res.json()) 
.then(es => console.log(es))
.catch(err => console.log(err))
