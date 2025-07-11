
const { BrowserWindow, app } = require('electron');

const WINDOW_CONFIGURATIONS = {
    width: 1024,
    height: 720,
    frame: true,
    autoHideMenuBar: true,
    center: true,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        backgroundThrottling: false
    }
};

const CREATE_MAIN_WINDOW = () => {
    const WINODW = new BrowserWindow(WINDOW_CONFIGURATIONS);

    WINODW.maximize();
    WINODW.loadFile('Editor/index.html');
};

app.on('ready', () => { CREATE_MAIN_WINDOW() });