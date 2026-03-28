# Open source Visual Studio Code: collaboration platform (learning map)

This repository is organized as a **self-contained reading path** through how [Visual Studio Code](https://code.visualstudio.com) is built in the open, how contributors coordinate on GitHub, and how the product layers **sessions, chat, and agent tooling** on top of a shared editor core. Material is grouped by theme—not by the historical layout of the upstream [microsoft/vscode](https://github.com/microsoft/vscode) tree.

Start anywhere, but the order below matches a typical “from community to code” progression.

**Optional:** Install and run the **[engineering-tutorial](../engineering-tutorial/)** VS Code extension from this repository for an interactive walkthrough and **SE Tutorial:** commands that open the files below.

---

## 1. Open source community

**Path:** [`open-source-community/`](open-source-community/)

| Resource | Why it matters |
|----------|----------------|
| [`code-oss-repository-overview.md`](open-source-community/code-oss-repository-overview.md) | What “Code - OSS” is versus the VS Code product, and how the community participates. |
| [`CONTRIBUTING.md`](open-source-community/CONTRIBUTING.md) | Expectations and entry points for contributors. |
| [`SECURITY.md`](open-source-community/SECURITY.md) | Responsible disclosure and security process. |

---

## 2. Collaboration workflows (issues, PRs, GitHub)

**Path:** [`collaboration-workflows/`](collaboration-workflows/)

| Resource | Why it matters |
|----------|----------------|
| [`ISSUE_TEMPLATE/`](collaboration-workflows/ISSUE_TEMPLATE/) | How the project structures bug reports and feature requests. |
| [`pull_request_template.md`](collaboration-workflows/pull_request_template.md) | What maintainers ask for in a pull request. |
| [`skill-author-contributions/`](collaboration-workflows/skill-author-contributions/) | Automation around author attribution in the upstream repo. |
| [`pr-template-fixtures-from-github-extension/`](collaboration-workflows/pr-template-fixtures-from-github-extension/) | Fixture workspaces used to exercise GitHub PR template discovery. |

**Related (product integration):** Git, GitHub, and authentication are implemented as **bundled extensions**—see [`bundled-extensions/extensions/git/`](bundled-extensions/extensions/git/), [`git-base/`](bundled-extensions/extensions/git-base/), [`github/`](bundled-extensions/extensions/github/), and [`github-authentication/`](bundled-extensions/extensions/github-authentication/).

---

## 3. Architecture and core surfaces

**Path:** [`architecture-and-core/`](architecture-and-core/)

| Resource | Why it matters |
|----------|----------------|
| [`copilot-instructions.md`](architecture-and-core/copilot-instructions.md) | High-level map of layers (`base` → `platform` → `editor` → `workbench`), extensions, and validation habits used by contributors. |
| [`agent-host/`](architecture-and-core/agent-host/) | Design notes and protocol for the agent host (how agentic features tie into the platform). |
| [`vscode-dts/`](architecture-and-core/vscode-dts/) | Extension API typings and how they are documented upstream. |
| [`terminal-contrib/`](architecture-and-core/terminal-contrib/), [`image-carousel/`](architecture-and-core/image-carousel/) | Examples of workbench contribution areas. |
| [`codicon/`](architecture-and-core/codicon/), [`editor-snippet-contribution.md`](architecture-and-core/editor-snippet-contribution.md), [`editor-diffing-tests/`](architecture-and-core/editor-diffing-tests/) | Smaller, focused docs on UI and editor behavior. |

---

## 4. Sessions, chat, and agent collaboration in the workbench

**Path:** [`sessions-chat-and-agents/`](sessions-chat-and-agents/)

| Resource | Why it matters |
|----------|----------------|
| [`sessions/`](sessions-chat-and-agents/sessions/) | Sessions layer: layout, provider model, customization, skills (e.g. PR flow), and E2E scenario docs. |
| [`workbench-chat/`](sessions-chat-and-agents/workbench-chat/) | How chat is organized in the workbench and how agent plugins fit in. |
| [`copilot-agent-docs/`](sessions-chat-and-agents/copilot-agent-docs/) | Short agent-oriented docs used in the GitHub-side automation for this codebase. |

---

## 5. Bundled extensions (first-party ecosystem)

**Path:** [`bundled-extensions/extensions/`](bundled-extensions/extensions/)

First-party extensions ship **in the same repository** as the editor. Exploring their READMEs shows how language support, SCM, GitHub integration, themes, and tooling are packaged and documented.

---

## 6. Engineering tooling (build, test, dev environments, AI ops)

**Path:** [`engineering-tooling/`](engineering-tooling/)

| Area | Path |
|------|------|
| Dev container / Codespaces | [`devcontainer/`](engineering-tooling/devcontainer/) |
| Build / Monaco notes | [`build/`](engineering-tooling/build/) |
| CLI | [`cli/`](engineering-tooling/cli/) |
| Tests (unit, integration, smoke, etc.) | [`test/`](engineering-tooling/test/) |
| Copilot prompts | [`github/prompts/`](engineering-tooling/github/prompts/) |
| Copilot skills (CI, hygiene, sessions layout, …) | [`github/copilot-skills/`](engineering-tooling/github/copilot-skills/) |
| Contributor / code instructions for assistants | [`github/instructions/`](engineering-tooling/github/instructions/) |
| Local agent skills (workspace) | [`local-agent-skills/`](engineering-tooling/local-agent-skills/) |
| ESLint plugin (local) | [`eslint-plugin-local/`](engineering-tooling/eslint-plugin-local/) |

---

## Using this repository

- **Students:** Follow sections 1 → 6, skimming `copilot-instructions.md` early for orientation, then deep-diving into `sessions/` and `bundled-extensions/` as needed.
- **Teachers:** Assign modules by folder; pair **collaboration-workflows** with **bundled-extensions** Git/GitHub READMEs for a full “open collaboration” story.
- **Upstream:** This layout is **pedagogical**; for building VS Code from source, always follow the official [How to Contribute](https://github.com/microsoft/vscode/wiki/How-to-Contribute) wiki and the current tree in [microsoft/vscode](https://github.com/microsoft/vscode).
