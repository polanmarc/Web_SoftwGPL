// Popover

const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// Toast

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

//Alerts

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
let alertShown = false;

const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.innerHTML = ""; // Limpiar alertas anteriores
  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    if (!alertShown) {
      appendAlert("Te enviaremos una copia de este mensaje.", "success");
      alertShown = true;
    } else {
      alertShown = false;
    }
  });
}

// Nevegador de teclado

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && document.activeElement.classList.contains('nav-link') &&
      document.activeElement.getAttribute('data-bs-target') === '#log-in') {
      event.preventDefault(); 
      document.getElementById('log-in').classList.add('show');
  }
});