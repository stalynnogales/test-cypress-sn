# Conclusiones - Demoblaze API Tests

1. Creación de usuario:
    - La prueba de crear un nuevo usuario confirmó que la API permite registrar usuarios con credenciales válidas y únicas.
    - Los registros fueron guardados en archivos JSON, lo que facilita la revisión de las respuestas y la trazabilidad de los resultados.
    - La verificación indica que la respuesta de la API devuelve un estado HTTP 200 y un string vacío al registro exitoso.

2. Intento de crear usuario ya existente:
    - Al intentar crear un usuario que ya estaba registrado, la API respondió correctamente evitando la duplicidad.
    - Las respuestas no incluyen mensajes de éxito de registro, lo que indica un manejo adecuado de usuarios existentes.
    - Esto valida la consistencia de la lógica de la API para prevenir registros duplicados y mantener la integridad de los datos.

3. Login con credenciales correctas:
    - El inicio de sesión con usuario y contraseña correctos funciona correctamente.
    - La API retorna un estado HTTP 200 y, según la implementación, puede entregar un token de autenticación válido.
    - Esto confirma que la autenticación está implementada y que los usuarios registrados pueden iniciar sesión sin problemas.

4. Login con credenciales incorrectas:
    - La prueba con contraseña incorrecta verifica que la API detecta credenciales inválidas.
    - Se recibieron códigos de estado apropiados (200, 400, 401, 403, 404) y mensajes de error relacionados con autenticación fallida.
    - Esto asegura que el sistema protege el acceso y maneja adecuadamente los intentos de login fallidos.