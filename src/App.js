import './App.css';
import { ArticleList } from './components/ArticleList';
import { ButtonList } from './components/ButtonList';
import { data } from './data/data-blog';
import axios from "axios";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa BrowserRouter, Routes, Route y Link
import About from './pages/about'; // Importa la página About
import Footer from './components/footer';
import MovieCarousel from './components/carousel';
import NewArticleModal from './components/newModal';


function App() {
    const [showModal, setShowModal] = useState(false);
    const allCategories = [

        ...new Set(data.map(article => article.category)),
    ];

    const [categories, setCategories] = useState(allCategories);
    const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
        if (category === 'Todas') {
            setArticles(data)
            return;
        }

        const filteredData = data.filter(article => article.category === category);
        setArticles(filteredData)
    }

    return (
        <Router>
            <div className='title'>
                <h1>
                    Termita <span>Blog</span>
                </h1>
                <img
                    src='https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2019/05/Portada_Manual_Critica_Cine.jpg?fit=1000%2C554&ssl=1'
                    alt='imagen-header'
                />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link> {/* Enlace a la página de About */}
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={
                    <>
                        <ButtonList categories={categories} filterCategory={filterCategory} />
                        <ArticleList articles={articles} />
                        <MovieCarousel />
                        <h1>Añadir nuevo artículo</h1>
                        <button style={{ padding: "10px", color: "black", background: '#e18255', borderRadius: '15px' }} onClick={() => setShowModal(true)}>Añadir nuevo artículo</button>
                        <NewArticleModal showModal={showModal} setShowModal={setShowModal} />
                    </>
                } />

                <Route path="/about" element={<About />} /> {/* Ruta para la página About */}
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
