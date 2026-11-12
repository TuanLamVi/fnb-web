/**
 * F&B SMART V5.1 — Official Website JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Sticky Download Bar on Scroll
  const stickyBar = document.getElementById('sticky-download-bar');
  if (stickyBar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    });
  }

  // ROI Calculator Logic (Transparent calculation using user-entered metrics and staff scale factor)
  const staffInput = document.getElementById('roi-staff');
  const ordersInput = document.getElementById('roi-orders');
  const daysInput = document.getElementById('roi-days');
  const lossInput = document.getElementById('roi-loss');
  const hoursInput = document.getElementById('roi-hours');

  const outManualHours = document.getElementById('out-manual-hours');
  const outTotalOrders = document.getElementById('out-total-orders');
  const outTotalLoss = document.getElementById('out-total-loss');

  function calculateROI() {
    if (!staffInput || !ordersInput || !daysInput || !lossInput || !hoursInput) return;

    const staff = parseInt(staffInput.value) || 0;
    const orders = parseInt(ordersInput.value) || 0;
    const days = parseInt(daysInput.value) || 0;
    const dailyLoss = parseFloat(lossInput.value) || 0;
    const dailyHours = parseFloat(hoursInput.value) || 0;

    // Update displayed range values
    document.getElementById('val-staff').textContent = staff;
    document.getElementById('val-orders').textContent = orders;
    document.getElementById('val-days').textContent = days;
    document.getElementById('val-loss').textContent = dailyLoss.toLocaleString('vi-VN') + ' đ';
    document.getElementById('val-hours').textContent = dailyHours;

    // Calculations incorporating staff scale factor (more staff increases manual coordination overhead)
    const staffScaleFactor = 1 + Math.max(0, (staff - 1) * 0.05);
    const monthlyManualHours = Math.round(dailyHours * days * staffScaleFactor);
    const monthlyTotalOrders = Math.round(orders * days);
    const monthlyLoss = Math.round(dailyLoss * days);

    if (outManualHours) outManualHours.textContent = monthlyManualHours.toLocaleString('vi-VN') + ' giờ/tháng';
    if (outTotalOrders) outTotalOrders.textContent = monthlyTotalOrders.toLocaleString('vi-VN') + ' đơn/tháng';
    if (outTotalLoss) outTotalLoss.textContent = monthlyLoss.toLocaleString('vi-VN') + ' đ/tháng';
  }

  [staffInput, ordersInput, daysInput, lossInput, hoursInput].forEach(input => {
    if (input) {
      input.addEventListener('input', calculateROI);
    }
  });

  calculateROI(); // Initial run

  // Demo Registration Form Validation & Feedback (Pending backend connection, no data collection)
  const demoForm = document.getElementById('demo-form');
  const formStatus = document.getElementById('form-status');
  const API_ENDPOINT = '/api/v1/demo-register'; // Placeholder pending backend connection

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('demo-name').value.trim();
      const storeName = document.getElementById('demo-store').value.trim();
      const phone = document.getElementById('demo-phone').value.trim();
      const terms = document.getElementById('demo-terms').checked;

      // Validation
      if (!name || !storeName || !phone) {
        showFormMessage('Vui lòng điền đầy đủ họ tên, tên quán và số điện thoại.', 'error');
        return;
      }

      // Exact requested phone regex: /^0[35789][0-9]{8}$/
      const phoneRegex = /^0[35789][0-9]{8}$/;
      if (!phoneRegex.test(phone)) {
        showFormMessage('Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng số di động Việt Nam gồm 10 chữ số bắt đầu bằng 03, 05, 07, 08, 09.', 'error');
        return;
      }

      if (!terms) {
        showFormMessage('Bạn phải đồng ý với điều kiện xử lý dữ liệu trước khi tiếp tục.', 'error');
        return;
      }

      // Clear notice: Form in pending backend connection state, data not sent or stored
      showFormMessage(
        'Chính sách bảo mật dữ liệu đang chờ PO phê duyệt. Form hiện ở trạng thái chờ kết nối API backend (' + API_ENDPOINT + '). Dữ liệu của bạn chưa được lưu trữ hoặc gửi đi. Vui lòng liên hệ trực tiếp.',
        'pending'
      );
    });
  }

  function showFormMessage(msg, type) {
    if (!formStatus) return;
    formStatus.textContent = msg;
    if (type === 'success') {
      formStatus.className = 'p-4 rounded-lg text-sm font-medium bg-emerald-50 text-emerald-800 border border-emerald-200';
    } else if (type === 'pending') {
      formStatus.className = 'p-4 rounded-lg text-sm font-medium bg-amber-50 text-amber-800 border border-amber-200';
    } else {
      formStatus.className = 'p-4 rounded-lg text-sm font-medium bg-red-50 text-red-800 border border-red-200';
    }
    formStatus.classList.remove('hidden');
  }

  // FAQ Accordion
  window.toggleFAQ = function(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');
    content.classList.toggle('hidden');
    if (icon) {
      icon.classList.toggle('rotate-180');
    }
  };
});
