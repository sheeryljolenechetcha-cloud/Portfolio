(function () {
  // ---- Pickup time slot demo ----
  var slotBox = document.getElementById("slots");
  var pay = document.getElementById("pay");
  if (slotBox && pay) {
    var buttons = slotBox.querySelectorAll("button");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (o) { o.setAttribute("aria-checked", "false"); });
        btn.setAttribute("aria-checked", "true");
        pay.disabled = false;
        pay.textContent = "Pay and confirm " + btn.textContent;
      });
    });
    pay.addEventListener("click", function () {
      var picked = slotBox.querySelector('[aria-checked="true"]');
      if (picked) {
        pay.textContent = "Order confirmed for " + picked.textContent;
        pay.disabled = true;
      }
    });
  }
})();