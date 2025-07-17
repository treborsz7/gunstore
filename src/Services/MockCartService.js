// Mock Cart Service for demo purposes
let CartItems = [];

export const AddItemToCar = (item) => {
  const existingItem = CartItems.find(x => x.id === item.id);
  if (existingItem) {
    existingItem.ItemsCount += 1;
  } else {
    CartItems.push({
      ...item,
      ItemsCount: 1,
      Íd: item.id // Keep original typo for compatibility
    });
  }
  console.log('Added to cart:', item);
  return CartItems;
};

export const RemoveItemToCart = (item) => {
  CartItems = CartItems.filter(x => x.id !== item.id);
  return CartItems;
};

export const DigreseItemToCart = (item) => {
  const existingItem = CartItems.find(x => x.id === item.id);
  if (existingItem && existingItem.ItemsCount > 1) {
    existingItem.ItemsCount -= 1;
  } else {
    CartItems = CartItems.filter(x => x.id !== item.id);
  }
  return CartItems;
};

export const GetItemsOnCart = () => {
  return CartItems;
};

export const GetItemsByFilter = (filter) => {
  console.log('Searching for:', filter.text);
  // In a real app, this would filter products
  return [];
};

export { CartItems };