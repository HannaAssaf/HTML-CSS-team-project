const form = document.querySelector('#order-sent-show');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const comment = document.querySelector('#user-comment').value.trim();

    console.log({ name, email, comment });

    alert('Thank you! Your request has been successfully submitted.');

    form.reset();
  });
}
