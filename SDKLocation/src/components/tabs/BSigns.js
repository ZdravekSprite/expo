import React from 'react';
import { SignButton } from '../Buttons';

export const BSigns = ({
  addSign = () => { },
  ...props
}) => {
  return (
    <>
      <SignButton type='b01' onPress={() => addSign('b01')} />
      <SignButton type='b02' onPress={() => addSign('b02')} />
      <SignButton type='b03' onPress={() => addSign('b03')} />
      <SignButton type='b04' onPress={() => addSign('b04')} />
      <SignButton type='b05' onPress={() => addSign('b05')} />
      <SignButton type='b21' onPress={() => addSign('b21')} />
      <SignButton type='b28' onPress={() => addSign('b28')} />
      <SignButton type='b28-1' onPress={() => addSign('b28-1')} />
      <SignButton type='b29' onPress={() => addSign('b29')} />
      <SignButton type='b36' onPress={() => addSign('b36')} />
      <SignButton type='b37' onPress={() => addSign('b37')} />
      <SignButton type='b45' onPress={() => addSign('b45')} />
      <SignButton type='b45-1' onPress={() => addSign('b45-1')} />
      <SignButton type='b45-2' onPress={() => addSign('b45-2')} />
      <SignButton type='b47' onPress={() => addSign('b47')} />
      <SignButton type='b47-1' onPress={() => addSign('b47-1')} />
    </>
  );
}
