import { mysqlTable as table } from "drizzle-orm/mysql-core";
import * as t from "drizzle-orm/mysql-core";
import { createId } from "@paralleldrive/cuid2";
//import { AnyMySqlColumn } from "drizzle-orm/mysql-core";

export const users = table("users", {
    customId: t
        .varchar("customId", { length: 255 })
        .primaryKey()
        .$defaultFn(createId), // Generates a string ID using createId
    username: t.varchar("username", { length: 255 }),
    password: t.varchar("password", { length: 255 }),
    email: t.varchar("email", { length: 255 }),
    login_type: t.int().notNull(),
    google_sub: t.varchar("google_sub", { length: 255 }),
    access_level: t.int("access_level").notNull(),
    created_timestamp: t.timestamp(),
    last_login_date_time: t.datetime()
});
