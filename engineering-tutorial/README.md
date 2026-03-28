# Engineering tutorial extension

Interactive **walkthrough** + **commands** that teach software engineering practice using VS Code, aligned with the repository **[education/README.md](../education/README.md)**.

## What you get

- **Walkthrough:** *Software engineering on VS Code (open collaboration tour)* — 9 steps from open source → GitHub → architecture → sessions → extensions → tooling → daily habits.
- **Commands:** Palette entries prefixed with **SE Tutorial:** open the matching syllabus files when this repo is the workspace root.
- **Markdown visualization:** Each step links to **Preview … (Markdown)** commands that call the built-in `markdown.showPreviewToSide` / `markdown.showPreview` APIs so tables and headings render readably. Step panels also embed **SVG** diagrams under `walkthrough/media/`.
- **Open walkthrough from palette:** **SE Tutorial: Open this walkthrough (+ syllabus preview)** opens the tour and, after a short delay, opens a **preview** of `education/README.md` beside the editor (requires the repo root in the workspace).
- **Welcome → Walkthroughs:** If you start the tour from the Welcome page, use **Preview syllabus (Markdown)** on step 1 (or any step’s preview link) to open the rendered view.

## Run for development

1. Open the **repository root** in VS Code (folder that contains `education/`).
2. Open the folder **`engineering-tutorial/`** (File → Add Folder to Workspace…, or open only this subfolder for F5—see below).
3. `cd engineering-tutorial && npm install && npm run compile`
4. **Run and Debug** → **Run Extension**.

### Important: workspace for F5

- **Best:** Multi-root workspace: add **repo root** + `engineering-tutorial` so walkthrough commands find `education/` while developing the extension.
- **Or:** Launch from `engineering-tutorial` only; **SE Tutorial:** file openers will warn until you open the full repo root.

## Open the walkthrough after launch

In the **Extension Development Host** window:

- **Help → Welcome**, then **Walkthroughs**, and pick the tour; or  
- Command Palette: **SE Tutorial: Open this walkthrough**.

## Build vsix (optional)

```bash
npm install -g @vscode/vsce
vsce package
```

Published extensions need a real publisher on the Marketplace; for class use, side-load the `.vsix` or run from source with F5.

## Learn more

- [Walkthroughs API](https://code.visualstudio.com/api/ux-guidelines/walkthroughs)
