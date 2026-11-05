# Surikata3K

Código de **[surikata3k.com](https://surikata3k.com)**, la página principal de mis proyectos: apuntes de sistemas, vídeos de YouTube y apps web.

## Qué hay en la web

- **Apuntes**: sistemas operativos, redes, bases de datos, máquinas virtuales y contenedores, en [docs.surikata3k.com](https://docs.surikata3k.com/)
- **Vídeos**: el canal [@Surikata3K](https://www.youtube.com/@Surikata3K) de YouTube
- **Código**: todo en [GitHub](https://github.com/surikata3k/)
- **Apps**: pequeñas apps que funcionan en el navegador, sin instalar nada ni servidor:
  - *utilidades*: [Dits Màgics](https://surikata3k.com/ditsmagics/), [Planificador de horas de RA](https://surikata3k.com/apps/horas-ra/)
  - *contraseñas*: [PassForge](https://surikata3k.com/apps/passforge/), [Generador](https://surikata3k.com/apps/generador-contrasenas/), [Analizador](https://surikata3k.com/apps/analizador-contrasenas/), [Calculadora de entropía](https://surikata3k.com/apps/calculadora-entropia/)
  - *criptografía y seguridad*: [Simulador de clave asimétrica](https://surikata3k.com/apps/clave-asimetrica/) (con [las matemáticas de RSA](https://surikata3k.com/apps/clave-asimetrica/matematicas.html)), [Simulador de blockchain](https://surikata3k.com/apps/blockchain/)

## Estructura del repositorio

```
index.html     página principal (HTML con CSS en línea)
apps/          las apps web, una carpeta por app (antes en el repositorio web-apps)
web-apps/      redirecciones de las URL antiguas (/web-apps/...) a /apps/...
404.html       página de error
robots.txt     instrucciones para buscadores
sitemap.xml    mapa del sitio para Google y Bing
img/           logo, favicon, iconos e imágenes para redes sociales (og-image.png y og/<app>.png)
tools/         generación del CSS de Tailwind y de los iconos de Lucide de las apps
CNAME          dominio propio de GitHub Pages (surikata3k.com)
```

Dits Màgics sigue en su propio repositorio y se sirve en `surikata3k.com/ditsmagics/`.

### Añadir una app nueva

1. Crea `apps/<nombre-en-castellano>/index.html`.
2. En el `<head>`: `<title>`, `meta description`, `canonical`, Open Graph y el bloque JSON-LD (copia el de otra app).
3. Usa `/apps/assets/tailwind.min.css` y `/apps/assets/lucide.min.js` (no los CDN de Tailwind ni de Lucide).
4. Añade al final la sección informativa (qué es, cómo se usa, preguntas frecuentes y apps relacionadas).
5. Añade la tarjeta en `index.html` (y en su JSON-LD `ItemList`) y la URL en `sitemap.xml`.
6. Regenera el CSS y los iconos (ver abajo).

### Regenerar el CSS y los iconos

Las apps usan un CSS de Tailwind compilado y un paquete con solo los iconos de Lucide que necesitan. Si añades clases o iconos nuevos, regenéralos:

```
cd tools
npm install
npm run build
```

## Publicación

Se publica con GitHub Pages desde la rama `main`. El dominio se gestiona en Cloudflare; cada push a `main` sale en un par de minutos.

Para verla en local:

```
python3 -m http.server
```

## Contacto

[hello@surikata3k.com](mailto:hello@surikata3k.com)

## Licencia

Las apps tienen licencia [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.es) (ver [apps/LICENSE](apps/LICENSE)).
