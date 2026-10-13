# ORBIT PC · Práctica 3 — Maquetación web con HTML y CSS

Maquetación en HTML y CSS de la tienda online **ORBIT PC**, a partir del prototipo de Figma de la Práctica 2 (wireframing y prototipado).

Autor: José Antonio Núñez Lloret

## Páginas

| Página | Archivo | Contenido |
| --- | --- | --- |
| Inicio | `index.html` | Hero "Tu próximo gran salto", equipos destacados, guía "¿Para qué lo vas a usar?", ventajas y llamada a la acción |
| Tienda | `tienda.html` | Listado de los tres equipos con sus especificaciones principales y comparador |
| AURA 14 | `aura-14.html` | Ficha del portátil: configuración y precio, datos clave, ficha técnica, perfil de uso y contenido de la caja |
| NEXUS X | `nexus-x.html` | Ficha del sobremesa (misma estructura) |
| STUDIO 27 | `studio-27.html` | Ficha del todo en uno (misma estructura) |
| Soporte | `soporte.html` | Áreas de ayuda y preguntas frecuentes (`<details>`) |
| Contacto | `contacto.html` | Formulario de contacto |
| Confirmación | `gracias.html` | Página a la que lleva el formulario al enviarse |

## Estructura

```
├── index.html, tienda.html, aura-14.html, nexus-x.html, studio-27.html,
│   soporte.html, contacto.html, gracias.html
├── css/styles.css     Hoja de estilos única, organizada por secciones
└── img/               Ilustraciones SVG de los productos y favicon
```

La web está hecha solo con HTML y CSS, sin JavaScript. El selector de configuración de las fichas funciona con los selectores `:has()` y `:checked` de CSS, y las preguntas frecuentes con `<details>`.

## Decisiones de diseño

- **Tipografía:** Inter (Google Fonts), la misma del prototipo de Figma.
- **Colores:** fondo azul marino muy oscuro (`#0a1120`), superficies `#131c2e` / `#1a2438` y acento verde menta (`#74e3c7`). Están definidos como variables CSS en `:root`.
- **Flexbox:** se usa en toda la maquetación: cabecera y menú, hero, rejilla de tarjetas, ficha de producto, especificaciones, formulario y pie de página.
- **CSS:** clases con nomenclatura BEM (`bloque__elemento--modificador`), variables para colores, tipografía y espaciado, y media queries para tablet y móvil.
- **Accesibilidad:** HTML semántico, enlace "Saltar al contenido", `aria-current` en el menú, foco visible y etiquetas `label` asociadas a cada campo.

## Ver en local

Abre `index.html` en el navegador. No hace falta instalar nada.
