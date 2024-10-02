import Card from './Card';
import './App.css'; // Si tienes estilos generales

function App() {
  return (
    <div className="App">
      <h1>Cartas del tarot</h1>
      <div className="card-container">
        <Card
          title="Arcana de la muerte"
          description="En el momento en que el hombre devoró el fruto del conocimiento, selló su destino... Al confiar su futuro a las cartas, el hombre se aferra a una vaga esperanza. Sí, los Arcanos son el medio por el cual todo se revela... Más allá de los caminos trillados se encuentra el fin absoluto. No importa quién seas... La muerte te espera."
          image="https://static.wikia.nocookie.net/megamitensei/images/d/df/Death-0.png/revision/latest/scale-to-width-down/250?cb=20160404202413" // Usa tu propia imagen aquí
        />
        <Card
          title="Arcana del loco"
          description="El Arcano del Loco no significa que pueda tomarse a la ligera. El Loco es el número cero. Es el vacío desde el que comienzan todas las demás cosas."
          image="https://static.wikia.nocookie.net/megamitensei/images/5/53/Fool-0.png/revision/latest?cb=20160404201043" // Usa tu propia imagen aquí
        />
      </div>
    </div>
  );
}

export default App;
