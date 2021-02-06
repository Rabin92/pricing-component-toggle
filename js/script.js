let basicPlan = document.getElementById('js-basic');
let profPlan = document.getElementById('js-prof');
let masterPlan = document.getElementById('js-master');
const toggleBtn = document.getElementById('js-toggle');

toggleBtn.addEventListener('change', () => {
  const checked = toggleBtn.checked;
  if (checked) {
    basicPlan.textContent = 19.99;
    profPlan.textContent = 24.99;
    masterPlan.textContent = 39.99;
  } else {
    basicPlan.textContent = 199.99;
    profPlan.textContent = 249.99;
    masterPlan.textContent = 399.99;
  }
});
