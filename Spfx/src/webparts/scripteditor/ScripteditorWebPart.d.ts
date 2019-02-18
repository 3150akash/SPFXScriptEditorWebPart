import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IScriptEditorWebPartProps } from './IScriptEditorWebPartProps';
export default class ScripteditorWebPart extends BaseClientSideWebPart<IScriptEditorWebPartProps> {
    save: (script: string) => void;
    render(): Promise<void>;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
    protected readonly dataVersion: Version;
    private evalScript(elem);
    private nodeName(elem, name);
    private executeScript(element);
}
