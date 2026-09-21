# Blueprint Studio Marketplace

Official plugin marketplace for [Blueprint Studio](https://blueprintstudio.ai). The existing repository URL is retained for compatibility.

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


## Codex

After the Blueprint Studio v2 plugin release is merged:

```bash
codex plugin marketplace add https://github.com/Blueprint-Studio-AI/claude-code-marketplace.git
codex plugin add blueprint-studio@blueprint-studio-marketplace
codex mcp login asset-generator
```

Choose the intended organization during authorization. Restart or open a fresh agent thread to load new tools and skills. This installs the same Blueprint package used by Claude Code, not a separate client-specific plugin. The Codex catalog currently includes Blueprint Studio only; the existing Claude Code conch entry is preserved.

The public package contains optional workflow guidance and a remote MCP URL. Brand files and permission-scoped workspace data stay in their existing services. Installing a plugin does not make private repositories or project tasks accessible. Public app-directory approval is a separate process.

## Maintain one catalog

`.claude-plugin/marketplace.json` is the source catalog. After changing the Blueprint entry, run `node scripts/sync-codex-marketplace.mjs` and verify with `node scripts/sync-codex-marketplace.mjs --check`. The generated `.agents/plugins/marketplace.json` is the Codex-compatible projection. Keep the plugin name `blueprint-studio` and historical URLs stable to preserve existing installs.
