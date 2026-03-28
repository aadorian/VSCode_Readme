# Hello World extension (education sample)

This folder is a **minimal VS Code extension** that matches the story in the repo root [README.md](../README.md) and [education/README.md](../education/README.md): real collaboration on Code - OSS happens through **extensions** that use the [Extension API](https://code.visualstudio.com/api).

## How it maps to the tour

| Idea in `education/README.md` | This sample |
|--------------------------------|-------------|
| Bundled extensions ship beside the editor | Same `package.json` + `contributes` shape as first-party extensions (see `education/bundled-extensions/extensions/`). |
| `vscode-dts` / stable API | Uses `vscode` types via `@types/vscode` (same surface as upstream typings). |
| Engineering workflow | Compile with TypeScript; press **F5** to launch an Extension Development Host. |

## Run it

1. `cd hello-world-extension`
2. `npm install`
3. `npm run compile`
4. In VS Code: **Run and Debug** → **Run Extension**, or open this folder and press **F5**.
5. In the new window, open the Command Palette (**⇧⌘P** / **Ctrl+Shift+P**) and run **Hello World: Say Hello**.

## Files

- `package.json` — manifest (`activationEvents`, `contributes.commands`, `main`).
- `src/extension.ts` — registers a command (typical extension entry).
- `tsconfig.json` — emits CommonJS into `out/`.

Upstream reference: [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension).
