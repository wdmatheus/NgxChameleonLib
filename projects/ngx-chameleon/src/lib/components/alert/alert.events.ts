enum AlertEventsType{
  Show,
  Hide
}

interface AlertEvent{
  id: string;
  type: AlertEventsType
}

export {AlertEventsType, AlertEvent}

