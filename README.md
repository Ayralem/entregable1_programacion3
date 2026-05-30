# Prism Dashboard

Aplicación móvil desarrollada con Ionic 8 y Angular 18 bajo el sistema de componentes independientes (Standalone). Implementa una interfaz de usuario con estética Prism basada en gradientes, glassmorphism y efectos de iluminación.

## Tecnologías

- Angular 18 Standalone
- Ionic 8 (@ionic/angular/standalone)
- EmailJS (@emailjs/browser)
- Tema oscuro permanente

## Instalación y ejecución

```bash
npm install
ionic serve
```

## Arquitectura

El proyecto utiliza una arquitectura de una sola página con navegación por segmentos. No depende de menús laterales ni de pestañas inferiores.

### Componentes

| Componente | Ruta | Descripción |
|---|---|---|
| `AppComponent` | `/` | Contenedor principal con navegación por segmentos |
| `InicioPage` | `/inicio` | Pantalla de bienvenida con cards informativas |
| `PersonalPage` | `/personal` | Perfil personal con estadísticas y habilidades |
| `ContactoPage` | `/contacto` | Formulario de contacto con EmailJS |

### Sistema de diseño Prism

1. **Gradiente principal**: `linear-gradient(135deg, #6366F1, #A855F7)` en botones, acentos y títulos decorativos.
2. **Glassmorphism**: Tarjetas semitransparentes con `backdrop-filter: blur()` que generan profundidad visual.
3. **Efecto Glow**: Sombras violetas (`box-shadow`) que crean un resplandor neón sutil alrededor de los elementos clave.

## Estructura del proyecto

```
src/
├── app/
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── pages/
│       ├── inicio/
│       ├── personal/
│       └── contacto/
├── theme/
│   └── variables.scss
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── global.scss
```

## Variables de entorno

Las credenciales de servicios externos se gestionan a través de `src/environments/environment.ts`.
