const form = document.querySelector(".login-form");

const submitForm = (evt) => {
  const form = evt.currentTarget;
  evt.preventDefault();
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);

    const {
        elements: { email, password },
    } = form;
    
    if (!email.value||!password.value) { 
        return alert("Wszystkie pola muszą być uzupełnione");
    };

    console.log(`email: ${email.value}, Password: ${password.value}`);

    evt.currentTarget.reset();
};

form.addEventListener("submit", submitForm);