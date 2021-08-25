import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { GridSearchSavePreviewProps } from "../typings/GridSearchSaveProps";

declare function require(name: string): string;

export class preview extends Component<GridSearchSavePreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/GridSearchSave.css");
}
