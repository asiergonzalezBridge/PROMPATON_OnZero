🍏 ONzero 🍏

Aplicación web enfocada en la reducción del desperdicio alimentario, permitiendo a los usuarios generar recetas con ingredientes disponibles, aprovechar excedentes y gestionar una lista de la compra con un sistema de gamificación.

🧠 Descripción

ONzero es una aplicación que ayuda a los usuarios a:

🥕 Generar recetas según ingredientes disponibles
♻️ Aprovechar alimentos sobrantes
🛒 Gestionar una lista de la compra
🌱 Reducir el desperdicio alimentario
🎮 Ganar puntos mediante un sistema de gamificación

El objetivo principal es fomentar hábitos sostenibles mediante una experiencia interactiva.

🚀 Funcionalidades

🥗 Generación de recetas
Introduces ingredientes
El sistema propone recetas optimizadas
Calcula el porcentaje de aprovechamiento

♻️ Aprovechamiento de excedentes
Introduces un alimento sobrante
Se sugieren ideas para reutilizarlo

🛒 Lista de la compra
Añadir elementos manualmente
Gestión sencilla desde la interfaz

🎮 Gamificación
Sistema de eco-puntos
Barra de progreso
Niveles según impacto ambiental

🏗️ Tecnologías utilizadas

HTML5
CSS (TailwindCSS)
JavaScript (Vanilla)
LocalStorage (persistencia en cliente)

📂 Estructura del proyecto

📁 proyecto
├── index.html      # Interfaz principal :contentReference[oaicite:0]{index=0}
├── scripts.js      # Lógica de la aplicación
├── mock.js         # Base de datos simulada (recetas, filtros, excedentes)

⚙️ Funcionamiento

🔹 Estado global

Se almacenan puntos y progreso en localStorage
Permite persistencia entre sesiones

🔹 Flujo principal

Usuario introduce ingredientes
Se filtran recetas (mock.js)
Se calculan coincidencias
Se muestran las mejores opciones
Se actualizan puntos y progreso
🎯 Ejemplo de uso

Introducir: arroz, pollo
El sistema muestra:
Arroz con pollo
Pollo al horno
Se calcula aprovechamiento
Se suman puntos automáticamente

🌱 Sistema de gamificación

Cada acción suma puntos:
Ver recetas → +10
Añadir a lista → +2
Usar excedentes → +5
Barra de progreso:
Nivel Eco 🌱
Nivel Pro 🌍

📌 Objetivo del proyecto

Promover:

Consumo responsable
Reducción de desperdicio
Educación ambiental
🚀 Posibles mejoras
Backend con base de datos real
Sistema de usuarios/login
API de recetas real
App móvil
Integración con IA

👨‍💻 Autor

Proyecto desarrollado por el grupo 6 (Promp-a-thon, AlumniDay, BBK y THEBRIDGE)