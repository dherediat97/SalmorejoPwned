const fs = require('fs');
const path = require('path');

// Ajusta la ruta a donde tengas tu JSON con las imágenes de las máquinas
const maquinas = JSON.parse(fs.readFileSync('./src/json/config.json', 'utf8'));

maquinas.forEach(maquina => {
    const htmlContenido = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>SalmorejoPwned - ${maquina.title}</title>
    <meta property="og:title" content="SalmorejoPwned - Write-up ${maquina.title}">
    <meta property="og:image" content="${maquina.img_url}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:image" content="${maquina.img_url}">
    <script>window.location.href = "write-up.html#${maquina.title.toLowerCase().replace(/\s+/g, '_')}";</script>
</head>
<body>Redirigiendo...</body>
</html>`;

    fs.writeFileSync(path.join(__dirname, `src/${maquina.id}.html`), htmlContenido);
});

console.log(`¡Se han generado ${maquinas.length} páginas puente de previsualización!`);
