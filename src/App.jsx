import React, { useState } from 'react';

const descripcionesSignos = {
  Aries: "Eres Aries, el carnero. Valiente, decidido y siempre dispuesto a tomar la iniciativa. Tu energía es contagiosa, pero a veces puedes ser impulsivo. ¡Eres un líder nato!",
  Tauro: "Eres Tauro, el toro. Confiable, práctico y terco como una roca. Amas la comodidad y la estabilidad, y tienes un gran aprecio por las cosas buenas de la vida.",
  Geminis: "Eres Géminis, los gemelos. Curioso, adaptable y siempre en busca de nuevas ideas. Tienes una mente ágil y disfrutas de la comunicación, aunque a veces eres un poco inconsistente.",
  Cancer: "Eres Cáncer, el cangrejo. Emocional, intuitivo y protector de tu hogar y seres queridos. Eres leal y empático, pero puedes ser sensible y pegajoso en ocasiones.",
  Leo: "Eres Leo, el león. Generoso, entusiasta y el alma de la fiesta. Te encanta ser el centro de atención y tienes un gran corazón, pero a veces puedes ser un poco vanidoso.",
  Virgo: "Eres Virgo, la virgen. Analítico, práctico y un perfeccionista nato. Te preocupas por los detalles y eres muy trabajador, aunque a veces puedes ser demasiado crítico contigo mismo y con los demás.",
  Libra: "Eres Libra, la balanza. Diplomático, justo y amante de la belleza. Buscas el equilibrio en todas las cosas y disfrutas de la compañía, pero a veces te cuesta tomar decisiones.",
  Escorpio: "Eres Escorpio, el escorpión. Apasionado, misterioso y con una gran fuerza de voluntad. Eres leal y protector con los tuyos, pero puedes ser celoso y reservado.",
  Sagitario: "Eres Sagitario, el arquero. Aventurero, optimista y amante de la libertad. Siempre estás en busca de nuevas experiencias y conocimientos, pero a veces eres un poco irresponsable.",
  Capricornio: "Eres Capricornio, la cabra. Responsable, disciplinado y ambicioso. Trabajas duro para alcanzar tus metas y valoras la tradición, aunque a veces puedes ser un poco pesimista.",
  Acuario: "Eres Acuario, el portador de agua. Original, independiente y humanitario. Te preocupas por el futuro y eres un pensador innovador, aunque a veces puedes ser distante y excéntrico.",
  Piscis: "Eres Piscis, los peces. Compasivo, artístico y soñador. Tienes una gran intuición y eres muy empático, pero a veces puedes ser un poco ingenuo y evasivo."
};

// Objeto para mapear el nombre del signo a la ruta de tu imagen
const rutasSignos = {
  Aries: '/img/signos/aries.jpg',
  Tauro: '/img/signos/tauro.jpg',
  Geminis: '/img/signos/geminis.jpg',
  Cancer: '/img/signos/cancer.jpg',
  Leo: '/img/signos/leo.jpg',
  Virgo: '/img/signos/virgo.jpg',
  Libra: '/img/signos/libra.jpg',
  Escorpio: '/img/signos/escorpio.jpg',
  Sagitario: '/img/signos/sagitario.jpg',
  Capricornio: '/img/signos/capricornio.jpg',
  Acuario: '/img/signos/acuario.jpg',
  Piscis: '/img/signos/piscis.jpg',
};


function App() {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState(''); // Formato dd/mm/aaaa
  const [signo, setSigno] = useState(null);
  const [descripcion, setDescripcion] = useState('');
  const [rutaImagenSigno, setRutaImagenSigno] = useState('');

  // Función para calcular el signo zodiacal
  const calcularSigno = (dia, mes) => {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return 'Aries';
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return 'Tauro';
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return 'Geminis';
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return 'Cancer';
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return 'Leo';
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return 'Virgo';
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return 'Libra';
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return 'Escorpio';
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return 'Sagitario';
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return 'Capricornio';
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return 'Acuario';
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return 'Piscis';
    return null; // Si la fecha no es válida
  };

  const handleConsultar = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const partesFecha = fechaNacimiento.split('/');
    if (partesFecha.length === 3) {
      const dia = parseInt(partesFecha[0], 10);
      const mes = parseInt(partesFecha[1], 10); // Meses de 1 a 12

      if (isNaN(dia) || isNaN(mes) || dia < 1 || dia > 31 || mes < 1 || mes > 12) {
        alert('Por favor, ingresa una fecha válida en formato dd/mm/aaaa.');
        setSigno(null);
        setDescripcion('');
        setRutaImagenSigno('');
        return;
      }

      const signoCalculado = calcularSigno(dia, mes);
      setSigno(signoCalculado);

      if (signoCalculado) {
        setDescripcion(descripcionesSignos[signoCalculado]);
        setRutaImagenSigno(rutasSignos[signoCalculado]);
      } else {
        setDescripcion('No se pudo determinar el signo zodiacal.');
        setRutaImagenSigno('');
      }
    } else {
      alert('Por favor, ingresa la fecha en formato dd/mm/aaaa.');
      setSigno(null);
      setDescripcion('');
      setRutaImagenSigno('');
    }
  };

  return (
    <>
      <h1>Horóscopo React</h1>
      
      <div className="container">
        {/* Cuadro de entrada de datos */}
        <div className="card">
          <h2>Ingresa tus datos</h2>
          <form onSubmit={handleConsultar}>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre:"
              required
            />

            <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input
              type="text" 
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(e) => setFechaNacimiento(e.target.value)}
              placeholder="dd/mm/aaaa"
              required
            />

            <button type="submit">Consultar Signo</button>
          </form>
        </div>

        {/* Cuadro de resultados del signo */}
        <div className="card signo-info">
          <h2>Tu signo es: {signo || 'Desconocido'}</h2>
          
          {rutaImagenSigno && (
            <img src={rutaImagenSigno} alt={`Imagen de ${signo}`} />
          )}

          {nombre && signo && (
            <h3>{nombre}:</h3>
          )}
          
          {descripcion && (
            <p>{descripcion}</p>
          )}

          {!signo && <p>Ingresa tus datos para descubrir tu signo.</p>}
        </div>
      </div>
    </>
  );
}

export default App;
