export const fetchBookApi = async () => {
    const response = await fetch("./book.json")
    if (!response.ok) throw new Error("Error in fetching book data")
    const data = await response.json()
    return data.fields
}
export const fetchAboutApi = async () => {
    const response = await fetch("./about.json")
    if (!response.ok) throw new Error("Error in fetching about data")
    const data = await response.json()
    return data
}
export const fetchHomeApi = async () => {
    const response = await fetch("./home.json")
    if (!response.ok) throw new Error("Error in fetching home data")
    const data = await response.json()
    return data
}