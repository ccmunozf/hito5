# Pizzería Mamma Mía 🍕

Proyecto educativo con React y Vite. Incluye el catálogo del Hito 1, los formularios del Hito 2 y la renderización dinámica y el carrito del Hito 3.

## Ejecutar el proyecto

Necesitas Node.js y npm compatibles con la versión de Vite indicada en `package.json`.

```bash
npm install
npm run dev
```

Abre la dirección local que muestra Vite en la terminal.

```bash
npm run build   # Genera la versión de producción en dist/
npm run preview # Sirve la compilación localmente
npm run lint    # Revisa el código con ESLint
```

## Funcionalidades

- **Home:** encabezado y tarjetas de pizzas con ingredientes y precios en formato chileno.
- **Register:** correo electrónico, contraseña y confirmación de contraseña.
- **Login:** correo electrónico y contraseña.
- Navegación entre las vistas desde el menú, sin recargar la página.
- Formularios adaptables a pantallas pequeñas, etiquetas asociadas y mensajes accesibles.

## Requisitos del Hito 2

| Validación | Registro | Login |
| --- | --- | --- |
| Todos los campos obligatorios | Sí | Sí |
| Contraseña de al menos 6 caracteres | Sí | Sí |
| Contraseña y confirmación iguales | Sí | No aplica |
| Mensajes de error y éxito al enviar | Sí | Sí |
| Formato de email válido (adicional) | Sí | Sí |

Los campos usan `useState` y se actualizan mediante `onChange`. El evento `onSubmit` evita la recarga con `preventDefault()`, valida los datos y muestra el resultado. Al editar un campo se limpia el mensaje anterior; después de un envío correcto se vacían los campos.

La navegación se controla con estado en `App.jsx`. No es necesario comentar componentes para revisar cada formulario.

## Estructura

```text
src/
├── components/
│   ├── AuthForm.jsx       # Campos, estado y eventos compartidos
│   ├── Login.jsx          # Vista de inicio de sesión
│   ├── Register.jsx       # Vista de registro
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── CardPizza.jsx
│   ├── Cart.jsx           # Carrito con cantidades y total
│   └── Footer.jsx
├── utils/
│   ├── validateAuth.js    # Reglas de validación
│   ├── cart.js            # Actualización de cantidades y total
│   └── formatPrice.js
├── App.jsx
├── pizzas.js             # Catálogo y carrito de ejemplo
├── App.css
└── main.jsx
```

## Cómo probar los formularios

1. Abre **Register** y envía el formulario vacío: debe indicar que todos los campos son obligatorios. También se rechazan campos compuestos solo por espacios.
2. Escribe un email sin formato válido: debe pedir un correo válido.
3. Usa `pizza` como contraseña: debe indicar el mínimo de 6 caracteres.
4. Usa `pizza123` y confirma con `pizza456`: debe indicar que no coinciden.
5. Usa `persona@ejemplo.cl` y `pizza123` en ambos campos: debe mostrar éxito y limpiar los campos.
6. Abre **Login** y prueba campos vacíos, email incorrecto y contraseña corta.
7. Envía **Login** con `persona@ejemplo.cl` y `pizza123`: debe mostrar éxito.
8. Comprueba que una contraseña de exactamente 6 caracteres sea aceptada, y que puedas volver a Home desde el menú.

## Alcance

Este hito valida datos en el navegador. No crea cuentas reales, no autentica usuarios y no guarda contraseñas. Un mensaje de éxito significa que los datos cumplen las validaciones; no cambia el estado de sesión del menú.

El total de $25.000 y los botones de carrito, detalle y añadir del Hito 1 siguen siendo elementos de presentación. Las imágenes de las pizzas requieren conexión a Internet.

## Hito 3: renderización dinámica y carrito

- `src/pizzas.js` exporta `pizzas` (seis pizzas) y `pizzaCart` (tres pizzas con cantidad inicial de una unidad). **Son datos de ejemplo locales**, porque el archivo de apoyo original no estaba incluido junto al PDF. Las imágenes existentes se reutilizan como ilustraciones.
- `Home` recorre `pizzas` con `map` y entrega las propiedades a `CardPizza`, con una clave estable por ID.
- `CardPizza` recorre los ingredientes y muestra un elemento `li` por cada uno.
- `Cart` importa `pizzaCart` e inicializa su estado con `useState`. Muestra imagen, nombre, precio unitario, cantidad y subtotal.
- Los botones + y − actualizan las cantidades sin mutar los datos originales. Una pizza se elimina al llegar a cero.
- El total se calcula sumando precio × cantidad. Un carrito vacío muestra $0 y deshabilita Pagar.
- Pagar es un botón de presentación sin acción, tal como solicita la pauta.

Home se muestra inicialmente desde el Hito 4. Para facilitar la revisión de todos los hitos, se conserva la navegación a Home, Login y Register en lugar de comentar sus componentes. El carrito permanece montado y conserva sus cantidades al cambiar de vista; al recargar la página vuelve a los datos iniciales. El botón superior con total de $25.000 permanece estático según la pauta; usa la opción **Carrito** para ver el pedido y su total calculado.

### Comprobación del Hito 3

1. Al abrir la aplicación, el carrito comienza con tres pizzas y total de $19.850.
2. Aumenta Napolitana a dos unidades: su subtotal debe ser $11.900 y el total $25.800.
3. Disminúyela a una unidad: el total vuelve a $19.850.
4. Disminúyela nuevamente: se elimina la fila y el total queda en $13.900.
5. Elimina las pizzas restantes: se muestra el estado vacío, total $0 y Pagar deshabilitado.
6. Navega a Home: deben aparecer seis tarjetas y los ingredientes en listas.
7. Vuelve a Carrito: se mantienen los cambios. Recarga para reiniciar el ejemplo.
8. Comprueba que Login y Register siguen validando sus formularios.

## Hito 4: consumo de API

- `Home.jsx` usa `useEffect`, `useState` y `fetch` para consultar `http://localhost:5000/api/pizzas`. El cat?logo ya no utiliza el array local de `pizzas.js`; ese archivo se conserva para el carrito del Hito 3.
- `Pizza.jsx` consulta `http://localhost:5000/api/pizzas/p001` con `useEffect` y `fetch`. Muestra nombre, precio, ingredientes, imagen y descripci?n (`desc`). El ID es fijo seg?n la pauta y A?adir todav?a es un bot?n sin acci?n.
- Ambas vistas muestran carga y errores, comprueban la respuesta HTTP y cancelan la petici?n al desmontarse.
- Home es la vista inicial. La opci?n **Pizza p001** permite revisar el detalle sin comentar componentes; se conserva el acceso al carrito y los formularios anteriores.

### Backend necesario

El material de apoyo **BackendPizzas** no est? incluido en este repositorio ni junto al PDF recibido. Desc?rgalo desde el curso y, en su propia carpeta, ejecuta `npm install` y `npm start`. Debe atender en `http://localhost:5000` y permitir solicitudes desde el frontend. No ejecutes esos comandos del backend dentro de esta carpeta React.

Luego ejecuta `npm run dev` en este proyecto. Comprueba que Home muestre las pizzas del servidor y que **Pizza p001** muestre tambi?n su descripci?n. Det?n el backend y vuelve a entrar en cada vista para comprobar el mensaje de error. Los formularios y el carrito siguen funcionando con su comportamiento anterior.
