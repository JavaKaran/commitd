import config from './config.js';
import { installHook } from './install.js';

function run() {
    console.log('Running postinstall');
    console.log('config.get("installed"):', config.get('installed'));
    if (config.get('installed')) return;

    try {
        installHook();

        config.set('enabled', true);
        config.set('installed', true);

        console.log('\nCommitd installed successfully');
        console.log('Run `commitd` to configure your message\n');
    } catch (err) {
    }
}

run();