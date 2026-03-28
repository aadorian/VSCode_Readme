import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext): void {
	const disposable = vscode.commands.registerCommand('helloWorld.sayHello', () => {
		void vscode.window.showInformationMessage(
			'Hello World — this sample follows the Extension API layer described in education/README.md.'
		);
	});
	context.subscriptions.push(disposable);
}

export function deactivate(): void {
	// nothing to dispose beyond subscriptions
}
