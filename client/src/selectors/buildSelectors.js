export const filter = (appChats, productId) => {
  if (productId === 0) {
    return appChats;
  } else {
    return appChats.filter((chat) => {
      const productIdMatch = chat.productId.toString() === productId.toString();
      return productIdMatch;
    });
  }
};
