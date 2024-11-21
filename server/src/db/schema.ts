import { mysqlTable as table } from "drizzle-orm/mysql-core";
import * as t from "drizzle-orm/mysql-core";
//import { AnyMySqlColumn } from "drizzle-orm/mysql-core";

export const users = table("users", {
    id: t.serial("id").primaryKey().autoincrement(),
    username: t.varchar("username", { length: 200 }).notNull(),
    password_hash: t.varchar("password_hash", { length: 255 }).notNull(),
    created_timestamp: t.timestamp(),
    last_login_date_time: t.datetime()
});
