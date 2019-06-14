import '../lib/wasm_exec.js';

export class Wasm {
    constructor() {
        this.modFolder = this._getModFolder();
        this.go = new global.Go();
    }

    async load() {
        const main = fetch(this.modFolder + 'go/main.wasm');
        await WebAssembly.instantiateStreaming(main, this.go.importObject).then((result) => {
            this.instance = result.instance;
        });
    }

    run() {
        this.go.run(this.instance);
    }

    /**
     * @returns {string}
     */
    _getModFolder() {
        return window.activeMods
            .find((mod) => mod.name === 'wasm-demo')
            .baseDirectory
            .substr(7);
    }
}