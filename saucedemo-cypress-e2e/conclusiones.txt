## Conclusiones

- La automatización E2E valida de manera integral el flujo crítico de compra en SauceDemo, desde login hasta la confirmación de la orden.
- Los comandos personalizados (`loginSauceDemo`, `addProductToCart`, `completeCheckout`) permiten un código más limpio, reutilizable y fácil de mantener.
- La verificación del mensaje final `"THANK YOU FOR YOUR ORDER"` se hizo insensible a mayúsculas/minúsculas, aumentando la robustez de la prueba.
- La inclusión de timeouts explícitos asegura que los tests no fallen por retrasos en la carga de la página.
- La captura de pantalla final proporciona evidencia visual que facilita la revisión y documentación del test.
- Este enfoque E2E asegura que la integración entre frontend y backend funciona correctamente, detectando problemas que pruebas unitarias o de API aisladas podrían no identificar.
