import React from 'react';
import { SignButton } from '../Buttons';

export const SpeedSigns = ({
  speedType = 'b30',
  addSign = () => { },
  ...props
}) => {
  return (
    <>
      <SignButton type={speedType} speed={5} onPress={() => addSign(speedType, 5)} />
      <SignButton type={speedType} speed={10} onPress={() => addSign(speedType, 10)} />
      <SignButton type={speedType} speed={15} onPress={() => addSign(speedType, 15)} />
      <SignButton type={speedType} speed={20} onPress={() => addSign(speedType, 20)} />
      <SignButton type={speedType} speed={30} onPress={() => addSign(speedType, 30)} />
      <SignButton type={speedType} speed={40} onPress={() => addSign(speedType, 40)} />
      <SignButton type={speedType} speed={50} onPress={() => addSign(speedType, 50)} />
      <SignButton type={speedType} speed={60} onPress={() => addSign(speedType, 60)} />
      <SignButton type={speedType} speed={70} onPress={() => addSign(speedType, 70)} />
      <SignButton type={speedType} speed={80} onPress={() => addSign(speedType, 80)} />
      <SignButton type={speedType} speed={90} onPress={() => addSign(speedType, 90)} />
      <SignButton type={speedType} speed={100} onPress={() => addSign(speedType, 100)} />
      <SignButton type={speedType} speed={110} onPress={() => addSign(speedType, 110)} />
      <SignButton type={speedType} speed={120} onPress={() => addSign(speedType, 120)} />
      <SignButton type={speedType} speed={130} onPress={() => addSign(speedType, 130)} />
    </>
  );
}
