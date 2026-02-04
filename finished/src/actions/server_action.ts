"use server";

// next server action https://api.thecatapi.com/v1/images/search
export const serverAction = async () => {
    try {
        // permissions
        // rate limiting
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()

        return { success: true, data }

    } catch (error) {
        console.error(error)
        return { error: "Failed to fetch data" }
    }
}