"use server";

// next server action https://api.thecatapi.com/v1/images/search
export const serverAction = async () => {
    try {
        // permissions
        // rate limiting
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await res.json()

        return { status: "SUCCESS", error: "", data }

    } catch (error) {
        console.error(error)
        return { error: "Failed to fetch data" }
    }
}

export const fetchCat = async () => {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json()
        return { status: "SUCCESS", error: "", data }

    } catch (error) {
        console.error(error)
        return { status: "ERROR", error: "Failed to fetch cat", data: null }
    }
}