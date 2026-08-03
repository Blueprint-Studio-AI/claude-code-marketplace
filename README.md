# Blueprint Studio — Claude Code Marketplace

Official plugin marketplace for [Blueprint Studio](https://blueprintstudio.ai) Claude Code plugins.

## Installation

### 1. Add the marketplace

```bash
/plugin marketplace add Blueprint-Studio-AI/claude-code-marketplace
```

### 2. Install a plugin

```bash
/plugin install blueprint-studio@blueprint-studio-marketplace
```

That's it — Claude Code will open your browser to sign in with your Blueprint Studio account. No API keys needed.

## Available Plugins

| Plugin | Description |
|--------|-------------|
| [blueprint-studio](https://github.com/Blueprint-Studio-AI/claude-code-asset-generator) | Generate AI assets, manage brands, invite team members, and customize styles |
| [conch](https://github.com/stupart/conch) | A voice loop for Claude Code — your sessions speak their finished turns, the mic opens, and you talk the next prompt straight back |

## conch — one extra step

The `conch` plugin drives a local daemon, so it needs the conch CLI installed:

```bash
brew install stupart/tap/conch
conch setup
```

Then `/plugin install conch@blueprint-studio-marketplace`. Without the CLI the
plugin's tools will report that conch is not installed.
