
import Carousal from '../Components/Carousal'
import C1 from '../assets/C1.jpg'
import G1 from '../assets/G1.jpg'
import G5 from '../assets/G5.jpg'


const slides = [
  require('../assets/C1.jpg'),
  require('../assets/G1.jpg'),
  require('../assets/G5.jpg'),
  

];


export default function RootCarousal(){
  return(
    <main className="App">
      <div className="max-w-lg">
        <Carousal>
          {slides.map((s)=>(
            <img src={s} alt="/" />
          ))}
        </Carousal>
      </div>
    </main>
  )
}