import React from 'react';
import { SignButton } from '../Buttons';

export const CSigns = ({
  addSign = () => { },
  ...props
}) => {
  return (
    <>
      <SignButton type='c01' onPress={() => addSign('c01')} />
      <SignButton type='c02' onPress={() => addSign('c02')} />
      <SignButton type='c05' onPress={() => addSign('c05')} />
      <SignButton type='c06' onPress={() => addSign('c06')} />
      <SignButton type='c07' onPress={() => addSign('c07')} />
      <SignButton type='c14' onPress={() => addSign('c14')} />
      <SignButton type='c24' onPress={() => addSign('c24')} />
      <SignButton type='c25' onPress={() => addSign('c25')} />
      <SignButton type='c36' onPress={() => addSign('c36')} />
      <SignButton type='c37' onPress={() => addSign('c37')} />
      <SignButton type='c38' onPress={() => addSign('c38')} />
      <SignButton type='c39' onPress={() => addSign('c39')} />
      <SignButton type='c39-1' onPress={() => addSign('c39-1')} />
    </>
  );
}
