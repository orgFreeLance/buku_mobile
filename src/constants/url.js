import { API_LINK } from "."

export const tomeURl = (id, userId = 1) => `/tome-infos/tome-increment/${id}?populate=book&userId=${userId}`
export const tomesURl = "/tomes?fields[0]=picture&fields[1]=name&fields[2]=id&fields[3]=userViews&fields[4]=likesNumber&fields[5]=coinsPrice"
export const categoriesURl = "/categories?fields[0]=picture&fields[1]=name&fields[2]=id"
export const categoryOfTomeURl = (id) => `/tome-infos/categories-of-tome/${id}`
export const chaptersOfTomeURl = (id) => `/tome-infos/chapters-of-tome/${id}`
export const bookByGenreURL = (id) => `/tome-infos/tomes-of-category/${id}`
export const createTomeFavoriteURL = () => `${API_LINK}/tome-infos/create-favorite`
export const activesCoinURL = () => `${API_LINK}/coin-infos/actives-coin?populate=currency&limit=100`
export const buyCoinsURL = (coinId, userId) => `${API_LINK}/coin-infos/buy-coin/${coinId}/${userId}` 