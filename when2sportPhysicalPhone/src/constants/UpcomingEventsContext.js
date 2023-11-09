// UpcomingEventsContext.js
import React, { createContext, useState, useContext } from 'react';
import upcomingEventsImport from '../assets/data/UpcomingEvents.json'

const UpcomingEventsContext = createContext();

export const useUpcomingEvents = () => useContext(UpcomingEventsContext);

export const UpcomingEventsProvider = ({ children }) => {
  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsImport);

  return (
    <UpcomingEventsContext.Provider value={{ upcomingEvents, setUpcomingEvents }}>
      {children}
    </UpcomingEventsContext.Provider>
  );
};