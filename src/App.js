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

			<div className='links'>
				<div className='links-inicio'>
					<Link to="/">
						<div className="image-container">
							<img src='https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Inicio"></img>
							<p className="image-text">Inicio</p> {/* Frase dentro de la imagen */}
						</div>
					</Link>
				</div>
				<div className='links-inicio'>
					<Link to="/about">
						<div className="image-container">
							<img src='https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2019/05/Portada_Manual_Critica_Cine.jpg?fit=1000%2C554&ssl=1' alt="About"></img>
							<p className="image-text">Acerca de</p> {/* Frase dentro de la imagen */}
						</div>
					</Link>
				</div>
				<div className='links-inicio'>
					<Link to="/about">
						<div className="image-container">
							<img src='https://i0.wp.com/www.cinemanet.info/wp-content/uploads/2019/05/Portada_Manual_Critica_Cine.jpg?fit=1000%2C554&ssl=1' alt="About"></img>
							<p className="image-text">Acerca de</p> {/* Frase dentro de la imagen */}
						</div>
					</Link>
				</div>
			</div>

			<Routes>
				<Route path="/" element={
					<>
						<ButtonList categories={categories} filterCategory={filterCategory} />
						<ArticleList articles={articles} />
						<MovieCarousel />
						<h1>Añadir nuevo artículo</h1>
						<button className='modal-button' onClick={() => setShowModal(true)}>Añadir nuevo artículo</button>
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
