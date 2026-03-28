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

async function showMarkdownPreview(uri: vscode.Uri): Promise<boolean> {
	for (const cmd of ['markdown.showPreviewToSide', 'markdown.showPreview'] as const) {
		try {
			await vscode.commands.executeCommand(cmd, uri);
			return true;
		} catch {
			// try next built-in command variant
		}
	}
	void vscode.window.showWarningMessage(
		'Could not open a Markdown preview. Enable the built-in "Markdown Language Features" extension.'
	);
	return false;
}

async function previewRepoFile(...segments: string[]): Promise<void> {
	const root = syllabusRepoRoot();
	if (!root) {
		void vscode.window.showWarningMessage(
			'Open the VSCode_Readme repository as a workspace folder to preview syllabus Markdown.'
		);
		return;
	}
	const uri = vscode.Uri.file(path.join(root, ...segments));
	await showMarkdownPreview(uri);
}

function previewWalkthroughAfterOpen(): void {
	const root = syllabusRepoRoot();
	if (!root) {
		return;
	}
	const uri = vscode.Uri.file(path.join(root, 'education', 'README.md'));
	void (async () => {
		await new Promise((r) => setTimeout(r, 600));
		await showMarkdownPreview(uri);
	})();
}

export function activate(context: vscode.ExtensionContext): void {
	const registerOpen = (command: string, segments: string[]) =>
		vscode.commands.registerCommand(command, () => openRelative(...segments));

	const registerPreview = (command: string, segments: string[]) =>
		vscode.commands.registerCommand(command, () => previewRepoFile(...segments));

	const registerPreviewExt = (command: string, ...segments: string[]) =>
		vscode.commands.registerCommand(command, () =>
			showMarkdownPreview(vscode.Uri.joinPath(context.extensionUri, ...segments))
		);

	context.subscriptions.push(
		registerOpen('engineeringTutorial.openSyllabus', ['education', 'README.md']),
		registerOpen('engineeringTutorial.openCodeOssOverview', [
			'education',
			'open-source-community',
			'code-oss-repository-overview.md'
		]),
		registerOpen('engineeringTutorial.openContributing', ['education', 'open-source-community', 'CONTRIBUTING.md']),
		registerOpen('engineeringTutorial.openPullRequestTemplate', [
			'education',
			'collaboration-workflows',
			'pull_request_template.md'
		]),
		registerOpen('engineeringTutorial.openCopilotInstructions', [
			'education',
			'architecture-and-core',
			'copilot-instructions.md'
		]),
		registerOpen('engineeringTutorial.openSessionsReadme', [
			'education',
			'sessions-chat-and-agents',
			'sessions',
			'README.md'
		]),
		registerOpen('engineeringTutorial.openBundledExtensionsContributing', [
			'education',
			'bundled-extensions',
			'extensions',
			'CONTRIBUTING.md'
		]),
		registerOpen('engineeringTutorial.openDevcontainerReadme', [
			'education',
			'engineering-tooling',
			'devcontainer',
			'README.md'
		]),
		registerPreview('engineeringTutorial.previewSyllabus', ['education', 'README.md']),
		registerPreview('engineeringTutorial.previewCodeOssOverview', [
			'education',
			'open-source-community',
			'code-oss-repository-overview.md'
		]),
		registerPreview('engineeringTutorial.previewContributing', ['education', 'open-source-community', 'CONTRIBUTING.md']),
		registerPreview('engineeringTutorial.previewPullRequestTemplate', [
			'education',
			'collaboration-workflows',
			'pull_request_template.md'
		]),
		registerPreview('engineeringTutorial.previewCopilotInstructions', [
			'education',
			'architecture-and-core',
			'copilot-instructions.md'
		]),
		registerPreview('engineeringTutorial.previewSessionsReadme', [
			'education',
			'sessions-chat-and-agents',
			'sessions',
			'README.md'
		]),
		registerPreview('engineeringTutorial.previewBundledExtensionsContributing', [
			'education',
			'bundled-extensions',
			'extensions',
			'CONTRIBUTING.md'
		]),
		registerPreview('engineeringTutorial.previewDevcontainerReadme', [
			'education',
			'engineering-tooling',
			'devcontainer',
			'README.md'
		]),
		registerPreviewExt('engineeringTutorial.previewWalkthroughDailyPractices', 'walkthrough', '08-vscode-practices.md'),
		vscode.commands.registerCommand('engineeringTutorial.openThisWalkthrough', async () => {
			await vscode.commands.executeCommand(
				'workbench.action.openWalkthrough',
				`${EXTENSION_ID}#${WALKTHROUGH_ID}`
			);
			previewWalkthroughAfterOpen();
		})
	);
}

export function deactivate(): void {}
