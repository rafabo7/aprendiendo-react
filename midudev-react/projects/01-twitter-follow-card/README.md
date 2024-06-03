# 01-twitter-follow-card

Primer ejercicio de react del curso de midudev.
Imitar los botones de twitter aprendiendo así los primeros pasos de react.

Los conceptos tratados en esta primera parte fueron:
¿Qué es React y por qué se creó?
React es una librería que sirve para crear de manera sencilla y declarativa interfaces de usuario.

Fue creada por Facebook ya que sus desarrolladores tenían muchas dificultades para mantener o actualizar el código de sus componentes (aunque por aquél entonces no se llamaban componentes). Esto se se debía a que manipular el DOM y mantener o actualizar las funcionalidades de Facebook con Javascript era un dolor de cabeza y de ojos.

Por ellos se creó React, que componetizó la UI de Facebook haciendo que la apariencia y las funcionalidades de sus elementos de UI estuvieran juntas en un mismo... componente!

Esto fue posible gracias a JSX, que por lo que he entendido es una especia de flavour de Jasacript que React entiende y compila. La principal virtud de JSX es que se puede escribir junto, en el mismo archivo, el HTML y el Javascript, haciendo entonces que los elementos del DOM y su script sean una misma cosa.

Hoy en día se considera React como un framework, pero es porque el crecimiento que ha tenido lo ha dotado y combinado de  y con otras muchas herramientas que de momento no entiendo, pero que pronto entenderé, que lo convierten en una manera de hacer no solamente la UI de una webapp, sino mucho más.

React utiliza algo que se llama el DOM Virtual, que es, digamos, una especia de copia del DOM renderizado. Cuando un componente cambia debido al efecto de un useState() el componente se actualiza, entonces React aplica esa actualización a su DOM Virutal y compara si ha cambiado en algo su contendio renderizado, actualizando sólo el DOM real que es necesario y si es necesario.

Personalmente encuentro que React es un pedazo de invento. Tan solo unas horas llevo aprendiendo y ya soy consciente de las facilidades que ofrece, sobre todos después de hacer bastantes proyectos en los que el Javascript tenía que manipular, obtener información y actualizar los elementos del DOM
