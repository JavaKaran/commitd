import chalk from 'chalk';
import config from './config.js';

const ALLOWED_COLORS = new Set([
    'black', 'red', 'green', 'yellow',
    'blue', 'magenta', 'cyan', 'white'
]);

function createBanner(message, color) {
    const painter = ALLOWED_COLORS.has(color)
        ? chalk[color]
        : chalk.yellow;
    
    const dim = chalk.dim;
    const bold = chalk.bold;
    
    const minWidth = 40;
    const contentWidth = Math.max(message.length + 4, minWidth);
    const padding = Math.floor((contentWidth - message.length) / 2);
    const rightPadding = contentWidth - message.length - padding;
    
    const topLeft = '╭';
    const topRight = '╮';
    const bottomLeft = '╰';
    const bottomRight = '╯';
    const horizontal = '─';
    const vertical = '│';
    
    const lines = [];
    
    lines.push('');
    
    const topBorder = `${topLeft}${'─'.repeat(contentWidth)}${topRight}`;
    lines.push(dim(topBorder));
    
    const sparkle = '✦';
    const header = ' COMMITD ';
    const headerPadLeft = Math.floor((contentWidth - header.length - 2) / 2);
    const headerPadRight = contentWidth - header.length - headerPadLeft - 2;
    lines.push(dim(vertical) + ' ' + dim('─'.repeat(headerPadLeft - 1)) + painter(bold(sparkle + header + sparkle)) + dim('─'.repeat(headerPadRight - 1)) + ' ' + dim(vertical));
    
    lines.push(dim(vertical) + ' '.repeat(contentWidth) + dim(vertical));
    
    const msgLine = ' '.repeat(padding) + painter(bold(message)) + ' '.repeat(rightPadding);
    lines.push(dim(vertical) + msgLine + dim(vertical));
    
    lines.push(dim(vertical) + ' '.repeat(contentWidth) + dim(vertical));
    
    const bottomBorder = `${bottomLeft}${'─'.repeat(contentWidth)}${bottomRight}`;
    lines.push(dim(bottomBorder));
    
    lines.push('');
    
    return lines.join('\n');
}

export function runHook() {
    if (!config.get('enabled')) return;

    const message = config.get('message');
    const color = config.get('color');

    console.log(createBanner(message, color));
}

runHook();
