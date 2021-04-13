export const filter = (apps, appId) => {
  if (appId === 0) {
    return apps;
  } else {
    return apps.filter((app) => {
      const productIdMatch = app.appId.toString() === appId.toString();
      return productIdMatch;
    });
  }
};
