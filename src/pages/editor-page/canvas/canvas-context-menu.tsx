import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
} from '@/components/context-menu/context-menu';
import { useBreakpoint } from '@/hooks/use-breakpoint';
import { useChartDB } from '@/hooks/use-chartdb';
import { useReactFlow } from '@xyflow/react';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const CanvasContextMenu: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const { createTable, filteredSchemas, schemas, readonly } = useChartDB();

    const { screenToFlowPosition } = useReactFlow();
    const { t } = useTranslation();

    const { isMd: isDesktop } = useBreakpoint('md');

    const createTableHandler = useCallback(
        (_: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            console.error('Not implemented: createTableHandler');
        },
        [createTable, screenToFlowPosition, schemas, filteredSchemas]
    );

    if (!isDesktop || readonly) {
        return <>{children}</>;
    }

    return (
        <ContextMenu>
            <ContextMenuTrigger>{children}</ContextMenuTrigger>
            <ContextMenuContent>
                <ContextMenuItem onClick={createTableHandler}>
                    {t('canvas_context_menu.new_table')}
                </ContextMenuItem>
                <ContextMenuItem
                    onClick={() =>
                        console.error(
                            'Not implemented: createRelationshipHandler'
                        )
                    }
                >
                    {t('canvas_context_menu.new_relationship')}
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};
