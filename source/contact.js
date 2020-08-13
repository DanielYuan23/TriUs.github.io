window.addEventListener('load', () => {
  const orderNumber = document.getElementById('orderNum');

  const inquiryRadioElements = document.querySelectorAll('input[name="inquiry"]');
  inquiryRadioElements.forEach(element => {
    element.addEventListener('change', () => {
      if (element.value === 'orderproblem') {
        orderNumber.style.display = 'block';
      } else {
        orderNumber.style.display = 'none';
      }
    });
  });
});
