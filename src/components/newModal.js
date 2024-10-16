// Importamos las bibliotecas necesarias de React y Firebase
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase'; // Configuración de Firebase

// Componente que representa un modal para añadir un nuevo artículo
const NewArticleModal = ({ showModal, setShowModal }) => {
  // Definimos varios estados para gestionar los valores del formulario
  const [titulo, setTitle] = useState(""); // Estado para el título del artículo
  const [subtitulo, setSubtitle] = useState(""); // Estado para el subtítulo del artículo
  const [category, setCategory] = useState(""); // Estado para la categoría seleccionada
  const [descripcion, setDescription] = useState(""); // Estado para la descripción del artículo
  const [conclusion, setConclusion] = useState(""); // Estado para la conclusión del artículo
  const [nota, setRating] = useState(""); // Estado para la calificación o nota del artículo
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías disponibles

  // useEffect se ejecuta cuando se muestra el modal para obtener las categorías desde Firestore
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Obtenemos los documentos de la colección "Categories" desde Firebase Firestore
        const querySnapshot = await getDocs(collection(db, "Categories"));
        
        // Mapeamos los datos obtenidos y los guardamos en el estado categories
        const categoriesData = querySnapshot.docs.map((doc) => doc.data());
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error); // Manejamos cualquier error al obtener las categorías
      }
    };

    // Solo llamamos a fetchCategories si el modal está visible
    if (showModal) {
      fetchCategories();
    }
  }, [showModal]); // Se ejecuta cada vez que showModal cambie

  // Función que se ejecuta cuando se envía el formulario para añadir un nuevo artículo
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitamos el comportamiento por defecto del formulario

    // Creamos un objeto con los datos del nuevo artículo
    const newArticle = {
      titulo,
      subtitulo,
      category,
      descripcion,
      conclusion,
      nota: parseFloat(nota), // Convertimos la nota a un número flotante
    };

    try {
      // Añadimos el nuevo artículo a la colección "Blogs" en Firestore
      await addDoc(collection(db, "Blogs"), newArticle);
      alert("Artículo añadido correctamente"); // Mostramos una alerta de éxito
      setShowModal(false); // Cerramos el modal al terminar
    } catch (error) {
      console.error("Error al añadir el artículo:", error); // Manejamos cualquier error al añadir el artículo
    }
  };

  // Renderizado del componente modal
  return (
    <>
      {showModal && ( // Solo mostramos el modal si showModal es verdadero
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Añadir nuevo artículo</h2>
            <form onSubmit={handleSubmit}> {/* Formulario para añadir el artículo */}
              
              <label>Título:</label>
              <input
                type="text"
                value={titulo}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Subtítulo:</label>
              <input
                type="text"
                value={subtitulo}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />

              <label style={{ marginBottom: "4vh" }}>Categoría:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecciona una categoría</option>
                {/* Mapeamos las categorías obtenidas de Firestore para crear las opciones del select */}
                {categories.map((cat, index) => (
                  <option key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <label>Descripción:</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <label>Conclusión:</label>
              <textarea
                value={conclusion}
                onChange={(e) => setConclusion(e.target.value)}
                required
              />

              <label>Nota (calificación):</label>
              <input
                type="number"
                value={nota}
                onChange={(e) => setRating(e.target.value)}
                required
              />

              {/* Botón para enviar el formulario */}
              <button type="submit" style={{ marginBottom: '1vh' }}>Añadir Artículo</button>
            </form>

            {/* Botón para cerrar el modal */}
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewArticleModal;