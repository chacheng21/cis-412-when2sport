import React, { createContext, useState, useContext } from 'react';
import availableEventsImport from '../assets/data/AvailableEvents.json'

const AvailableEventsContext = createContext();

export const useAvailableEvents = () => useContext(AvailableEventsContext);

export const AvailableEventsProvider = ({ children }) => {
  const [availableEvents, setAvailableEvents] = useState(availableEventsImport);

  return (
    <AvailableEventsContext.Provider value={{ availableEvents, setAvailableEvents }}>
      {children}
    </AvailableEventsContext.Provider>
  );
};