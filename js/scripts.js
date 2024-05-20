document.addEventListener('DOMContentLoaded', (event) => {
    // Formulario de login
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
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
                alert('Autenticación correcta!!!');
            } else {
                alert('Nombre de usuario o contraseña incorrectos.');
            }
        });
    }

    // Formulario de cambio de contraseña
    const changePasswordForm = document.getElementById('changePasswordForm');
    
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene el envío predeterminado del formulario

            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Validación básica para verificar que los campos no estén vacíos
            if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
                alert('Por favor, rellena todos los campos.');
                return;
            }

            // Validación para comprobar que la nueva contraseña y la confirmación coinciden
            if (newPassword !== confirmPassword) {
                alert('Las contraseñas nuevas no coinciden.');
                return;
            }

            // Simulación de comprobación de contraseña actual y cambio de contraseña
            if (currentPassword === 'p@$$w0rd') {
                alert('Correcto!!!');
            } else {
                alert('La contraseña actual es incorrecta.');
            }
        });
    }
});
