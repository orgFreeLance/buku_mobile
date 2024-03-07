import { API_LINK } from "."

export const tomeURl = (id, userId = 1) => `/tome-infos/tome-increment/${id}?populate=book&userId=${userId}`
export const tomesURl = "/tomes?fields[0]=picture&fields[1]=name&fields[2]=id&fields[3]=userViews&fields[4]=likesNumber&fields[5]=coinsPrice&sort[0]=name:asc&sort[1]=userPurchase:asc"
export const categoriesURl = "/categories?fields[0]=picture&fields[1]=name&fields[2]=id"
export const categoryOfTomeURl = (id) => `/tome-infos/categories-of-tome/${id}`
export const chaptersOfTomeURl = (id) => `/tome-infos/chapters-of-tome/${id}`
export const bookByGenreURL = (id) => `/tome-infos/tomes-of-category/${id}`
export const bookByUserPreferences = (id) => `${API_LINK}/tome-infos/tomes-preferences/${id}`
export const bookByTomePopulars = () => `${API_LINK}/tome-infos/tomes-most-populars`
export const bookByTomeBuyed = () => `${API_LINK}/tome-infos/tomes-most-buyed`
export const createTomeFavoriteURL = () => `${API_LINK}/tome-infos/create-favorite`
export const activesCoinURL = () => `${API_LINK}/coin-infos/actives-coin?populate=currency&limit=100`
export const buyCoinsURL = (coinId, userId) => `${API_LINK}/coin-infos/buy-coin/${coinId}/${userId}`
export const getCurrencies = () => `${API_LINK}/currencies`
export const getTomesFavoritesURL = (userId) => `${API_LINK}/user-tome-favorites?populate=*&filters[user][id][$eq]=${userId}`
export const getTomesBuyedURL = (userId) => `${API_LINK}/user-tome-buyed/${userId}`
export const getTomesCreatedURL = (userId) => `${API_LINK}/tome-infos/tomes-created/${userId}`
export const getUserChapterBuyed = ({ userId, chapterId }) => `${API_LINK}/user-chapter-buy/${chapterId}/${userId}`
export const updateUser = (userId) => `${API_LINK}/user-infos-update/${userId}`
export const updateUserPassword = (userId) => `${API_LINK}/user-infos-update-password/${userId}`