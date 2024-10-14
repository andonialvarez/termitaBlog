const mysql = require('mysql2');
const fs = require('fs');

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Reemplaza con tu usuario MySQL
  password: '0030', // Reemplaza con tu contraseña MySQL
  database: 'blogdb' // Reemplaza con el nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');

  // Hacer una consulta para obtener los datos
  const query = 'SELECT * FROM blogs'; // Reemplaza 'posts' con tu tabla
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los datos:', err);
      return;
    }

    // Convertimos los resultados a formato JSON
    const data = JSON.stringify(results, null, 2);

    // Generamos el contenido del archivo data-blog.js
    const fileContent = `export const data = ${data};\n`;

    // Escribimos en el archivo data-blog.js
    fs.writeFileSync('src/data/data-blog.js', fileContent);

    console.log('Archivo data-blog.js actualizado con éxito');

    // Cerrar la conexión a MySQL
    connection.end();
  });
});
