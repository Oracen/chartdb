import { Button } from '@/components/button/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/dialog/dialog';
import { useDialog } from '@/hooks/use-dialog';
import { useLocalConfig } from '@/hooks/use-local-config';
import React, { useCallback, useEffect } from 'react';
import type { BaseDialogProps } from '../common/base-dialog-props';

export interface BuckleDialogProps extends BaseDialogProps {}

const effectiveTheme = 'light';

export const BuckleDialog: React.FC<BuckleDialogProps> = ({ dialog }) => {
    const { setBuckleWaitlistOpened } = useLocalConfig();

    useEffect(() => {
        if (!dialog.open) return;
    }, [dialog.open]);
    const { closeBuckleDialog } = useDialog();

    const handleConfirm = useCallback(() => {
        setBuckleWaitlistOpened(true);
        window.open('https://waitlist.buckle.dev', '_blank');
    }, [setBuckleWaitlistOpened]);

    return (
        <Dialog
            {...dialog}
            onOpenChange={(open) => {
                if (!open) {
                    closeBuckleDialog();
                }
            }}
        >
            <DialogContent
                className="flex flex-col"
                showClose={false}
                onInteractOutside={(e) => {
                    e.preventDefault();
                }}
            >
                <DialogHeader>
                    <DialogTitle className="hidden" />
                    <DialogDescription className="hidden" />
                </DialogHeader>
                <div className="flex w-full flex-col items-center">
                    <img
                        src={
                            effectiveTheme === 'light'
                                ? '/buckle-animated.gif'
                                : '/buckle.png'
                        }
                        className="h-16"
                    />
                    <div className="mt-6 text-center text-base">
                        We've been working on something big -{' '}
                        <span className="font-semibold">Ready to explore?</span>
                    </div>
                </div>
                <DialogFooter className="flex gap-1 md:justify-between">
                    <DialogClose asChild>
                        <Button variant="secondary">Not now</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={handleConfirm}>
                            Try ChartDB v2.0!
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
