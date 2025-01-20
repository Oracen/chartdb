import { DatabaseType } from '@/lib/domain/database-type';

import type { DatabaseClient } from '@/lib/domain/database-clients';
import type { DatabaseEdition } from '@/lib/domain/database-edition';

export type ImportMetadataScripts = Record<
    DatabaseType,
    (options?: {
        databaseEdition?: DatabaseEdition;
        databaseClient?: DatabaseClient;
    }) => string
>;
