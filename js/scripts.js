document.addEventListener('DOMContentLoaded', (event) => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío predeterminado del formulario

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación básica para verificar que los campos no estén vacíos
        if (username === '' || password === '') {
            alert('Por favor, rellena todos los campos.');
            return;
        }

        // Comprobación de credenciales
        if (username === 'administrador' && password === 'p@$$w0rd') {
            alert('Fin de la parte del login de la práctica');
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});

