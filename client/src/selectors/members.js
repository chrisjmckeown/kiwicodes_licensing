export const filter = (members, clientId) => {
  if (clientId === 0) {
    return members;
  } else {
    return members.filter((member) => {
      const clientIdMatch = member.clientId === clientId;
      return clientIdMatch;
    });
  }
};
