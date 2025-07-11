
// IMPORTS
const EUNOIA_ENGINE = require('babylonjs');

// CONFIGURATIONS

// CANVAS
const CANVAS = document.querySelector('#viewport');
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

// VARS
/** @type { EUNOIA_ENGINE.WebGPUEngine } */ var ENGINE = null;
/** @type { EUNOIA_ENGINE.Scene } */ var SCENE = null;
/** @type { EUNOIA_ENGINE.FlyCamera } */ var VIEWPORT_CAMERA = null;

// INIT
const INIT_ENGINE = async () => {
    // ENGINE ? AWAIT
    ENGINE = new EUNOIA_ENGINE.WebGPUEngine(CANVAS);
    await ENGINE.initAsync();
    // SCENE
    SCENE = new EUNOIA_ENGINE.Scene(ENGINE);
    // VIEWPORT CAMERA
    VIEWPORT_CAMERA = new EUNOIA_ENGINE.FlyCamera(
        'Viewport-Camera',
        EUNOIA_ENGINE.Vector3.Zero(),
        SCENE, true
    );
    VIEWPORT_CAMERA.attachControl(true);
    // RENDER LOOP
    ENGINE.runRenderLoop(() => {
        SCENE.render(VIEWPORT_CAMERA);
    });
    // RESIZE WINDOW
    window.addEventListener('resize', () => { ENGINE.resize(true) });
}

await INIT_ENGINE();