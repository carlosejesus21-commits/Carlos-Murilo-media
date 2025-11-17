import { useEffect, useState } from 'react'
import styles from './App.module.css'

function App() {
 const [n1, setN1] = useState()
 const [n2, setN2] = useState()
 const [n3, setN3] = useState()
 const [n4, setN4] = useState()
 const [n5, setN5] = useState()
 const [n6, setN6] = useState()
 const[respMedia, setRespMedia] = useState()

 const[error, setError] = useState('')
 

 useEffect(() => {
    if(n1 !== undefined && n2 !== undefined && !isNaN(n1) && !isNaN(n2) && n3 !==undefined && n4 !== undefined && !isNaN(n3) && !isNaN(n4) && n5 !==undefined && n6 !==undefined && !isNaN(n5) && !isNaN(n6)){
  setRespMedia(parseFloat(n1) + parseFloat(n2) + parseFloat(n3) + parseFloat(n4) + parseFloat(n5) + parseFloat(n6) / 6)
  setError('')
  }else{
  setError('Digite valores numericos')    
  }
 }, [n1, n2, n3, n4, n5, n6])

  return (
    <>
      <h1 className={styles.title}>Calculadora</h1>
      <p>Digite valores númericos para calcular</p>
      <div className={styles.wrap}>
        <input type="number" onChange={(e) => setN1(e.target.value)}value={n1} placeholder='Insira um numero'/>
        <input type="number" onChange={(e) => setN2(e.target.value)}value={n2} placeholder='Insira outro numero'/>
        <input type="number" onChange={(e) => setN3(e.target.value)} value={n3} placeholder='insira outro numero' />
        <input type="number" onChange={(e) => setN4(e.target.value)} value={n4} placeholder='insira outro numero' />
        <input type="number" onChange={(e) => setN5(e.target.value)} value={n5} placeholder='insira outro numero' />
        <input type="number" onChange={(e) => setN6(e.target.value)} value={n6} placeholder='insira outro numero' />
      </div>
    <div className={styles.wrapResps}>
      <h2>Resultado</h2>
      <h3>{respMedia}</h3>
    </div>

    </>
  )
}

export default App
