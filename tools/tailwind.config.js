// Configuración de Tailwind para las apps (antes estaba en línea en cada página con el CDN de pruebas).
module.exports = {
  content: ['../apps/**/*.html'],
  theme: { extend: { fontFamily: { sans: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] } } },
};
