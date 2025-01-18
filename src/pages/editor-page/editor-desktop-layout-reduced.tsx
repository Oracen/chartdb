import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/resizable/resizable';
import { useLayout } from '@/hooks/use-layout';
import type { Diagram } from '@/lib/domain/diagram';
import { cn } from '@/lib/utils';
import React from 'react';

import { CanvasReduced } from './canvas/canvas-reduced';
import { SidePanel } from './side-panel/side-panel';

export interface EditorDesktopLayoutProps {
    initialDiagram?: Diagram;
}
export const EditorDesktopLayout: React.FC<EditorDesktopLayoutProps> = ({
    initialDiagram,
}) => {
    const { isSidePanelShowed } = useLayout();
    return (
        <ResizablePanelGroup direction="horizontal">
            <ResizablePanel
                defaultSize={25}
                minSize={25}
                maxSize={isSidePanelShowed ? 99 : 0}
                className={cn('transition-[flex-grow] duration-200', {
                    'min-w-[350px]': isSidePanelShowed,
                })}
            >
                <SidePanel />
            </ResizablePanel>
            <ResizableHandle disabled={!isSidePanelShowed} />
            <ResizablePanel defaultSize={75}>
                <CanvasReduced
                    initialTables={initialDiagram?.tables || []}
                    initialRelationships={initialDiagram?.relationships || []}
                    initialDependencies={initialDiagram?.dependencies || []}
                />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default EditorDesktopLayout;
