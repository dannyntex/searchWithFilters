Teniendo en cuenta el tipo de ejercicio y siendo una pequeña aplicación para un filtrado de un pequeño objeto con tres propiedades de las cuales dos son seleccionables para el filtrado y una no, se ha optado por usar un array de objetos para almacenar los datos y poder hacer el filtrado de una manera más sencilla y rápida.

## 1. ¿Qué librería y framework has usado para el desarrollo del proyecto?
Se ha usado la libraría React instalada dentro del entorno de desarrollo de ViteJs, no he usado Create React App ya que está en desuso y no se está manteniendo, siendo más inestable y menos seguro que ViteJs. Incluso en la documentación de React se recomienda usar ViteJs.
No he usado ningún framework, solo React y ViteJs. Tampoco he instalado ninguna librería de terceros para el filtrado de los datos, ya que no era necesario. Tan solo he usado esLint para el control de errores y el formateo del código.
El compilado y babelizado del código se ha realizado con ViteJs. No he tocado nada de la configuración de ViteJS.



## 2. ¿Como has estructurado el proyecto?
Se ha estructurado de forma básica sin almacenar los componentes en carpetas, tan solo lo compartido por algunos componentes como el archivo de tipos y el archivo de datos. He decidido hacerlo así ya que el proyecto es muy pequeño y no requiere de una estructura más compleja.

## 3. ¿Cómo está estructurado el componente principal?
El componente principal es el componente App.js. Esta de forma muy sencilla y fácil de entender, se han usado los hooks useState y useEffect para el control del estado y la lógica. En él se pintan directamente el input y se podría sacar, pero al ser un componente tan pequeño y no usado en otro lugar no he visto la necesidad de hacerlo.
El resto de componentes son SelectComponent, para listar las opciones de los filtrados personalizados, este es un componente reusable que se pueden añadir más selectores si se requieres desde la base de datos sin necesidad de tocar el código. Luego está el componente Chip que muestra las opciones seleccionadas mediante un pequeño botón con una x para eliminar de forma individual. Ambos componentes llaman al evento onClick que a su vez usan la función compartida handleClick para la eliminación de los datos seleccionados o el borrados de todos los datos seleccionados.
El componente BoxResult simplemente muestra los datos filtrados si existen y si no muestra "no result".
Luego esta una función llamada filterData que es la encargada de filtrar los datos y devolverlos al componente principal para que este los pinte, se encuentra dentro del archivo utils.tsx.


## 4. ¿Cómo se gestiona el estado?
El estado se maneja mediante los hook useState. El efecto setTimeout se ejecuta cada vez que se cambia el inputValue y se usa para simular una petición a una base de datos y que esta tarde en responder y no ser llamada en cada pulsación de tecla, si hubiera una petición a BD directamente esto sería contraproducente. El tiempo de retardo es de 500ms.
No he usado ninguna librería para la gestión del estado como Redux o Mobx ya que no era necesario, ya que el estado de la aplicación es muy simple y no requiere de una gestión compleja del mismo. Pero en el caso que la aplicación creciera y se requiriera de una gestión más compleja del estado se podría usar Redux o Mobx. Además, sería interesante cachear las respuesta en el caso que fueran muy grandes y se requiriera de una gestión más compleja de los datos, para ello podríamos usar react-query o SWR que es una libraría para la gestión de datos desarrollada por Vercel que primero devuelve la cache y luego en segundo plano fechea la información. Y para los procesos grandes useCallback o useMemo.
