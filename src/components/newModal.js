import React, { useState, useEffect } from "react";
import axios from "axios";

const NewArticleModal = ({ showModal, setShowModal }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [rating, setRating] = useState("");
  const [categories, setCategories] = useState([]); // Nuevo estado para almacenar las categorías



  // Función para obtener las categorías del backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/category");
        console.log(response.data); // Para ver cómo son los datos
        setCategories(response.data);
      } catch (error) {
        console.error("Error al obtener las categorías:", error);
      }
    };
  
    if (showModal) {
      fetchCategories();
    }
  }, [showModal]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newArticle = {
      title,
      subtitle,
      category,
      description,
      conclusion,
      rating: parseFloat(rating), // Convertir la calificación en un número
    };

    try {
      // Aquí haces la petición POST al backend
      const response = await axios.post("http://localhost:3001/api/articles", newArticle);
      if (response.status === 200) {
        alert("Artículo añadido correctamente");
        setShowModal(false); // Cierra el modal después de añadir el artículo
      }
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <label>Subtítulo:</label>
              <input
                type="text"
                value={subtitle}
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
                  <option key={index} value={cat.name}> {/* Asegúrate de usar el campo correcto, en este caso 'name' */}
                    {cat.name} {/* Muestra el nombre de la categoría */}
                  </option>
                ))}
              </select>

              <label>Descripción:</label>
              <textarea
                value={description}
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
                value={rating}
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
