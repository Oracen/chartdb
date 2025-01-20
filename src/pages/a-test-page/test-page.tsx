import React from 'react';

import EditorDesktopLayoutReduced from '@/pages/editor-page/editor-desktop-layout-reduced';
import { examples } from '@/pages/examples-page/examples-data/examples-data';
import { ReactFlowProvider } from '@xyflow/react';

export function TestPageHome() {
    const diagram = examples[0].diagram;

    return (
        <div className=" w-screen h-screen">
            <h1>Test Page</h1>

            <ReactFlowProvider>
                <EditorDesktopLayoutReduced initialDiagram={diagram} />
            </ReactFlowProvider>
        </div>
    );
}
