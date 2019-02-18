export interface IScripteditorProps {
    script: string;
    title: string;
    save(script: string): void;
}
