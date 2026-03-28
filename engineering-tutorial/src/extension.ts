import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

const EXTENSION_ID = 'vscode-readme-education.engineering-tutorial';
const WALKTHROUGH_ID = 'vscodeSECollaborationTour';

/** Folder that contains education/README.md (works with multi-root: extension + repo). */
function syllabusRepoRoot(): string | undefined {
	for (const folder of vscode.workspace.workspaceFolders ?? []) {
		const marker = path.join(folder.uri.fsPath, 'education', 'README.md');
		if (fs.existsSync(marker)) {
			return folder.uri.fsPath;
		}
	}
	return undefined;
}

async function openRelative(...segments: string[]): Promise<void> {
	const root = syllabusRepoRoot();
	if (!root) {
		void vscode.window.showWarningMessage(
			'Open the VSCode_Readme repository as a workspace folder to jump into the syllabus files.'
		);
		return;
	}
	const fsPath = path.join(root, ...segments);
	try {
		const doc = await vscode.workspace.openTextDocument(fsPath);
		await vscode.window.showTextDocument(doc, { preview: false });
	} catch {
		void vscode.window.showErrorMessage(`Could not open: ${segments.join('/')}`);
	}
}

export function activate(context: vscode.ExtensionContext): void {
	const register = (command: string, segments: string[]) =>
		vscode.commands.registerCommand(command, () => openRelative(...segments));

	context.subscriptions.push(
		register('engineeringTutorial.openSyllabus', ['education', 'README.md']),
		register('engineeringTutorial.openCodeOssOverview', [
			'education',
			'open-source-community',
			'code-oss-repository-overview.md'
		]),
		register('engineeringTutorial.openContributing', ['education', 'open-source-community', 'CONTRIBUTING.md']),
		register('engineeringTutorial.openPullRequestTemplate', [
			'education',
			'collaboration-workflows',
			'pull_request_template.md'
		]),
		register('engineeringTutorial.openCopilotInstructions', [
			'education',
			'architecture-and-core',
			'copilot-instructions.md'
		]),
		register('engineeringTutorial.openSessionsReadme', [
			'education',
			'sessions-chat-and-agents',
			'sessions',
			'README.md'
		]),
		register('engineeringTutorial.openBundledExtensionsContributing', [
			'education',
			'bundled-extensions',
			'extensions',
			'CONTRIBUTING.md'
		]),
		register('engineeringTutorial.openDevcontainerReadme', [
			'education',
			'engineering-tooling',
			'devcontainer',
			'README.md'
		]),
		vscode.commands.registerCommand('engineeringTutorial.openThisWalkthrough', async () => {
			await vscode.commands.executeCommand(
				'workbench.action.openWalkthrough',
				`${EXTENSION_ID}#${WALKTHROUGH_ID}`
			);
		})
	);
}

export function deactivate(): void {}
