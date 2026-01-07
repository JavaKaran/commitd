import fs from 'fs';
import os from 'os';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import config from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function installHook() {
    const hooksDir = path.join(os.homedir(), '.git-hooks');
    fs.mkdirSync(hooksDir, { recursive: true });

    const hookPath = path.join(hooksDir, 'post-commit');

    const script = `#!/usr/bin/env sh
# commitd post-commit hook

node "${path.join(__dirname, 'hook.js')}"
`;

    fs.writeFileSync(hookPath, script);
    fs.chmodSync(hookPath, 0o755);

    if (!config.get('prevHooksPath')) {
        try {
            const prev = execSync(
                'git config --global --get core.hooksPath',
                { stdio: 'pipe' }
            ).toString().trim();
            if (prev) config.set('prevHooksPath', prev);
        } catch {
            config.set('prevHooksPath', null);
        }
    }

    execSync('git config --global core.hooksPath ~/.git-hooks', {
        stdio: 'ignore'
    });
}
