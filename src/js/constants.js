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
const INTRO_CAST = 'src/assets/intro.cast';
const ctfsAvailable = [];
const MUSIC_URL = 'src/json/music.json';
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
