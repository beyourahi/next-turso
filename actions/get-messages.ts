"use server";

import { db } from "app/db/db";
import { messages } from "app/db/schema";

export const getMessages = async () => {
    return await db.select().from(messages);
};
