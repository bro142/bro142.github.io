// script.js
document.getElementById('hypotenuseForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const a = parseFloat(document.getElementById('cathetusA').value);
    const b = parseFloat(document.getElementById('cathetusB').value);
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    resultDiv.textContent = '';
    errorDiv.textContent = '';

    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
        errorDiv.textContent = 'Пожалуйста, введите положительные числовые значения для обоих катетов.';
        return;
    }

    const c = Math.sqrt(a * a + b * b);
    resultDiv.textContent = `Длина гипотенузы: ${c.toFixed(2)}`;
});
