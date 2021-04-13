export const filter = (licenseKeys, clientId) => {
  if (clientId === 0) {
    return licenseKeys;
  } else {
    return licenseKeys.filter((licenseKey) => {
      const clientIdMatch =
        licenseKey.clientId.toString() === clientId.toString();
      return clientIdMatch;
    });
  }
};
