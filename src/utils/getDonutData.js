export const getDonutData = (shipmentsData) => {
  const loadingCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.loading;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  const deliveryCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.delivery;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  const carrierCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.carrier;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  const shipperCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.shipper;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  const milestoneCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.milestone;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  return [loadingCount, deliveryCount, carrierCount, shipperCount, milestoneCount];
};
