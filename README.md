
# Tarjeta de crédito válida 

## Índice

* [1. Resumen](#1-resumen)
* [2. Prototipo](#2-prototipo)
* [3. Investigación UX](#3-investigación-ux)
* [4. Plan de acción](#4-plan-de-acción)

***

## Resumen

El proyecto es una aplicación web que permite a los usuarios validar el número 
de su tarjeta de crédito antes de hacer la compra de un producto. 

Para ello se usó el algoritmo de Luhn o fórmula de Luhn, también conocida como 
"algoritmo de módulo 10", es una fórmula de suma de verificación, utilizada para 
validar una diversidad de números de identificación; como números de tarjetas de 
crédito, números IMEI, etc.

## Investigación UX

### Usuarios del producto
    
Los usuarios son personas que necesitan realizar la compra de una pizza de 
manera rápida; el objetivo es brindarles una plataforma segura y de fácil uso. 

### Solución al problema 
    
El proyecto Tarjeta de crédito válida permitirá que los usuarios puedan validar 
su tarjeta antes de hacer el pago y compra de una pizza de manera sencilla. 

### Uso

Al ingresar a la página web encontarás la siguiente interfaz:

 ![vista1](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/vista1.png) 

Luego, ingresa el número de tarjeta que quieres validar:

![vista2](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/vista2.png) 

Si imgresas el número de una tarjeta, te indicará su validez y la franquicia a la 
cual pertenece la tarjeta. Además sólo se mostrará los últimos cuatro dígitos, 
emcriptando los demás números.

* #### Resultado para tarjeta Visa válida
![visa-válida](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/visa-v%C3%A1lida.PNG) 

* #### Resultado para tarjeta Visa no válida
![visa-noválida](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/visa-nov%C3%A1lida.PNG) 

* #### Resultado para tarjeta Mastercard válida
![mastercard-válida](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/mastercard-v%C3%A1lida.PNG) 

* #### Resultado para tarjeta Masctercard no válida
![mastercard-noválida](https://github.com/Roxana-Vargas/LIM015-card-validation/blob/6e8b327c25a73237231c6595143cb9a6ca93cb48/src/im%C3%A1genes/mastercard-nov%C3%A1lida.PNG) 

    
## Plan de acción

* [ ] Elaborar el prototipo
* [ ] Maquetación de la página en HTML
* [ ] Validar que el input sea numérico
* [ ] Obtener los valores del input
* [ ] Ingresar los números a un array e invertirlos
* [ ] Aplicar la operación a los números en posiciones pares
* [ ] Sumar los dígitos y nuevos dígitos
* [ ] Verificar si el resultado es válido o no
* [ ] Mostrar el resultado en la pantalla
* [ ] Ocultar todos los números de la tarjeta excepto los últimos 4
* [ ] Pruebas unitarias de las funciones
* [ ] Mostrar la franquicia de la tarjeta
* [ ] Dar estilos con CSS 



