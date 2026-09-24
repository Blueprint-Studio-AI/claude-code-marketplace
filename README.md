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

## conch has moved

conch is now distributed from its own catalog, [stupart/conch](https://github.com/stupart/conch), and is no longer listed here. Installing from the new catalog first means you are never without it:

```bash
/plugin marketplace add stupart/conch
/plugin install conch@conch-plugins
```

Once that works, remove the old copy with `/plugin uninstall conch@blueprint-studio-marketplace`. Claude Code 2.1.193+ retires the old enabled entry with a removal notice when this catalog refreshes; it does not automatically install the new source. Older versions may show plugin-not-found until the old installation is removed. Avoid keeping both copies enabled, which would register the conch tools twice. If you set up conch with `conch setup` / `conch install-plugin`, you already have the local `conch@conch` plugin and can skip all of this. The conch CLI (`brew install stupart/tap/conch && conch setup`) is still required.

## Codex

Install Blueprint Studio for Codex:

```bash
codex plugin marketplace add https://github.com/Blueprint-Studio-AI/claude-code-marketplace.git
codex plugin add blueprint-studio@blueprint-studio-marketplace
codex mcp login asset-generator
```

Authorize your Blueprint account, then use `list_brands` and pass the intended `brandId` on each call. Existing workspace-only authorizations need one renewed login for account-wide access; a separate API key is not required. Open a fresh agent thread to load new tools and skills. This installs the same Blueprint package used by Claude Code, not a separate client-specific plugin. The Codex catalog includes Blueprint Studio only.

The public package contains optional workflow guidance and a remote MCP URL. Brand files and permission-scoped workspace data stay in their existing services. Installing a plugin does not make private repositories or project tasks accessible. Public app-directory approval is a separate process.

## One toolkit source; stable install catalog

All Blueprint toolkit content, versions, licensing, and platform metadata are maintained in [the canonical toolkit repository](https://github.com/Blueprint-Studio-AI/claude-code-asset-generator). This repository only points to it. The Blueprint catalog entry intentionally omits version and duplicated metadata so releases resolve those fields from the plugin itself. You do not need to update this repository when changing skills or releasing a toolkit version.

Only edit this catalog when adding/removing a plugin or changing its source. After that structural change, run `node scripts/sync-codex-marketplace.mjs` and verify with `node scripts/sync-codex-marketplace.mjs --check`. The generated `.agents/plugins/marketplace.json` is the Codex-compatible projection. Keep plugin and marketplace names and historical URLs stable.
