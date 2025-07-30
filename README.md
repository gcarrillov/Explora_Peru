# UNIVERSIDAD NACIONAL DE SAN AGUSTÍN DE AREQUIPA  
## Facultad de Ingeniería de Producción y Servicios  
### Escuela Profesional de Ingeniería de Sistemas  

**Curso:** Programación Web 2  
**Docente:** M.Sc. Carlo Corrales Delgado  

**Estudiantes:**  
- Carrillo Villalta, Gustavo Alonso  
- Ulloa Salas, Sebastián Donato  

---

# 📌 Proyecto Final – Explora Perú

**Explora Perú** es una plataforma web interactiva desarrollada como parte del curso **Programación Web 2**, cuyo objetivo es promover el turismo digital en las regiones del Perú. El sistema permite a los usuarios explorar rutas terrestres, visualizar datos turísticos y culturales por región, y planificar viajes de forma digital e intuitiva.

## 🧠 Tecnologías utilizadas

- **Backend:** Django 5.2.4 + Django REST Framework  
- **Frontend:** Angular 20 Standalone  
- **Base de datos:** SQLite (en desarrollo)  
- **Estilos:** Bootstrap 5  
- **Autenticación:** Token Authentication  
- **Herramientas auxiliares:** Git, Thunder Client, Render, Vercel

## 🔧 Funcionalidades implementadas

- Registro y login de usuarios con validación y token
- Envío automático de correo de bienvenida al registrarse
- Búsqueda dinámica de regiones por nombre
- Exploración aleatoria de regiones
- Visualización de:
  - Lugares turísticos
  - Comidas típicas
  - Tradiciones
  - Galería de fotos
- CRUD completo para rutas, empresas, buses y viajes
- Carga inicial de datos mediante fixtures JSON
- API RESTful pública protegida con autenticación para acciones sensibles

## ⚙️ Arquitectura general

- **Django REST Framework** expone endpoints para todas las entidades del sistema (`/api/regiones/`, `/api/rutas/`, etc.)
- **Angular standalone** consume estos servicios vía `HttpClient` usando observables y servicios propios.
- El sistema está desacoplado y cumple con las buenas prácticas de desarrollo web moderno (frontend y backend independientes).

## 🧩 Organización del repositorio

explora-peru/
├── backend/ # Backend Django (apps: regiones, usuarios)
│ ├── manage.py
│ ├── fixtures_regiones_peru.json
│ └── backend_explora/
│
├── frontend/ # Frontend Angular 20 Standalone
│ ├── src/app/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ └── resolvers/
│ ├── assets/
│ └── angular.json


## 🧪 Pruebas

- Todas las funcionalidades fueron probadas en **Thunder Client** y navegadores modernos.
- Las operaciones protegidas requieren token enviado en los headers.
- Fixtures precargados garantizan datos reales desde el inicio.

## 🌐 Despliegue

- **Frontend publicado en Vercel** (versión de prueba)
- **Backend desplegado en Render** con base de datos lista para testeo

## 📸 Capturas de pantalla

_✔ Incluidas en el informe PDF anexo y presentación._

---

© 2025 – Universidad Nacional de San Agustín de Arequipa  
