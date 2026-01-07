# commitd

<p align="center">
  <img src="https://img.shields.io/npm/v/commitd?color=blue&style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/l/commitd?style=flat-square" alt="license" />
  <img src="https://img.shields.io/node/v/commitd?style=flat-square" alt="node version" />
</p>

<p align="center">
  <strong>Display beautiful reminders in your terminal after every git commit</strong>
</p>

---

Build healthy habits by showing yourself a motivational message, reminder, or challenge after each commit. Perfect for:

- 💪 Fitness reminders ("Time for 5 pushups!")
- 💧 Hydration checks ("Drink some water!")
- 👀 Eye strain prevention ("Look away from the screen!")
- 🧘 Mindfulness prompts ("Take a deep breath!")

## Installation

```bash
npm install -g commitd
```

That's it! Commitd automatically installs a global git hook and is ready to use.

## Usage

### Set your message

```bash
commitd message "Time for 5 pushups!"
```

### Change the color

```bash
commitd color cyan
```

Available colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

### Check status

```bash
commitd status
```

### Temporarily disable

```bash
commitd disable
```

### Re-enable

```bash
commitd enable
```

### Uninstall

```bash
commitd uninstall
npm uninstall -g commitd
```

## Commands

| Command | Description |
|---------|-------------|
| `commitd message <text>` | Set the reminder message |
| `commitd color <name>` | Set the message color |
| `commitd enable` | Enable the reminder |
| `commitd disable` | Disable the reminder |
| `commitd status` | Show current configuration |
| `commitd install` | Reinstall the git hook |
| `commitd uninstall` | Remove commitd and restore git config |

## Requirements

- Node.js 18.0.0 or higher
- Git

## License

MIT © Karan Sharma

