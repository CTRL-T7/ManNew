import React from 'react'
import {
  MyButton,
  WallContainer,
  WallDescription,
  WallItemContainer,
  WallTitle,
} from '../../Styles/Wall'
import { useUIContext } from '../../Ui'
function Wall() {
  const { setSubscribe } = useUIContext()
  return (
    <WallContainer>
      <WallItemContainer>
        <WallTitle>Stay Connected</WallTitle>
        <WallDescription>
          Get the latest Manufacturers news and information delivered to your
          inbox.
        </WallDescription>
      </WallItemContainer>
      <WallItemContainer>
        <MyButton onClick={() => setSubscribe(true)}>
          SUBSCRIBE TO UPDATES
        </MyButton>
      </WallItemContainer>
    </WallContainer>
  )
}

export default Wall
