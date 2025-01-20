import ClickhouseLogo from '@/assets/clickhouse_logo.png';
import ClickhouseLogo2 from '@/assets/clickhouse_logo_2.png';
import ClickhouseLogoDark from '@/assets/clickhouse_logo_dark.png';
import CockroachDBLogo from '@/assets/cockroachdb_logo.png';
import CockroachDBLogo2 from '@/assets/cockroachdb_logo_2.png';
import CockroachDBLogoDark from '@/assets/cockroachdb_logo_dark.png';
import GeneralDBLogo2 from '@/assets/general_db_logo_2.png';
import MariaDBLogo from '@/assets/mariadb_logo.png';
import MariaDBLogo2 from '@/assets/mariadb_logo_2.png';
import MariaDBLogoDark from '@/assets/mariadb_logo_dark.png';
import MysqlLogo from '@/assets/mysql_logo.png';
import MysqlLogo2 from '@/assets/mysql_logo_2.png';
import MysqlLogoDark from '@/assets/mysql_logo_dark.png';
import PostgresqlLogo from '@/assets/postgresql_logo.png';
import PostgresqlLogo2 from '@/assets/postgresql_logo_2.png';
import PostgresqlLogoDark from '@/assets/postgresql_logo_dark.png';
import SqlServerLogo from '@/assets/sql_server_logo.png';
import SqlServerLogo2 from '@/assets/sql_server_logo_2.png';
import SqlServerLogoDark from '@/assets/sql_server_logo_dark.png';
import SqliteLogo from '@/assets/sqlite_logo.png';
import SqliteLogo2 from '@/assets/sqlite_logo_2.png';
import SqliteLogoDark from '@/assets/sqlite_logo_dark.png';
import { DatabaseType } from './domain/database-type';

export const databaseTypeToLabelMap: Record<DatabaseType, string> = {
    [DatabaseType.GENERIC]: 'Generic',
    [DatabaseType.POSTGRESQL]: 'PostgreSQL',
    [DatabaseType.MYSQL]: 'MySQL',
    [DatabaseType.SQL_SERVER]: 'SQL Server',
    [DatabaseType.MARIADB]: 'MariaDB',
    [DatabaseType.SQLITE]: 'SQLite',
    [DatabaseType.CLICKHOUSE]: 'ClickHouse',
    [DatabaseType.COCKROACHDB]: 'CockroachDB',
};

export const databaseLogoMap: Record<DatabaseType, string> = {
    [DatabaseType.MYSQL]: MysqlLogo,
    [DatabaseType.POSTGRESQL]: PostgresqlLogo,
    [DatabaseType.MARIADB]: MariaDBLogo,
    [DatabaseType.SQLITE]: SqliteLogo,
    [DatabaseType.SQL_SERVER]: SqlServerLogo,
    [DatabaseType.CLICKHOUSE]: ClickhouseLogo,
    [DatabaseType.COCKROACHDB]: CockroachDBLogo,
    [DatabaseType.GENERIC]: '',
};

export const databaseDarkLogoMap: Record<DatabaseType, string> = {
    [DatabaseType.MYSQL]: MysqlLogoDark,
    [DatabaseType.POSTGRESQL]: PostgresqlLogoDark,
    [DatabaseType.MARIADB]: MariaDBLogoDark,
    [DatabaseType.SQLITE]: SqliteLogoDark,
    [DatabaseType.SQL_SERVER]: SqlServerLogoDark,
    [DatabaseType.CLICKHOUSE]: ClickhouseLogoDark,
    [DatabaseType.COCKROACHDB]: CockroachDBLogoDark,
    [DatabaseType.GENERIC]: '',
};

export const databaseSecondaryLogoMap: Record<DatabaseType, string> = {
    [DatabaseType.MYSQL]: MysqlLogo2,
    [DatabaseType.POSTGRESQL]: PostgresqlLogo2,
    [DatabaseType.MARIADB]: MariaDBLogo2,
    [DatabaseType.SQLITE]: SqliteLogo2,
    [DatabaseType.SQL_SERVER]: SqlServerLogo2,
    [DatabaseType.CLICKHOUSE]: ClickhouseLogo2,
    [DatabaseType.COCKROACHDB]: CockroachDBLogo2,
    [DatabaseType.GENERIC]: GeneralDBLogo2,
};
