import { StatusCodesProvider } from './views/treeeview/statuscodes/index';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	vscode.window.createTreeView('http-statuscodes-explorer', {
		treeDataProvider: new StatusCodesProvider(),
	});
}

export function deactivate() {
	//
}
