export const getDonutData = (shipmentsData) => {
  let loadingCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.loading;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  loadingCount = getFirstFiveAndOthers(loadingCount);

  let deliveryCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.delivery;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});
  deliveryCount = getFirstFiveAndOthers(deliveryCount);

  let carrierCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.carrier;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  carrierCount = getFirstFiveAndOthers(carrierCount);

  let shipperCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.shipper;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  shipperCount = getFirstFiveAndOthers(shipperCount);

  let milestoneCount = shipmentsData?.data.reduce((acc, curr) => {
    const loading = curr.milestone;
    acc[loading] = (acc[loading] || 0) + 1;
    return acc;
  }, {});

  milestoneCount = getFirstFiveAndOthers(milestoneCount);

  return [
    loadingCount,
    deliveryCount,
    carrierCount,
    shipperCount,
    milestoneCount,
  ];
};

function getFirstFiveAndOthers(data) {
  const keys = Object.keys(data);
  const result = {};
  let othersTotal = 0;

  keys.forEach((key, index) => {
    if (index < 5) {
      result[key] = data[key];
    } else {
      othersTotal += data[key];
    }
  });

  result.others = othersTotal;
  return result;
}
