Teniendo en cuenta el tipo de ejercio y siendo una pequeña aplicacion para un filtrado de un pequeño objeto con tres propiedes de las cuales dos son selecionbles para el filtrado y una no, se ha optado por usar un array de objetos para almacenar los datos y poder hacer el filtrado de una manera mas sencilla y rapida.

## 1. ¿Qué librería y framework has usado para el desarrollo del proyecto?

Se ha usado la libraria React instalada dentro del entorno de desarrollo de ViteJs , no he usado Create React App ya que esta en desuso y no se esta manteniento, siendo mas inestable y menos seguro que ViteJs.Incluso en la documentacion de React se recomienda usar ViteJs.

No he usado ningun framework, solo React y ViteJs.Tampoco he instaldo ninguna libreria de terceros para el filtrado de los datos, ya que no era necesario.Tan solo he usado esLint para el control de errores y el formateo del codigo.

El compilado y babelizado del codigo se ha realizado con ViteJs.No he tocado nada de la configuracion de ViteJS.



## 2. ¿Como has estructurado el proyecto? 
Se ha estructurado de forma basica sin almacenar los componnetes en carpetas , tan solo lo compartido por algunos componentes como el archivo de types y el archivo de datos.He decidido hacerlo asi ya que el proyecto es muy pequeño y no requiere de una estructura mas compleja.

## 3. ¿Como este estructurado el componente principal? 
El componente principal es el componente App.js. Esta de forma muy sencialla y facil de entender, se han usado los hooks useState y useEffect para el control del estado y la logica. 
En él se pintan directamente el input y se podria sacar, pero al ser un componente tan pequeño y no usado en otro lugar no he visto la necesidad de hacerlo.

El resto de coponentes son SelectComponent , para listar las opciones de los filtrados personalizados , este es un componente reusable que se pueden añadir mas selectores si se requieres desde la base de datos  sin necesidata de tocar el codigo. Luego esta el componente Chip que muestra las opciones selecionadas mediante un pequeño boton con una x para eliminar de forma individual . Ambos componentes llaman al evento onClick que a su vez usan la funcion compartida handleClick para la eliminacion de los datos selecionados o el borrados de todos los datos selecionados.

El componente BoxResult simplenten muestra los datos filtrados si existen y si no muestra "no result".

Luego esta una funcion llamada filterData que es la encargada de filtrar los datos y devolverlos al componente principal para que este los pinte , se encuentra dentro de el archivo utils.tsx.

## 4. ¿Como se gestiona el estado? 

El estado se maneja mediante los hook useState.
El efecto setTimeout se ejecuta cada vez que se cambia el inputValue y se usa para simular una peticion a una base de datos y que esta tarde en responder y no ser llamada en cada pulsacion de tecla , si hubiera una peticion a BD directamente esto seria contraproducente .El tiempo de retardo es de 500ms.

No he usado ninguna libreria para la gestion del stado como Redux o Mobx ya que no era necesario, ya que el estado de la aplicacion es muy simple y no requiere de una gestion compleja del mismo.Pero en el caso que la aplicacion creciera y se requiriera de una gestion mas compleja del estado se podria usar Redux o Mobx. Ademas seria interesante cachear las respuesta en el caso que fueran muy grandes y se requiriera de una gestion mas compleja de los datos, para ello prodriamos usar react-query o SWR que es una libraria para la gestion de datos desarrollada por Vercel que primero devuelve la cache y luego en segundo plano fechea la informacion. Y para los procesos grandes useCallback o useMemo.