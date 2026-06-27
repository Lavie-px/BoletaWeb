# Que es este proyecto?
Este es un proyecto web desarrollado con fines educativos y de aprendizaje, consiste en un sistema de cracion de boletas 
las cuales pueden ser guardadas en una bse de datos y consultadas posteriormente, algo bastante simple, no hay mucha ciencia
# Instrucciones de configuracion
Debido a que se uso una base de datos en la nube no puedo dejar las credenciales dentro del codigo por temas de seguridad, pero si puedo decirte
como configurar el codigo, para empezar deberas contar con alguno de estos servicios o aplicaciones
## Aplicaciones
- Wampp
- Xampp (no recomendado)
## Servicios en la nube
- Azure
- AWS
- BlueHosting
- o cualquier otro similar
## 
Para una mayor comodidad en tu Visual Studio Code deberas contar con las siguientes extensiones
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- [LiveServer(PHP No soportado)](https://marketplace-visualstudio-com.translate.goog/items?itemName=ritwickdey.LiveServer&_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)
- [MySQL Database Client](https://marketplace.visualstudio.com/items?itemName=formulahendry.vscode-mysql)
- [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug)
- [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=zobo.php-intellisense)
- [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
- [PHP Extension Pack](https://marketplace.visualstudio.com/items?itemName=xdebug.php-pack)
- [PHP Server](https://marketplace.visualstudio.com/items?itemName=brapifra.phpserver)

una vez instaladas las extensiones veras un icono de base de datos en la barra izquierda, dentro de el en el "+" podras crear conexiones a tus bases de datos o usuarios que tengan acceso a las bases de datos
### BlueHosting
En el caso de BlueHosting deberas ingresar el host (ip o url del sitio web), el usuario y clave que deberas crearlos desde el Cpanel en bases de datos Mysql te permitira crear usuarios

### LocalHost
para local host simplemente en host deberas dejarlo como LocalHost y user root, en caso de tener clave deberas ingresarla en caso contrario dejarlo en blanco

##
ahora deberas crear una carpeta y descargar ahi el proyecto, luego abrirla en vscode y al dirigire al archivo sql veras que en la parte superior de las sentencias sql habra una opcion de "Run" y al inicio estara la misma opcion pero acompañado de otras opciones en la seccion de "active connection" deberas darle click y seleccionar la conexion activa y la base de datos donde se ejecutaran las sentencias sql, ahora dentro de la carpeta includes habra un archivo llamado "Conexion.php" dentro de el veras las opciones de servidor, usuario, contraseña y Base de datos en blanco, deberas rellenarlos con los datos de tu servidor local o en la nube al igual que con la connexion en vscode solo que agregando el nombre de la base de datos, ahora para ejecutar la aplicacion deberas ir a algun html dentro de la carpeta html y dale al icono del servidor php en la esquina superior derecha y se abrira una pestaña del navegador, listo ahora podras usar el sitio y cualquier otro proyecto similar

  

