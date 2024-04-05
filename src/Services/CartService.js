
export let CartItems = [];

export let TotalItemsCount = 0;
export const SetTotalItemsCount = (count) => {
    console.log(count)
    TotalItemsCount = count;
}


export const GetItemsByFilter = ({ text }) => {

    console.log(text)
    //return CartItems.filter(x => x.description.contain(text))
}

export const GetItemsCount = () => {
    return TotalItemsCount;
}
export const GetItemsOnCart = () => {
    let items = JSON.parse(localStorage.getItem("CartItems"));
    CartItems = items !== undefined ? items : [];
    return CartItems;

}



export const AddItemToCar = (item) => {


    const index = CartItems.findIndex(x => {
        return x._id == item._id
    });

    if (index == -1) {

        console.log(item)
        item["ItemsCount"] = 1;
        CartItems.push(item);
    }
    else {
        CartItems[index]["ItemsCount"] += 1;

    }

    localStorage.setItem("CartItems", JSON.stringify(CartItems));
}


export const RemoveItemToCart = (item) => {


    const index = CartItems.findIndex(x => {
        return x._id == item._id
    });

    CartItems[index]["ItemsCount"] = 0;

    if (CartItems[index].ItemsCount == 0)
        CartItems.splice(index, 1);


    localStorage.setItem("CartItems", JSON.stringify(CartItems));
    //return GetItemsonCart();
}



export const DigreseItemToCart = (item) => {


    const index = CartItems.findIndex(x => {
        return x._id == item._id
    });

    CartItems[index]["ItemsCount"] -= 1;

    if (CartItems[index].ItemsCount == 0)
        CartItems.splice(index, 1);


    localStorage.setItem("CartItems", JSON.stringify(CartItems));
    //return GetItemsonCart();
}


