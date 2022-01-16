export const getGifs = async (category) => {

    const apiKey = 'VJm7Qz7i8jQMmp4H8o51OC1sqwulXCN9'
    const limit = 10
    const endPoint = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=${limit}&api_key=${apiKey}`
    const response = await fetch(endPoint)

    const { data } = await response.json()

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium?.url
        }
    })
    return (gifs);
};