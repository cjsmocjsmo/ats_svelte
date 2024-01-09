

export async function load() {
    const url = "https://atstest.xyz/allcom"
    const res = await fetch(url)
    const data = await res.json()

    return { data }
}