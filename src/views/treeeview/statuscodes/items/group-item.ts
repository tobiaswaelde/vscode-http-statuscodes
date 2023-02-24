import { StatusCodeItem } from './index';
import { STATUS_CODES } from './../../../../data/status-codes';
import { MarkdownString, TreeItem, TreeItemCollapsibleState } from 'vscode';
import { StatusCodeGroup } from '../../../../data/status-codes';
import { StatusCodeCodeItem } from './item';

export class StatusCodeGroupItem extends TreeItem {
	contextValue = 'statuscode.group';

	constructor(public group: StatusCodeGroup) {
		super(`${group.code} • ${group.title}`, TreeItemCollapsibleState.Expanded);

		if (this.group.description) {
			this.tooltip = new MarkdownString(group.description);
		} else {
			this.tooltip = '';
		}
	}

	public async getChildren(): Promise<StatusCodeCodeItem[]> {
		const statusCodes = STATUS_CODES.filter(
			(x) => x.code >= this.group.min && x.code <= this.group.max
		);
		return statusCodes.map((x) => new StatusCodeCodeItem(x));
	}
}
