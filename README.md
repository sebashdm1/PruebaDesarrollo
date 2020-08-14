
## About landing

la aplicacion fue desarrollada en el backend con php laravel y en el front con react
es necesario instalar comomposer para luego ejecutar  composer require 'vendor/autoload.php';
y tambien es requerido node_modules.  

al configurar esto se puede ejecutar la aplicacion  con php artisan serve, lo cual me ejecuta el servidor local de laravel. 

la aplicacion tiene pruebas unitarias en el backend

si la tabla en la base de datos no esta creada se puede crear a travez de la migracion  de larave: php artisan migrate

tuve problemas con los Cors de amazon los cuales no pude corregir, entonces para poder hacer conexion  a la API utilicé
la extencion de chrome llamada Moesif origins & Corns.

para el modal utilicé reactstrap : npm install reactstarp




