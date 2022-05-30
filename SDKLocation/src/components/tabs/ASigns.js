import React from 'react';
import { SignButton } from '../Buttons';

export const ASigns = ({
  addSign = () => { },
  ...props
}) => {
  return (
    <>
      <SignButton type='a01' onPress={() => addSign('a01')} />
      <SignButton type='a02' onPress={() => addSign('a02')} />
      <SignButton type='a03' onPress={() => addSign('a03')} />
      <SignButton type='a04' onPress={() => addSign('a04')} />
      <SignButton type='a04-1' onPress={() => addSign('a04-1')} />
      <SignButton type='a04-2' onPress={() => addSign('a04-2')} />
      <SignButton type='a04-3' onPress={() => addSign('a04-3')} />
      <SignButton type='a04-4' onPress={() => addSign('a04-4')} />
      <SignButton type='a05' onPress={() => addSign('a05')} />
      <SignButton type='a05-1' onPress={() => addSign('a05-1')} />
      <SignButton type='a05-2' onPress={() => addSign('a05-2')} />
      <SignButton type='a05-3' onPress={() => addSign('a05-3')} />
      <SignButton type='a08' onPress={() => addSign('a08')} />
      <SignButton type='a08-1' onPress={() => addSign('a08-1')} />
      <SignButton type='a08-2' onPress={() => addSign('a08-2')} />
      <SignButton type='a14' onPress={() => addSign('a14')} />
      <SignButton type='a14-1' onPress={() => addSign('a14-1')} />
      <SignButton type='a16' onPress={() => addSign('a16')} />
      <SignButton type='a20' onPress={() => addSign('a20')} />
      <SignButton type='a21' onPress={() => addSign('a21')} />
    </>
  );
}
