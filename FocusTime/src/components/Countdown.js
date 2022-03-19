import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { sizes } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;
export const Countdown = ({
  minutes = 1,
  isPaused,
  onProgress
}) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        // TO-DO more stuff
        return time;
      }
      const timeLeft = time - 1000;
      onProgress(timeLeft / minutesToMillis(minutes))
      return timeLeft;
    })
  }

  useEffect(()=>{
    if (isPaused) {
      if (interval.current) clearInterval(interval.current)
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current)
  }, [isPaused])

  const min = Math.floor(millis / 1000 / 60) % 60;
  const sec = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}>{formatTime(min)}:{formatTime(sec)}</Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.xxxl,
    fontWeight: 'bold',
    color: colors.darkLight,
    padding: sizes.lg,
    backgroundColor: colors.darkAlfa,
    textAlign: 'center',
  },
})