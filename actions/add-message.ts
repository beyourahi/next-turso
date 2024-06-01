"use server";

import { db } from "app/db/db";
import { messages } from "app/db/schema";
import { revalidatePath } from "next/cache";

export const addMessage = async (formData: FormData) => {
    const res = await db.insert(messages).values({ message: formData.get("message") as string });

    if (res) {
        revalidatePath("/");
    }
};
