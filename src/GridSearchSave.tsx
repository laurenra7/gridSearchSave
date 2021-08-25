import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { GridSearchSaveContainerProps } from "../typings/GridSearchSaveProps";

import "./ui/GridSearchSave.css";

export default class GridSearchSave extends Component<GridSearchSaveContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
