## Module 5 — Bundled extensions (ecosystem)

First-party extensions ship **in-repo** with the same manifest model as community extensions: `package.json`, activation, contributions.

### Read in the repo

- [extensions/CONTRIBUTING.md](command:engineeringTutorial.openBundledExtensionsContributing)

Pick two extension folders under `education/bundled-extensions/extensions/` and compare their **README** structure: features, APIs, limitations.

### Practice

1. **Extensions** view (`Ctrl+Shift+X`): filter **@builtin** — see what ships with the editor.
2. Read one extension’s **Details** page; map “feature list” to **contributes** fields in its manifest (open the extension folder on GitHub for Code OSS).

### SE takeaway

**Extension boundaries = release boundaries** — stable APIs, semver, and `engines.vscode` matter for compatibility (try the optional **hello-world-extension** sample in this repo if present).
