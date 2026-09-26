const fs = require('fs');

const URL_ENDPOINT = "https://vault.thehackerslabs.com/api/machines";
const OUTPUT_FILE = "vault_machines_actualizado.json";

// Listado de laboratorios completados extraídos de tus archivos .cast de la imagen
const maquinasCompletadas = [
    "aceituna_brava",
    "benahoare",
    "el_amigo",
    "kaboom",
    "quokka",
    "sedition",
    "watchstore"
];

// Función para limpiar etiquetas HTML residuales del backend
function cleanHTML(text) {
    if (!text || typeof text !== 'string') return "";
    return text
        .replace(/<\/?[^>]+(>|\$)/g, "")
        .replace(/&amp;/g, "&")
        .trim();
}

// Función para homogeneizar los niveles de dificultad a minúsculas
function formatLevel(level) {
    if (!level) return "easy";
    const lvl = level.toUpperCase().trim();
    if (lvl === "PRINCIPIANTE") return "easy";
    if (lvl === "AVANZADO") return "advanced";
    if (lvl === "PROFESIONAL") return "professional";
    if (lvl === "EXPERTO") return "expert";
    return lvl.toLowerCase();
}

async function parseVault() {
    try {
        console.log("[+] Conectando al endpoint de la plataforma...");
        const response = await fetch(URL_ENDPOINT);
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

        const data = await response.json();
        console.log(`[+] Procesando de forma masiva ${data.machines.length} laboratorios...`);

        const resultadoFinal = data.machines.map(machine => {
            const tituloLimpio = cleanHTML(machine.name);
            
            // Normalizar el título para compararlo con el nombre del archivo de la imagen (minúsculas y guiones bajos)
            const nombreNormalizado = tituloLimpio
                .toLowerCase()
                .trim()
                .replace(/[\s-]+/g, '_') // Reemplaza espacios y guiones por guiones bajos
                .replace(/[^a_z0-9_]/g, ''); // Remueve caracteres especiales raros

            // Comprobar si esta máquina coincide con las de tu listado de la imagen
            const estaHecha = maquinasCompletadas.includes(nombreNormalizado);

            return {
                id: machine.id,
                title: tituloLimpio,
                author: "TheHackersLabs",
                img_url: machine.image_url || "",
                // Si está hecha usa tu estructura local, si no, se deja el string vacío exigido
                writeup_url: estaHecha ? `src/write-up.html#${nombreNormalizado}` : " ",
                machine_url: machine.machine_url || `https://thehackerslabs.com{machine.id}`,
                level: formatLevel(machine.level),
                main_category: "offensive",
                tags: [], // Requisito estricto: Se fuerza a vacío para todas las máquinas
                description: cleanHTML(machine.description || machine.learning_objectives),
                done: estaHecha // Setea true si estaba en la captura, false para el resto
            };
        });

        console.log(`[+] Exportando la estructura limpia al archivo: ${OUTPUT_FILE}`);
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(resultadoFinal, null, 4), 'utf-8');
        console.log("[✔] ¡Fichero JSON masivo generado correctamente!");

    } catch (error) {
        console.error("[❌] Error en el procesador automático:", error.message);
    }
}

parseVault();
