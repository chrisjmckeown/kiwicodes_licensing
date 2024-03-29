import moment from 'moment';
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

export const appSelectors = ({
  appActivations,
  filterStartDate,
  filterEndDate,
  filterName,
  filterMember,
  filterCompany,
}) => {
  return appActivations.filter((appActivation) => {
    const dateActivatedMoment = moment(appActivation.dateActivated);
    const startDateMatch = filterStartDate
      ? filterStartDate.isSameOrBefore(dateActivatedMoment, 'day')
      : true;
    const endDateMatch = filterEndDate
      ? filterEndDate.isSameOrAfter(dateActivatedMoment, 'day')
      : true;
    const nameMatch = appActivation.app.name
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const memberMatch = (
      appActivation.member.firstName +
      ' ' +
      appActivation.member.lastName
    )
      .toLowerCase()
      .includes(filterMember.toLowerCase());
    const companyMatch = appActivation.member.client.name
      .toLowerCase()
      .includes(filterCompany.toLowerCase());

    return (
      startDateMatch && endDateMatch && nameMatch && memberMatch && companyMatch
    );
  });
};
