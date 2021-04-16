import moment from 'moment';
export const productSelectors = ({
  productActivations,
  filterStartDate,
  filterEndDate,
  filterName,
  filterMember,
  filterCompany,
}) => {
  return productActivations.filter((productActivation) => {
    const dateActivatedMoment = moment(productActivation.dateActivated);
    const startDateMatch = filterStartDate
      ? filterStartDate.isSameOrBefore(dateActivatedMoment, 'day')
      : true;
    const endDateMatch = filterEndDate
      ? filterEndDate.isSameOrAfter(dateActivatedMoment, 'day')
      : true;
    const nameMatch = productActivation.product.name
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const memberMatch = (
      productActivation.member.firstName +
      ' ' +
      productActivation.member.lastName
    )
      .toLowerCase()
      .includes(filterMember.toLowerCase());
    const companyMatch = productActivation.member.client.name
      .toLowerCase()
      .includes(filterCompany.toLowerCase());

    return (
      startDateMatch && endDateMatch && nameMatch && memberMatch && companyMatch
    );
  });
};
