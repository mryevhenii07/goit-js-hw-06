const validationInput = document.querySelector("#validation-input");
const validLength = validationInput.dataset.length;

validationInput.addEventListener("bluer", () => {
  if (validationInput.value.length === Number(validationInput.dataset.length)) {
    resetClass("invalid", "valid");
  } else {
    resetClass("valid", "invalid");
  }
});
function resetClass(addcl, delcl) {
  validationInput.classList.add(addcl);
  validationInput.classList.remove(delcl);
}
