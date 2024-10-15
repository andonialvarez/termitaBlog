import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    const email = "colectivotermita@gmail.com";

    // Función para copiar el email al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("¡Correo electrónico copiado al portapapeles!");
            })
            .catch(err => {
                console.error("Error al copiar al portapapeles: ", err);
            });
    };

    return (
        <div className="about">
            <div className="articulo">
                <h1 style={{textDecoration: "underline", margin: "auto"}}>MANIFIESTO TERMITA</h1>
                <p>En 1962 Manny Farber publicaba Arte termita contra arte elefante blanco, texto esencial en el que dividía las obras de arte en estas dos categorías. Bajo el apelativo “arte termita”, el crítico cinematográfico buscó acoger las películas que exploran interminablemente su entorno, en constante disconformidad con los límites visibles. Un cine que mira sin nostalgia ni autocomplacencia lo recién fotografiado, que no celebra los logros pasados, solo los momentos. Un cine en eterno presente, indicial, cuyas formas se oponen a la “cultura de oropel”, a la excelencia de la obra maestra, al “arte elefante blanco”.</p>
                <p>Colectivo Termita nace de una posición compartida por pensar las imágenes y rescatar las ideas de Manny Farber para ponerse en valor, buscando un espacio propio desde el que reflexionar sobre el paradigma cinematográfico actual. Uno desde el que poder mirar el presente y al pasado e interrogarnos ante cualquier manifestación artística, sin atender a taxonomías ni pretensiones. En palabras de Walter Benjamin: “el crítico que narra los acontecimientos sin distinguir entre los grandes y los pequeños, da cuenta de la verdad: de nada de lo que una vez haya acontecido puede decirse que se ha perdido para la historia”. Este es uno de los principios en los que cimentamos la necesidad de una nueva crítica que reinterprete el discurso hegemónico. Así, en una actualidad en la que ciertas obras han conseguido trascender el binomio entre medio y tradición, el relato creado a su alrededor debería también luchar por encontrar nuevas caminos, desde donde miraríamos con otros ojos y situaríamos una incesante reescritura de la imagen.</p>
                <p>Estos escenarios conforman las bases sobre las que se cimenta la actividad del colectivo, focalizada en tres ámbitos: programación, creación y crítica. En primer lugar, la programación y comisariado de eventos conectados de manera fuerte con lo que se interroga a sí mismas, desde espacios que promuevan el diálogo y la reflexión en colectividad. En este sentido, trataremos de expandir los lugares de exhibición y hacer dialogar a las películas con ellas. Por otro lado, entendemos la práctica crítica como una puesta en forma del reflejo de Farber, creando un paralelo a nuestro ejercicio crítico. Un cine de lo pequeño, colectivo, un base con lo real, de plástico digital, autoproducido y ajeno a los ritmos industriales; una base de imágenes mínimas, capaz de asumir el azar y encontrarse con lo marginal.</p>
                <p>Finalmente y como centro de convergencia situamos la crítica, entendida como ejercicio de pensamiento colectivo y de compromiso con los lugares y eventos. Una crítica igualmente fluida, difusa, honesta, que apueste por las convicciones y los dogmatismos y que se disperse, que se atreva a dudar de sí misma. Que lance más interrogantes que conclusiones rotundas, que se proponga finalmente las formas y que camine de la mano de las imágenes, desconfiadas de sí mismas e inofensivas a la vez; que las abandone a lo largo de una vez, para no mirarlas desde arriba nunca más.</p>
                <p>Jonas Mekas, en su manifiesto con el cine de la intimidad, dice: “Estos tiempos de la enormidad, de las películas para el gran espectáculo, de producciones de cientos de millones de dólares, he tomado la palabra a favor de las pequeñas formas, de los actos invisibles del espíritu humano, sin sonidos, tan pequeñas que mueren en cuanto se las toca”. Desde Colectivo Termita defenderemos y apoyaremos estas pequeñas acciones. A través de nuestra práctica buscamos una línea de resistencia capaz de estimular a lectores y oyentes a formar parte del acto de creación cinematográfica, a cultivar un cine colectivo y político.</p>
                <p>Pero recordemos, este cine no será ni elitista ni industrial. No será de académicos, ni desde la verdad absoluta, sino desde el intento de servir como pasadores (aquí pasa el testigo) hacia Alain Bergala en La hipótesis del cine. Mekas sentenciaba: “De cada diez cineastas independientes de vanguardia a los años 60: Si se apaga nuestra última cámara Termita y vamos por el mundo contando sobre las bellezas de la creación, entonces recordad que deberíamos filmar con amigos difíciles y nunca pedir dinero como este instrumento”. Una cámara Super 8mm acaba de emitir un pequeño anuncio en algún lugar del Lower East Side de Nueva York, el mundo no volverá a ser el mismo.</p>
                <h3>FIN</h3>
            </div>
            
        </div>
    );
}
