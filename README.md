# books-challenge
Aplicación basada en Express + EJS para la practica de ejercicios de CRUD

## Levantando la app
1. Primero se debe hacer un `fork` de este repositorio con el botón que encontramos arriba a la derecha y clonarlo en tu computadora. Asi podras trabajar con tu propia versión del repositorio.
2. Conectarse a MySQL y correr el script de creación de la base de datos llamado `books-db.sql`
3. Instalar las dependencias con el comando `npm install`
4. De ser necesario, actualizar las credenciales de la base de datos en el archivo `src/database/config`
5. Levantar la aplicación con el comando `npm run start` o `npm run test` si quieren trabajar con nodemon

## Explorando la app
La app tiene 3 secciones principales
* Listado de libros: se muestra el titulo y los autores de todos los libros de la base de datos. Al hacer click en alguno nos muestra el detalle del libro.
  * Detalle de libro: muestra información detallada de cada uno de los libros. Los botones de edicion y borrado se muestran solo para un usuario administrador.
  * Edición de libro: formulario para editar los campos de un lbro.
* Busqueda de libros: tenemos un campo de busqueda para poder buscar libros por su titulo.
* Listado de autores: muestra el nombre de cada uno de los autores. Al hacer click en alguno nos lleva a el listado de libros de ese autor.
  * Libros de un determinado autor: nos muestra un listado de libros que corresponden a un autor en particular.
* Login: vista para ingresar a la aplicación.
* Registro: vista para crear un nuevo usuario. 

## Tecnologias usadas
. Para el frontend ,se uso html, ejs boostrap para el diseño.
. Para la base de datos, se utilizo MYSQL.
. Para la parte backend, se utilizo, node, express y sequelize.

