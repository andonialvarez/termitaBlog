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
import Links from './components/link';
import Contact from './pages/contact';


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

			<Links />
			<Routes>
				<Route path="/" element={
					<>
						<ButtonList categories={categories} filterCategory={filterCategory} />
						<ArticleList articles={articles} />
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
