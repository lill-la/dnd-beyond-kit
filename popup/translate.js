// `currentBrowser` is defined in ./script.js

const title       = document.getElementById('title');
const choose_lang = document.getElementById('choose_language');
const choose_opt  = document.getElementById('choose_language_option');
const thanks      = document.getElementById('thanks');
const convertToSI = document.getElementById('convertToSI');
const version     = document.getElementById('extension-version');
const settings    = document.getElementById('settingsTitle');
const spells      = document.getElementById('translateSpells');
const githubSetti = document.getElementById('moreSettingsQuestion');

if (title)       title.innerText       = currentBrowser.i18n.getMessage("title");
if (choose_lang) choose_lang.innerText = currentBrowser.i18n.getMessage("choose_language");
if (choose_opt)  choose_opt.innerText  = currentBrowser.i18n.getMessage("choose_language_option");
if (thanks)      thanks.innerText      = currentBrowser.i18n.getMessage("thanks");
if (convertToSI) convertToSI.innerText = currentBrowser.i18n.getMessage("convertToSI");
if (version)     version.innerText     = `v${currentBrowser.runtime.getManifest().version}`
if (settings)    settings.innerText    = currentBrowser.i18n.getMessage("settingsTitle");
if (spells)      spells.innerText      = currentBrowser.i18n.getMessage("translateSpells");
if (githubSetti) githubSetti.innerText = currentBrowser.i18n.getMessage("moreSettingsQuestion");
