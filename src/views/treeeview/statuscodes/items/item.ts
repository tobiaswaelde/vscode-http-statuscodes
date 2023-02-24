import { TreeItem, TreeItemCollapsibleState } from 'vscode';
import { StatusCode } from '../../../../data/status-codes';

export class StatusCodeCodeItem extends TreeItem {
	contextValue = 'statuscode';

	constructor(public code: StatusCode) {
		super(`${code.code} • ${code.title}`, TreeItemCollapsibleState.None);
	}
}
