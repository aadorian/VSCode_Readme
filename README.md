# VS Code open collaboration — educational documentation set

This repository collects **documentation and fixtures** from the open-source **Visual Studio Code (“Code - OSS”)** world, rearranged for learning: how the community collaborates, how the product is structured, and how **sessions, chat, and agent features** sit on top of the same platform.

It is **not** a full clone of the VS Code source tree—only material useful for understanding the **open collaboration platform** (governance, GitHub workflows, architecture notes, bundled extensions, and engineering tooling).

## Start here

Read the learning map and folder guide:

**[education/README.md](education/README.md)**

## Interactive tutorial (walkthrough extension)

Step-by-step **Software engineering on VS Code** tour (aligned with `education/README.md`) ships as **[engineering-tutorial/](engineering-tutorial/)**:

1. Open **[VSCode_Readme.code-workspace](VSCode_Readme.code-workspace)** (or add repo root + `engineering-tutorial/` to one workspace).
2. In `engineering-tutorial/`: `npm install` and `npm run compile`.
3. With the `engineering-tutorial` folder active, **Run and Debug → Run Extension**.
4. In the new window: **Help → Welcome → Walkthroughs**, or Command Palette → **SE Tutorial: Open this walkthrough**.

## Hello world (Extension API sample)

If present, a minimal extension sample lives in **[hello-world-extension/](hello-world-extension/)** — see its README for **F5** steps.

## Quick links

| Topic | Location |
|--------|-----------|
| What Code - OSS is and how to contribute | [education/open-source-community/](education/open-source-community/) |
| Issues, PRs, templates | [education/collaboration-workflows/](education/collaboration-workflows/) |
| Layers, agent host, extension API docs | [education/architecture-and-core/](education/architecture-and-core/) |
| Sessions, workbench chat, agent docs | [education/sessions-chat-and-agents/](education/sessions-chat-and-agents/) |
| Built-in extensions | [education/bundled-extensions/extensions/](education/bundled-extensions/extensions/) |
| Build, test, devcontainer, Copilot ops | [education/engineering-tooling/](education/engineering-tooling/) |

## Canonical upstream

Product development happens in **[microsoft/vscode](https://github.com/microsoft/vscode)**. Use this repo as a **curated tour**; link back to upstream for issues, PRs, and the latest code.
