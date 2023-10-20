function clearStateErrors(error, state) {
  setTimeout(() => {
    state(error);
  }, 1500);
}

export default clearStateErrors;
