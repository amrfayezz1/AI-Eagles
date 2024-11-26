export const countAnimate = (obj, initVal, lastVal, duration) => {
  let startTime = null;

  const step = (currentTime) => {
    if (!startTime) startTime = currentTime;

    const progress = Math.min((currentTime - startTime) / duration, 1);
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};
