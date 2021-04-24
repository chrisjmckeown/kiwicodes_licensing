export const filter = (members, clientId) => {
  if (clientId === 0) {
    return members;
  } else {
    return members.filter((member) => {
      const result = member.clientId
        ? member.clientId.toString() === clientId.toString()
        : false;
      return result;
    });
  }
};
