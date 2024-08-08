export const getDonutData = (shipmentsData) => {
  let AllloadingCount = {};
  shipmentsData?.data.forEach((item) => {
    AllloadingCount[item.loading] = (AllloadingCount[item.loading] || 0) + 1;
  });
  let loadingCount = getFirstFiveAndOthers(AllloadingCount);

  let AlldeliveryCount = {};
  shipmentsData?.data.forEach((item) => {
    AlldeliveryCount[item.delivery] =
      (AlldeliveryCount[item.delivery] || 0) + 1;
  });
  let deliveryCount = getFirstFiveAndOthers(AlldeliveryCount);

  let AllcarrierCount = {};
  shipmentsData?.data.forEach((item) => {
    AllcarrierCount[item.carrier] = (AllcarrierCount[item.carrier] || 0) + 1;
  });
  let carrierCount = getFirstFiveAndOthers(AllcarrierCount);

  let AllshipperCount = {};
  shipmentsData?.data.forEach((item) => {
    AllshipperCount[item.shipper] = (AllshipperCount[item.shipper] || 0) + 1;
  });
  let shipperCount = getFirstFiveAndOthers(AllshipperCount);

  let AllmilestoneCount = {};
  shipmentsData?.data.forEach((item) => {
    AllmilestoneCount[item.milestone] =
      (AllmilestoneCount[item.milestone] || 0) + 1;
  });
  let milestoneCount = getFirstFiveAndOthers(AllmilestoneCount);

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
