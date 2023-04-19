# IDW_com104_TPInt_grupo03

# Objetivo
Concretar un proyecto aplicando los conocimientos impartidos a 10 largo del curso, con la finalidad de agregarlo a sus portfolios personales.

# Enunciado
Desarrollar una landing page para una organización/emprendimiento/empresa (rubro/actividad a elección del estudiante).
EI siguiente practico integrador debe subirse en la carpeta "tpint_com104_grupo[numero]" (donde [numero] corresponden al número de su grupo)

Respetar la estructura de subcarpetas
* **/css/** para hojas de estilos
* **js** para archivos javascript
* **fonts** para agregar las carpetas de fuentes (al menos 1 fuente externa o descargada)
  > Utilizar Boostrap (botones, formularios, modal, etc)

EI sitio debe cumplir, mínimamente, con los siguientes requisitos:
## Cabecera
  * Logo
  * Barra de navegación (menú con opciones: Organización Personal | Contacto | Solicitar Proceso
  * Botón Logim Estará situado fuera del menú de navegación y al hacer click sobre el mismo abrirá un modal con el formulario de logueo: campo usuario y campo contraseña, botones "Enviar" y "Cerrar".
> Utilizar 1 icono por cada dato del formulario, también para botones

## Body
> Deben utilizar el contenedor de boostrap, filas y columnas. EI diseño debe ser web responsive.

  A. **Imagen** de la empresa/organización/emprendimiento que ocupe el ancho de la pantalla. Texto con presentación breve de la empresa/ organización/ emprendimiento.
  
  B. **Presentación de la Organización**: debe contener un texto de al menos 10 renglones con la presentación de la misión y Visión de la organización
  
  C. **Presentación Personal**: presentación de los directivos que componen la empresa u organización con foto y datos de al menos 2 personas (con API Rest a https://reqres.in/ en el cuál pueden usar LIST USERS o SINGLE USER)
  
  D. **Formulario de Contacto** : un formulario de contacto con al menos 5 campos
    * Etiqueta "Apellido", campo de texto apellido
    * Etiqueta "Email", campo de texto email
    * Etiqueta "Teléfono", campo de texto nombre telefono y del tipo "number"
    * Etiqueta "Provincia" y un combo simple con los valores de provincias
    * Etiqueta "Comentario", campo área
    * Botón "Enviar Consulta"
  > Utilizar 1 icono por cada dato del formulario, también para botones.
  
  > Usar jQuery para enviar la consulta del formulario y mostrar mensaje de respuesta "Se envío su consulta" y botón para volver a mostrar formulario.
  
  E. Formulario de un Proceso (Ejemplos: Cotización 0 Reclamo)

El Formulario de Proceso:

* A modo Asistente (Wizard de al menos 3 pasos)
* Los campos que deben ingresar en el formulario son opcionales para los alumnos
* Validación de campos del formulario
* Generación de Resumen (No Editable)
* Exportación a PDF (campo casilla de opción)

> Utilizar 1 icono por cada dato del formulario, opcional para botones.

> Usar jQuery para enviar el formulario de proceso y mostrar mensaje de respuesta "Se envío su solicitud" y botón para volver a mostrar formulario de proceso.
  
## Pie
* Debe contener los enlaces: Términos y Condiciones I Contáctanos (ubicados a la izquierda)
* Iconos sociales: Facebook I Instagram (ubicados a la derecha)
* @ 2023 Todos los derechos reservados [NombreEmpresaWeb](abajo)
* Pueden agregar Otra información relevante como datos de contacto, etc.

### EI sitio debe utilizar las siguientes Bibliotecas
* Uso de Bibliotecas JS
* JQuery
* Validate.JS

### EI sitio debe contar con una Integración
* Consumo de API Externa a través de AJAX
* Visualización de los Resultados Obtenidos

Proceso Sugerido
-----------------
1. Definir Wireframes y Bocetos del Sitio
2. Generar Repositorio Git
3. Generar las Maquetas
4. Pruebas de Concepto de las Librerías Boostrap, Iconos, jQuery.
5. Implementación de JS
6. Pruebas de Integración

> ## Algunas Sugerencias
> 1. Probar cada biblioteca de javascript por separado
> 2. Crear un formulario simple agregando funcionalidades de distintas bibliotecas con el objetivo de tener un proceso de aprendizaje significativo iterativo-incremental.
> 3. ¡Mucha Paciencia!
