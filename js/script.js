(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');

      // Check password match
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
      } else if(confirmPassword) {
        confirmPassword.setCustomValidity('');
      }

      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
const usernameInput = document.getElementById('username');

// Convert input to lowercase as user types
usernameInput.addEventListener('input', () => {
  usernameInput.value = usernameInput.value.toLowerCase();
});
