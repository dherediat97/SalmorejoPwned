if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
) {
    var APP_DEVELOPMENT = true;
} else {
    var APP_DEVELOPMENT = false;
}

const BASE_PATH = APP_DEVELOPMENT ? '' : '/SalmorejoPwned';
const CONFIG_URL_WRITE_UP = APP_DEVELOPMENT
    ? '/src/json/config.json'
    : `${BASE_PATH}/json/config.json`;
const CONFIG_URL = APP_DEVELOPMENT
    ? '/src/json/config.json'
    : `${BASE_PATH}/src/json/config.json`;

const WRITE_UP_CAST_URL = APP_DEVELOPMENT
    ? `/src/assets/write-ups/`
    : `${BASE_PATH}/src/assets/write-ups/`;

const I18N_URL = window.location.pathname.includes('write-up.html')
    ? APP_DEVELOPMENT
        ? 'assets/i18n/languages'
        : `${BASE_PATH}/assets/i18n/languages`
    : APP_DEVELOPMENT
      ? 'src/assets/i18n/languages'
      : `${BASE_PATH}/src/assets/i18n/languages`;
const FESTIVE_INTRO = APP_DEVELOPMENT
    ? 'src/assets/special/festive_intro_'
    : `${BASE_PATH}/src/assets/special/festive_intro_`;
const COMMON_INTRO = APP_DEVELOPMENT
    ? 'src/assets/intro.cast'
    : `${BASE_PATH}/src/assets/intro.cast`;
const ctfsAvailable = [];
const CTF_CATEGORIES = [
    'defensive',
    'offensive',
    'forensics',
    'android',
    'ia-hacking',
    'reversing',
    'osint',
];

const THL_PLATFORM = 'https://thehackerslabs.com/';

const PLATFORM_NAMES = {
    'https://www.hackthebox.com/': 'Hack The Box',
    'https://www.tryhackme.com/': 'TryHackMe',
    'https://www.cyberdefenders.org/': 'CyberDefenders',
    'https://thehackerslabs.com/': 'TheHackerLabs',
};

const AUTHOR_BLOGS = {
    'El Pingüino de Mario': 'https://maalfer.github.io/whoami/',
    Oscar: 'https://oscarai.tech/',
    murrusko: '',
    MeTaN01a: '',
    lenam: 'https://len4m.github.io/',
    'condor & CuriosidadesDeHackers': 'https://curiosidadesdehackers.com/about',
};

const THL_CTF_PAGE = 'https://labs.thehackerslabs.com/machine/';

const SELECTED_LANGUAGE_KEY = 'SELECTED_LANGUAGE';
