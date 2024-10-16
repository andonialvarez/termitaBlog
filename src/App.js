import './App.css';
import { ArticleList } from './components/ArticleList';
import { ButtonList } from './components/ButtonList';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa BrowserRouter, Routes, Route y Link
import About from './pages/about'; // Importa la página About
import Footer from './components/footer';
import MovieCarousel from './components/carousel';
import NewArticleModal from './components/newModal';
import Links from './components/link';
import Contact from './pages/contact';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';

function App() {
    const [showModal, setShowModal] = useState(false); // Estado del modal
    const [categories, setCategories] = useState([]);  // Almacenar las categorías
    const [articles, setArticles] = useState([]);      // Artículos visibles
    const [allArticles, setAllArticles] = useState([]); // Todos los artículos sin filtrar
    const [key, setKey] = useState(0);  // Estado para forzar re-renderizado

    // Función para obtener los datos desde Firestore cuando se monta el componente
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Blogs"));
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                const allCategories = [...new Set(data.map(article => article.category))];
                setCategories(allCategories);  // Guardar las categorías
                setArticles(data);  // Guardar los artículos visibles
                setAllArticles(data); // Guardar todos los artículos (sin filtrar)
            } catch (error) {
                console.error("Error al obtener los artículos:", error);
            }
        };

        fetchData();
    }, []); // Solo se ejecuta una vez al montar el componente

    // Función para filtrar artículos por categoría
    const filterCategory = (category) => {
        if (category === 'Todas') {
            setArticles(allArticles); // Mostrar todos los artículos si se selecciona 'Todas'
            setKey(prevKey => prevKey + 1); // Forzar re-render cuando seleccionas "Todas"
        } else {
            const filteredData = allArticles.filter(article => article.category === category);
            setArticles(filteredData); // Actualizar el estado con los artículos filtrados
            setKey(prevKey => prevKey + 1); // Forzar re-render cuando se filtra por categoría, igual podria hacer un componentDidUpdate para reenderizar??
        }
    };

    return (
        <Router>
            <Links />
            <Routes>
                <Route path="/" element={
                    <>
                        <ButtonList categories={categories} filterCategory={filterCategory} />
                        <ArticleList key={key} articles={articles} /> {/* Artículos filtrados */}
                        
                        <h4>Estrenos de cartelera:</h4>
                        <MovieCarousel />
                        
                        <h1>Añadir nuevo artículo:</h1>
                        <button className='modal-button' onClick={() => setShowModal(true)}>Añadir nuevo artículo</button>
                        <NewArticleModal showModal={showModal} setShowModal={setShowModal} />
                    </>
                } />

                <Route path="/about" element={<About />} /> {/* Ruta para la página About */}
                <Route path="/contact" element={<Contact />} /> {/* Ruta para la página Contact */}
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
