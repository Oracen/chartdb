import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/resizable/resizable';
import type { Diagram } from '@/lib/domain/diagram';
import { cn } from '@/lib/utils';
import React from 'react';

import { CanvasReduced } from './canvas/canvas-reduced';
import { SidePanel } from './side-panel/side-panel-reduced';

export interface EditorDesktopLayoutProps {
    initialDiagram?: Diagram;
}
export const EditorDesktopLayout: React.FC<EditorDesktopLayoutProps> = ({
    initialDiagram,
}) => {
    console.log(initialDiagram);
    const isSidePanelShowed = true;

    const initialTables = initialDiagram?.tables || [];
    const initialRelationships = initialDiagram?.relationships || [];
    const initialDependencies = initialDiagram?.dependencies || [];

    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={25}
                minSize={25}
                maxSize={isSidePanelShowed ? 99 : 0}
                className={cn('transition-[flex-grow] duration-200 ', {
                    'min-w-[350px]': isSidePanelShowed,
                })}
            >
                <SidePanel
                    initialFilteredSchemas={[]}
                    initialTables={initialTables}
                    initialRelationships={initialRelationships}
                    initialDependencies={initialDependencies}
                />
            </ResizablePanel>
            <ResizableHandle disabled={false} />
            <ResizablePanel defaultSize={75}>
                <CanvasReduced
                    initialTables={initialTables}
                    initialRelationships={initialRelationships}
                    initialDependencies={initialDependencies}
                />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default EditorDesktopLayout;
