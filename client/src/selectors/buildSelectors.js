export const filter = (builds, productId) => {
  if (productId === 0) {
    return builds;
  } else {
    return builds.filter((build) => {
      const productIdMatch =
        build.productId.toString() === productId.toString();
      return productIdMatch;
    });
  }
};
