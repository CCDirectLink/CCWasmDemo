import { Wasm } from './wasm.js';

async function main() {
    const wasm = new Wasm();
    await wasm.load();
    wasm.run();
}


main()
    .then(() => console.log('load finished'))
    .catch(err => console.error(err));