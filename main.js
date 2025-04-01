// Tạm thời chưa cần gì ở đây
console.log("Website doanh nghiệp ready!");

const form = document.querySelector('.contact-form');
form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const res = await fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (res.ok) {
    alert("Gửi thành công! Cảm ơn bạn đã liên hệ.");
    form.reset();
  } else {
    alert("Lỗi khi gửi. Vui lòng thử lại sau.");
  }
});
