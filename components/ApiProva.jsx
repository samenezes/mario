import {useState} from 'react'


const [setProva] = useState('')

function fetchProva() {
  
    fetch('https://opentdb.com/api.php?amount=30&category=15')
    
    .then(response => response.json())
    
    .then(Prova => {
        console.log(Prova.data)
        setProva(Prova.data);
    })
}

return (
    <>

    
        <h1 className = "Cabecalho">Prova B FRAMEWORK</h1>
        <button onClick={fetchProva}>fetch Prova</button>
        <h2 className = "Rodape">Mario Eduardo 3C2</h2>
    

    </>
  )


