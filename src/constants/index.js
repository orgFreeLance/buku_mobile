export const TOUCHABLEOPACITY = .35
export const BORDERRADIUS = 10
export const OPACITY = .85
export const token = `f5a46931df8533b02d0e3147ff5c55e899b8352eb1a02e3a26b4c92a6e6588b1206d78aa99f840b1a381db7e2b89d2b55ccfeae4be72753f9b9e318c629dffb608d930ac5ad269bfd646ce2f74b2802df789435a8b1f295937e206828803c116d5e8421a1d3bd64ec366887e515ef399d5339854c7f2759f0676055abb97af52`
export const headers = {
    "authorization": `Bearer ${token}`,
    "content-type": "application/json"
}
export const API_LINK = "https://buku-api.onrender.com/api"
export const getDate = (date) => {
    const month = new Date(date).getMonth()
    const year = new Date(date).getFullYear()
    return `${MONTHS[month]} ${year}`
}
export const setToBase64 = (base64) => `data:image/png;base64,${base64}`
export const routes = [{ name: "Home" }, { name: "Account" }, { name: "Search" }, { name: "Genre" }, { name: "BookByGenre" }, { name: "Book" }, { name: "Purchase" }, { name: "Books" }, { name: "Coins" }, { name: "Discover" }, { name: "Welcome" }, { name: "Ratings" }]
export const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]