import { ToggleGroupItem } from '@/components/toggle/toggle-group';
import { databaseTypeToLabelMap, getDatabaseLogo } from '@/lib/databases';
import type { DatabaseType } from '@/lib/domain/database-type';
import React, { useMemo } from 'react';

export interface DatabaseOptionProps {
    type: DatabaseType;
}

const effectiveTheme = 'light';

export const DatabaseOption: React.FC<DatabaseOptionProps> = ({ type }) => {
    const logo = useMemo(() => getDatabaseLogo(type, effectiveTheme), [type]);

    return (
        <ToggleGroupItem
            value={type}
            aria-label="Toggle bold"
            className="flex size-20 md:size-32"
        >
            <img src={logo} alt={databaseTypeToLabelMap[type]} />
        </ToggleGroupItem>
    );
};
