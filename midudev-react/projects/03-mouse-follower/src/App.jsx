import { useState, useEffect } from 'react'

// Se declara el componente

function App() {
  // Se declara el useState:
    // Como ya vimos: al devolver un array de dos posiciones se puede desestructurar de la siguiente manera
    // La primera posición del array es el valor - La segunda posición es la forma de cambiar 
                                                    // Se usa como si fuera un método (?)
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState( { x: 0, y: 0})

  // Se declara y entra en juego el useEffect.
  // useEffect es como un método que toma dos argumentos.
      // 1. El primer argumento es el bloque de código que se tiene que ejecutar si cambias las dependencias.
      //    Inciso: en este contexto dependencias signfica cualquier variable (en principio de cualquier tipo).
      // 2. El segundo argumento de useEffect es un array listando las dependencias que se tienen que observar
      //  para ejecutar o no el bloque de código del primer parámetro. Si no se especifican dependencias, dicho
      //  bloque de código se ejecuta solo la primera vez que se renderiza el componente.
  useEffect(() => {

    //console.log('Is enabled: ' + enabled)

    // Se declara la función vinculada al eventListener
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition( { x: clientX, y: clientY})

    }
    // Se comprueba si el estado enabled es true o false
    if (enabled) {
      // Se añade el eventListener
      window.addEventListener('pointermove', handleMove)
    }

    // Lo que se sigue a continuación se conoce como 'cleanup'. Aunque pone return, useEffect no devuelve nada.
    //  en este caso devuelve una función anónima que se ejecutará...
    // El cleanup se ejecuta:
    //    a. Cuando el componente se desmonta 
    //    b. Cuando cambian las depencias ¡antes de ejecutar el efecto de nuevo.
    return () => {

      // En nuestro caso, siempre que cambian las dependencias, es decir, el estado enabled, se elimina 
      // este evento. Posteriormente se ejecuta el efecto. Ya que hemos incluido un control, sólo se volverá a 
      // añadir el efecto si enabled es true
      window.removeEventListener('pointermove', handleMove)
    }
  }, 
    // A continuación se especifican las depencias a observar
    // [] => cuando se monta el componente
    // [enabled] => cuando se monta el componente o cambia el valor de enabled
    // undefined (sin especificar) => cada vez que se renderiza el componete
    [enabled])

  useEffect( () => {
    document.body.classList.toggle('no-cursor', enabled)
    const button = document.querySelector('button')
    button.classList.toggle('no-cursor', enabled)
    

    return () => {
      document.body.classList.remove('no-cursor')
      button.classList.remove('no-cursor')

}
  })

  useEffect( () => {
    document.body.classList.toggle('no-cursor', enabled)
    const button = document.querySelector('button')
    button.classList.toggle('no-cursor', enabled)
    

    return () => {
      document.body.classList.remove('no-cursor')
      button.classList.remove('no-cursor')

}
  }, [enabled])

  return (
    <main >
      <div className={ enabled ? 'on' : 'off'} style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: '0.8',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`,
        overflow: 'hidden'
      }}/>

      <button onClick={ ()=> setEnabled(!enabled) }
      >{enabled ? 'Desactivar' : 'Activar'} seguir el puntero
      </button>
    </main >
    
  )
}

export default App