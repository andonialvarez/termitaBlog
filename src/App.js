import './App.css';
import { ArticleList } from './components/ArticleList';
import { ButtonList } from './components/ButtonList';
import data from './data/data';
import axios from "axios";
import { useState, useEffect } from 'react';
import db from './data/db';




function App() {

  const allCategories = ['All', ...new Set(db.map(article => article.category))]

    

  const [categories, setCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  
  

  useEffect(() => {
    axios.get('https://andonialvarez.devcamp.space/portfolio/portfolio_items')
      .then(response => {
        const db = response.db.portfolio_items; // Asegúrate de acceder a los datos correctamente
        console.log(db);

        // Actualizamos las categorías y los artículos basados en la respuesta de la API
        const allCategories = ['All', ...new Set(db.map(article => article.category))];
        setCategories(allCategories);
        setArticles(db);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const filterCategory = (category) => {
    if (category === 'All') {
      // Hacer de nuevo la solicitud o utilizar los artículos ya almacenados
      axios.get('https://andonialvarez.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          setArticles(response.db.portfolio_items);
        })
        .catch(error => {
          console.error('Error al obtener los datos:', error);
        });
      return;
    }

    // Filtrar los artículos por categoría
    const filteredData = articles.filter(article => article.category === category);
    setArticles(filteredData);
    console.log('this is the data' ,filteredData)
  };


  return (
    <>
      <div className="title">
        <h1>Filter <span>Blog</span>Basics</h1>
      </div>

      <div className="App">
        <h1>Hola Mundo</h1>
        <ButtonList categories={categories} filterCategory={filterCategory} />
        <ArticleList articles={articles} />

      </div>
    </>
  );
}

export default App;