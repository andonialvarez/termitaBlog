import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../firebase'; // Configuración de Firebase

const NewArticleModal = ({ showModal, setShowModal }) => {
  const [titulo, setTitle] = useState("");
  const [subtitulo, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [descripcion, setDescription] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [nota, setRating] = useState("");
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías

  // Obtener las categorías desde Firestore
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Categories")); // Asegúrate de que la colección existe
        const categoriesData = querySnapshot.docs.map((doc) => doc.data()); // Obtener datos de las categorías
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };

    if (showModal) {
      fetchCategories();
    }
  }, [showModal]);

  // Función para añadir el nuevo artículo
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newArticle = {
      titulo,
      subtitulo,
      category,
      descripcion,
      conclusion,
      nota: parseFloat(nota),
    };

    try {
      await addDoc(collection(db, "Blogs"), newArticle); // Añadir el nuevo artículo a Firestore
      alert("Artículo añadido correctamente");
      setShowModal(false); // Cerrar el modal
    } catch (error) {
      console.error("Error al añadir el artículo:", error);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Añadir nuevo artículo</h2>
            <form onSubmit={handleSubmit}>
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

              <label>Categoría:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Selecciona una categoría</option>
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

              <button type="submit" style={{ marginBottom: '1vh' }}>Añadir Artículo</button>
            </form>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewArticleModal;
