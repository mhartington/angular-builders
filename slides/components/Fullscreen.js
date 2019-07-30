import React from 'react'

export function Fullscreen(){
  const goFullScreen = () => {
      let element = document.documentElement;

      // Check which implementation is available
      let requestMethod =
        element.requestFullscreen ||
        element.webkitRequestFullscreen ||
        element.webkitRequestFullScreen;

      if (requestMethod) {
        requestMethod.apply(element);
      }
  }
  return (
    <button onClick={goFullScreen}>Go Full screen</button>
  )
}
