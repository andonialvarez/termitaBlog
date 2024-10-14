export const ButtonList = ({ categories, filterCategory }) => {
    const handleSelect = (event) => {
        const selectedCategory = event.target.value;
        filterCategory(selectedCategory); // Llama a la función para filtrar por la categoría seleccionada
    };

    return (
        <div className="categories-dropdown">
                <h1 style={{marginRight: "20px"}}>Elige tu tipo de pelicula:</h1>

            <select onChange={handleSelect} className="dropdown">
                <option value="Todas">Todas</option>
                
                {categories.map(category => (
                    <option value={category} key={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}
