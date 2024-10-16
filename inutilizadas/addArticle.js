//Este archivo se utilizaba para añadir un archivo a la base de datos SQL de Workbench, al final cambiamos de base de datos a Firestore



// import React, { useState } from 'react';
// import './Modal.css'; // Asegúrate de importar el CSS

// const NewArticleModal = ({ showModal, setShowModal }) => {
//   const [title, setTitle] = useState('');
//   const [subtitle, setSubtitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [description, setDescription] = useState('');
//   const [conclusion, setConclusion] = useState('');
//   const [rating, setRating] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Lógica para enviar el formulario
//   };

//   return (
//     <>
//       {showModal && (
//         <div className="modal-overlay">
//           <div className="modal-content">
//             <button className="close-btn" onClick={() => setShowModal(false)}>X</button>
//             <h2>Añadir nusdsdevo artículo</h2>
//             <form onSubmit={handleSubmit}>
//               <label>Título:</label>
//               <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

//               <label>Subtítulo:</label>
//               <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />

//               <label>Categoría:</label>
//               <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />

//               <label>Descripción:</label>
//               <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

//               <label>Conclusión:</label>
//               <textarea value={conclusion} onChange={(e) => setConclusion(e.target.value)} required />

//               <label>Nota (calificación):</label>
//               <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />

//               <button type="submit">Añadir Artículo</button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NewArticleModal;
