export const filter = (apps, productId) => {
  if (productId === 0) {
    return apps;
  } else {
    return apps.filter((app) => {
      const productIdMatch = app.productId.toString() === productId.toString();
      return productIdMatch;
    });
  }
};
