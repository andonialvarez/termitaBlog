// Importamos las bibliotecas necesarias de React para la renderización de la aplicación
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Importamos la función para medir el rendimiento de la web (opcional)
import reportWebVitals from './reportWebVitals';

import { doc, getDoc } from "firebase/firestore"; // Para obtener un documento específico
import { collection, addDoc } from "firebase/firestore"; // Para agregar un nuevo documento a una colección

import { db } from './firebase';

// Seleccionamos el nodo raíz del DOM donde renderizaremos nuestra aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizamos el componente principal de la aplicación 'App' dentro de StrictMode para ayudar a detectar problemas
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Definimos una función asincrónica llamada 'addTodo' para interactuar con la base de datos Firebase
const addTodo = async (e) => {
  
  // Creamos una referencia a un documento específico en la colección "Blogs" con el ID "filete"
  const docRef = doc(db, "Blogs", "filete");
  
  // Intentamos obtener los datos del documento referenciado
  const docSnap = await getDoc(docRef);

  // Si el documento existe, mostramos sus datos en la consola
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // Si no existe, mostramos un mensaje indicando que no se encontró tal documento
    console.log("No such document!");
  }
}

// Llamamos a la función 'addTodo' para que se ejecute
addTodo();

// Si queremos empezar a medir el rendimiento de la aplicación, podemos pasar una función de callback
// que registre los resultados o enviarlos a un endpoint de análisis. Esto es opcional.
reportWebVitals();
