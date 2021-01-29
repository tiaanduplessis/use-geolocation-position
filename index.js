import { useState, useEffect } from "react";

export const useCurrentPosition = ({
  maximumAge = Infinity,
  timeout = 0,
  enableHighAccuracy = true
} = {}) => {
  const [position, setPosition] = useState({});

  const handleChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      timestamp
    });
  }

  const handleError = (error) => setPosition({ error })

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        handleChange,
        handleError,
        {
          maximumAge,
          timeout,
          enableHighAccuracy
        }
      );
    }
  }, [maximumAge, timeout, enableHighAccuracy]);

  return position;
};

export const useWatchPosition = ({
  maximumAge = Infinity,
  timeout = 0,
  enableHighAccuracy = true
} = {}) => {
  const [position, setPosition] = useState({});

  const handleChange = ({ coords, timestamp }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
      accuracy: coords.accuracy,
      speed: coords.speed,
      timestamp
    });
  };

  const handleError = (error) => setPosition({ error });

  useEffect(() => {
    if (navigator && navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(handleChange, handleError, {
        maximumAge,
        timeout,
        enableHighAccuracy
      });

      return () => navigator.geolocation.clearWatch(watcher)
    }
  }, [maximumAge, timeout, enableHighAccuracy]);

  return position;
};
