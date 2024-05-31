# Secure Forms App

Esta es una aplicación web básica que incluye un formulario de login y un formulario de cambio de contraseña. La aplicación se ejecuta en el lado del cliente sin interacción con el servidor.

## Estructura del Proyecto
secure-forms-app/
├── index.html
├── login.html
├── change-password.html
├── js/
│   └── scripts.js
└── README.md

## Objetivo de Cada Fichero
- `index.html`: Página de inicio.
- `login.html`: Contiene el formulario de login.
- `change-password.html`: Contiene el formulario de cambio de contraseña.
- `js/scripts.js`: Contiene el JavaScript necesario para las validaciones y la lógica del formulario.
- `README.md`: Descripción del proyecto y su estructura.

# Vulnerabilidad
Actualmente, las credenciales de usuario y contraseña se validan en el lado del cliente, lo que es inseguro porque el código JavaScript se puede ver y manipular fácilmente. Para solucionar esta vulnerabilidad, las validaciones y la autenticación deberían realizarse en el servidor. Esto implicaría enviar las credenciales ingresadas al servidor a través de una conexión segura (por ejemplo, HTTPS) y comparar las credenciales con una base de datos segura en el servidor. Esto evitaría que los usuarios malintencionados puedan ver y manipular el código de validación.


