let supportsPassive = false;

try {
  let opts = Object.defineProperty({}, 'passive', {
    get() {
      supportsPassive = true;
    }
  });

  window.addEventListener('test', null, opts);
} catch(e) {
  // do nothing
}

export default supportsPassive;
