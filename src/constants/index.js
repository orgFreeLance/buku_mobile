export const TOUCHABLEOPACITY = .35
export const BORDERRADIUS = 10
export const OPACITY = .85
export const token = `af6764bd7b967558abf4727846a28efbf56a36247d42a15572e1419d968f7ed6bb9172368f7fb22bd5641e1af88a33884b7f6904987d6594623365009c7461be6fd57b8165749f85b038e32154407b6bf9b236a7dc09867c0f803d60ff26cfeff69ec3b9cc2953144db73d98f5735cd07e86ae40c91cec7c7614b619d25b2742`
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

export const MONTHS = ["JANVIER", "FEVRIER", "MARS", "AVRIL", "MAI", "JUIN", "JUILLET", "AOUT", "SEPTEMBRE", "OCTOBRE", "NOVEMBRE", "DECEMBRE"]