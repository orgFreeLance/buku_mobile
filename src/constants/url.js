export const tomeURl = (id) => `/tomes/${id}?fields[0]=picture&fields[1]=name&fields[2]=id&fields[3]=userViews&fields[4]=likesNumber&fields[5]=coinsPrice&fields[6]=pagesNumber&fields[7]=createdAt`
export const tomesURl = "/tomes?fields[0]=picture&fields[1]=name&fields[2]=id&fields[3]=userViews&fields[4]=likesNumber&fields[5]=coinsPrice"
export const categoriesURl = "/categories?fields[0]=picture&fields[1]=name&fields[2]=id"
export const categoryOfTomeURl = (id)=>`/tome-categories?filters[category][id][$in][0]=${id}&fields[0]=picture&fields[1]=name&fields[2]=id&pupulate=*`