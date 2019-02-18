/// <reference types="react" />
import * as React from 'react';
import { IScripteditorProps } from './IScripteditorProps';
export default class Scripteditor extends React.Component<IScripteditorProps, any> {
    constructor(props: any);
    componentDidMount(): void;
    private _showDialog();
    private _closeDialog();
    private _cancelDialog();
    private _onScriptEditorTextChanged(text);
    render(): React.ReactElement<IScripteditorProps>;
}
