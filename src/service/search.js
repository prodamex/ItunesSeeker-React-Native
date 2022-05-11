export const findByTitle = async (title) => {
    const data = await fetch(`https://itunes.apple.com/search?media=music&term=${title}&limit=20`)
    const json = await data.json()
    return json
}