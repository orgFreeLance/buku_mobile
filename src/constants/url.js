export const tomeURl = (id) => `/tome-infos/tome-increment/${id}?populate=creator,book`
export const tomesURl = "/tomes?fields[0]=picture&fields[1]=name&fields[2]=id&fields[3]=userViews&fields[4]=likesNumber&fields[5]=coinsPrice"
export const categoriesURl = "/categories?fields[0]=picture&fields[1]=name&fields[2]=id"
export const categoryOfTomeURl = (id)=>`/tome-infos/categories/${id}`