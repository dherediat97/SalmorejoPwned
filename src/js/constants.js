if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
) {
    var APP_DEVELOPMENT = true;
} else {
    var APP_DEVELOPMENT = false;
}

const CONFIG_URL = 'src/json/config.json';
const I18N_URL = APP_DEVELOPMENT ? '/src/i18n/languages' : 'src/i18n/languages';
const ctfsAvailable = [];
const MUSIC_URL = 'src/json/music.json';
