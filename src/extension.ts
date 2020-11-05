import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('active-editor.echoActiveEditor', () => {
        echoEditor(vscode.window.activeTextEditor);
    });
    vscode.window.onDidChangeActiveTextEditor(e => {
        echoEditor(e);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }

/**
 * Echo the active text editor.
 * @param activeEditor the active text editor if it exists.
 */
export function echoEditor(activeEditor?: vscode.TextEditor): void {
    vscode.window.showInformationMessage(`Active Text Editor: ${activeEditor?.document.fileName}`);
}
