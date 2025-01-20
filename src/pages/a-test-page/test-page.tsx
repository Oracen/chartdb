import React, { useEffect } from 'react';

import { AlertProvider } from '@/context/alert-context/alert-provider';
import { ChartDBProvider } from '@/context/chartdb-context/chartdb-provider';
import { ConfigProvider } from '@/context/config-context/config-provider';
import { ExportImageProvider } from '@/context/export-image-context/export-image-provider';
import { FullScreenLoaderProvider } from '@/context/full-screen-spinner-context/full-screen-spinner-provider';
import { HistoryProvider } from '@/context/history-context/history-provider';
import { RedoUndoStackProvider } from '@/context/history-context/redo-undo-stack-provider';
import { KeyboardShortcutsProvider } from '@/context/keyboard-shortcuts-context/keyboard-shortcuts-provider';
import { LayoutProvider } from '@/context/layout-context/layout-provider';
import { LocalConfigProvider } from '@/context/local-config-context/local-config-provider';
import { StorageProvider } from '@/context/storage-context/storage-provider';
import { ThemeProvider } from '@/context/theme-context/theme-provider';
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
        <div className="w-screen h-screen">
            <h1>Test Page</h1>
            {/* <ReactFlowProvider>
                <EditorDesktopLayout initialDiagram={diagram} />
            </ReactFlowProvider> */}
            <LocalConfigProvider>
                <ThemeProvider>
                    <FullScreenLoaderProvider>
                        <LayoutProvider>
                            <StorageProvider>
                                <ConfigProvider>
                                    <RedoUndoStackProvider>
                                        <ChartDBProvider>
                                            <HistoryProvider>
                                                <ReactFlowProvider>
                                                    <ExportImageProvider>
                                                        <AlertProvider>
                                                            <KeyboardShortcutsProvider>
                                                                <EditorDesktopLayoutReduced
                                                                    initialDiagram={
                                                                        initialDiagram
                                                                    }
                                                                />
                                                            </KeyboardShortcutsProvider>
                                                        </AlertProvider>
                                                    </ExportImageProvider>
                                                </ReactFlowProvider>
                                            </HistoryProvider>
                                        </ChartDBProvider>
                                    </RedoUndoStackProvider>
                                </ConfigProvider>
                            </StorageProvider>
                        </LayoutProvider>
                    </FullScreenLoaderProvider>
                </ThemeProvider>
            </LocalConfigProvider>
        </div>
    );
}
