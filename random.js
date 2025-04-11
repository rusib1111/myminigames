// Random number generator between 1 and 10
document.getElementById('generate').addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  document.getElementById('number-display').textContent = `You got: ${randomNumber}`;
});
