import { STATUS_CODES_GROUPS } from './../../../data/status-codes';
import { TreeDataProvider, TreeItem } from 'vscode';
import { StatusCodeItem } from './items';
import { StatusCodeGroupItem } from './items/group-item';

export class StatusCodesProvider implements TreeDataProvider<StatusCodeItem> {
	constructor() {
		//
	}

	getTreeItem(element: StatusCodeItem): TreeItem | Thenable<TreeItem> {
		return element;
	}

	async getChildren(element?: StatusCodeItem | undefined): Promise<StatusCodeItem[]> {
		if (element === undefined) {
			return STATUS_CODES_GROUPS.map((group) => new StatusCodeGroupItem(group));
		}

		if (element instanceof StatusCodeGroupItem) {
			return element.getChildren();
		}

		return [];
	}
}
