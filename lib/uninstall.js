import fs from 'fs';
import os from 'os';
import path from 'path';
import { execSync } from 'child_process';
import config from './config.js';

export function uninstallCommitd() {
    const hooksDir = path.join(os.homedir(), '.git-hooks');
    const hookPath = path.join(hooksDir, 'post-commit');

    try {
        if (fs.existsSync(hookPath)) {
            fs.unlinkSync(hookPath);
        }
    } catch {
    }

    const prevHooksPath = config.get('prevHooksPath');

    try {
        if (prevHooksPath) {
            execSync(`git config --global core.hooksPath "${prevHooksPath}"`, {
                stdio: 'ignore'
            });
        } else {
            execSync(
                'git config --global --get core.hooksPath',
                { stdio: 'ignore' }
            );
            execSync(
                'git config --global --unset core.hooksPath',
                { stdio: 'ignore' }
            );
        }
    } catch {
    }

    try {
        config.clear();
    } catch {
    }

    console.log('Commitd uninstalled');
    console.log('Git configuration cleaned');
}
