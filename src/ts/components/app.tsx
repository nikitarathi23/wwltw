import * as React from 'react';
import {Base} from './base';

export interface AppProps { title: string; }

export class App extends React.Component<AppProps, {}> {
    public render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Base></Base>
            </div>
        );
    }
}
