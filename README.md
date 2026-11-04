# Pizzería Mamma Mía

Proyecto React + Vite con los hitos 1 a 5.

## Ejecutar

```bash
npm install
npm run dev
npm run build
npm run lint
```

En PowerShell puedes usar npm.cmd si npm.ps1 está bloqueado.

## Hito 5

React Router configura BrowserRouter en main.jsx y Routes/Route en App.jsx. Las vistas están en src/pages:

| Ruta | Vista |
| --- | --- |
| / | Home |
| /register | Register |
| /login | Login |
| /cart | Cart |
| /pizza/p001 | Pizza |
| /profile | Profile |
| /404 y rutas desconocidas | NotFound |

Navbar usa Link y el total superior abre /cart. El detalle se consulta directamente en /pizza/p001, sin enlace en Navbar. NotFound incluye un enlace al inicio. Profile muestra un correo de ejemplo y Cerrar sesión estático; no hay autenticación real.

El estado del carrito vive en App para conservar cantidades al navegar. Al recargar se reinicia. El total superior conserva el valor estático del Hito 1; Cart calcula el total del pedido.

## Backend del Hito 4

Home consulta http://localhost:5000/api/pizzas y Pizza consulta http://localhost:5000/api/pizzas/p001 usando useEffect y fetch. Muestran carga y errores. Pizza muestra nombre, precio, ingredientes, imagen y descripción (desc).

Descarga BackendPizzas desde el curso y ejecuta npm install y npm start en su propia carpeta. No está incluido en este repositorio. El carrito mantiene los datos de ejemplo locales; Añadir y Pagar siguen sin acción.

## Comprobación manual

1. Recorre el menú y prueba Atrás y Adelante: las URL deben cambiar sin recargar.
2. Abre y recarga cada ruta de la tabla. Prueba /ruta-inexistente y el enlace Volver al inicio.
3. Pulsa el total superior, cambia cantidades, navega a otra página y vuelve al carrito. Debe conservar los cambios. Una cantidad cero elimina la pizza.
4. Prueba los formularios vacíos, contraseñas cortas y confirmaciones diferentes. Un correo válido y contraseñas coincidentes de seis o más caracteres deben mostrar éxito.
5. Revisa catálogo y detalle con el backend activo y los mensajes de error sin backend.
6. Comprueba las vistas en pantalla estrecha y la navegación con teclado.

En hosting estático configura la reescritura a index.html para permitir recargas de rutas con BrowserRouter.
