const groupEvents = events =>
  events.reduce((acc, event) => {
    acc[event.user_id] = acc[event.user_id] || [];
    acc[event.user_id].push(event);
    return acc;
  }, {});

const sumGroupedEvents = groupedEvents => {
  const summedEvents = [];

  Object.values(groupedEvents).forEach(groupedEvent => {
    groupedEvent.reduce((acc, event, index, array) => {
      acc += event.value;
      if (index === array.length - 1) {
        const summedEvent = { ...event, value: Number(acc.toFixed(2)) };
        summedEvents.push(summedEvent);
        acc = 0;
      }
      return acc;
    }, 0);
  });
  return summedEvents;
};

module.exports = { groupEvents, sumGroupedEvents };
