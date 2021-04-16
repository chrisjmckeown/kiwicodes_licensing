import moment from 'moment';
export const auditSelectors = ({
  audits,
  filterStartDate,
  filterEndDate,
  filterName,
  filterMember,
  filterCompany,
}) => {
  return audits.filter((audit) => {
    const dateActivatedMoment = moment(audit.dateActivated);
    const startDateMatch = filterStartDate
      ? filterStartDate.isSameOrBefore(dateActivatedMoment, 'day')
      : true;
    const endDateMatch = filterEndDate
      ? filterEndDate.isSameOrAfter(dateActivatedMoment, 'day')
      : true;
    const nameMatch = audit.modelId
      .toLowerCase()
      .includes(filterName.toLowerCase());
    const memberMatch = (audit.member.firstName + ' ' + audit.member.lastName)
      .toLowerCase()
      .includes(filterMember.toLowerCase());
    const companyMatch = audit.member.client.name
      .toString()
      .toLowerCase()
      .includes(filterCompany.toLowerCase());

    return (
      startDateMatch && endDateMatch && nameMatch && memberMatch && companyMatch
    );
  });
};
