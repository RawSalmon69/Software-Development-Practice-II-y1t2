import styles from './page.module.css'
import Banner from '@/components/Banner'
import Card from '@/components/Card'

export default function Home() {
  return (
    <main>
        <Banner/> 
        <div style={{margin: "20px", display:"flex", flexDirection:"row", alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
          <Card hospitalName='chula' imgSrc='/img/chula.jpg'/>
          <Card hospitalName='thammasat' imgSrc='/img/thammasat.jpg'/>
          <Card hospitalName='rajavithi' imgSrc='/img/rajavithi.jpg'/>
        </div>
    </main>
  )
}
