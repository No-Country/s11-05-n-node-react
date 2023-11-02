function clearStateErrors(error, state) {
  setTimeout(() => {
    state(error);
  }, 6000);
}

export default clearStateErrors;
