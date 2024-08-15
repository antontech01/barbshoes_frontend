const shoesform = document.querySelectorAll('#showorderform');
const formOverlay = document.getElementById('form-overlay');
const orderForm = document.getElementById('orderForm');
const cancelButton = document.getElementById('cancel');


shoesform.forEach(button => {
  button.addEventListener('click', () => {
    formOverlay.style.visibility = 'visible';
  });
});

cancelButton.addEventListener('click', () => {
  formOverlay.style.visibility = 'hidden';
});

  

orderForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const size = document.getElementById('size').value;
  const quantity = document.getElementById('quantity').value;
  const color = document.getElementById('color').value;
  const soleType = document.getElementById('sole-type').value;
  const bodyMaterial = document.getElementById('body-material').value;
  const paymentMethod = document.getElementById('payment-method').value;

  if (!name || !size || !quantity || !color || !soleType || !bodyMaterial || !paymentMethod) {
    alert('Please fill in all fields');
    return;
  }

  try {
    const response = await fetch('https://barbshoes-backend.onrender.com/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      alert('Order placed successfully!');
    } else {
      alert('Error placing order. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }

  formOverlay.style.visibility = 'hidden';
});




