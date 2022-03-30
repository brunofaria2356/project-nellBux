const input = document.getElementById("homeInputRange");
const values = input.value;
const inputText = document.getElementById("homeInputRangeText");
inputText.value = `R$ ${values}.000`

input.addEventListener('change', () => {
  const inputText = document.getElementById("homeInputRangeText");
  const values = input.value;
  const inputTextt = values;
  inputText.value = `R$ ${values}.000`
  return inputTextt.oninput = `R$ ${this}.000`;
})