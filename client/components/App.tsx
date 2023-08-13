import Dog from './Dog.tsx'
import Subtitle from './Subtitle.tsx'

function App() {
  return (
    <div className="container">
      <img
        className="spinner"
        alt="a spinning paw-print"
        src="/images/paw.png"
      />
      <Subtitle text="Canines using super-canine abilities for social good." />
      <Dog name="Desdemona" breed="Bulldog" superpower="Heat vision" image="/images/bulldog.png" />
      <Dog name="Thor" breed="bull-terrier" superpower="Invisible" image="/images/bull-terrier.png" />
      <Dog name="Rex" breed="dachshund" superpower="Super Speed" image="/images/dachshund.png" />
    </div>
  )
}

export default App
