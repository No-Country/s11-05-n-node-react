function clearStateErrors(error, state) {
  setTimeout(() => {
    state(error);
  }, 3000);
}

export default clearStateErrors;
