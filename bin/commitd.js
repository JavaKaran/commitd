#!/usr/bin/env node
import { Command } from 'commander';
import config from '../lib/config.js';
import { installHook } from '../lib/install.js';
import { uninstallCommitd } from '../lib/uninstall.js';

const program = new Command();

program
    .name('commitd')
    .description('Run small reminders after git commits');

program
    .command('install')
    .action(() => installHook());

program
    .command('enable')
    .action(() => {
        config.set('enabled', true);
        console.log('Commitd enabled');
    });

program
    .command('disable')
    .action(() => {
        config.set('enabled', false);
        console.log('Commitd disabled');
    });

program
    .command('message <text>')
    .action(text => {
        config.set('message', text);
        console.log('Message updated');
    });

program
    .command('color <name>')
    .description('Set message color (red, green, yellow, blue, etc.)')
    .action(name => {
        config.set('color', name);
        console.log(`Color set to ${name}`);
    });

program
    .command('status')
    .action(() => {
        console.log('\nCommitd status');
        console.log('Enabled:', config.get('enabled'));
        console.log('Message:', config.get('message'));
        console.log('Color:', config.get('color'), '\n');
    });

program
    .command('uninstall')
    .description('Remove Commitd and restore git configuration')
    .action(() => uninstallCommitd());

program.parse();
