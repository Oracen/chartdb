import React, { useEffect } from 'react';

import EditorDesktopLayoutReduced from '@/pages/editor-page/editor-desktop-layout-reduced';
import { examples } from '@/pages/examples-page/examples-data/examples-data';
import { ReactFlowProvider } from '@xyflow/react';

export function TestPageHome() {
    const diagram = examples[0].diagram;

    const [initialDiagram, setInitialDiagram] = React.useState(diagram);

    useEffect(() => {
        setInitialDiagram(diagram);
        console.log(initialDiagram);
    }, []);
    return (
        <div>
            <h1>Test Page</h1>

            <ReactFlowProvider>
                <EditorDesktopLayoutReduced initialDiagram={initialDiagram} />
            </ReactFlowProvider>
        </div>
    );
}
