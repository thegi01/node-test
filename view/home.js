let isClicked = false;
function handleClick(event) {
  event.target.disabled = true;
  testId.textContent = "clicked";
}
