/* علامه الهامبرجر */
  document.addEventListener('DOMContentLoaded', function() {
      const menuToggle = document.getElementById('menuToggle');
      const headerLinks = document.querySelector('.header-links');

      if (menuToggle && headerLinks) {
          // فتح وإغلاق القائمة عند الضغط على زر الهامبرجر
          menuToggle.addEventListener('click', function() {
              headerLinks.classList.toggle('active');
          });

          // إغلاق القائمة عند الضغط على أي رابط بالداخل
          const navLinks = headerLinks.querySelectorAll('a');
          navLinks.forEach(link => {
              link.addEventListener('click', () => {
                  headerLinks.classList.remove('active');
              });
          });
      }
  });


  /* حجز الموعد */

let selectedTime = ""; 

// 1. تشغيل الكود عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() { 
    setupEventListeners(); 
}); 

// 2. ربط الأزرار بالوظائف
function setupEventListeners() { 
    // زر التالي
    const nextBtn = document.querySelector('.next-btn'); 
    if (nextBtn) nextBtn.addEventListener('click', handleNextStep); 

    // أزرار المواعيد
    const slots = document.querySelectorAll('.slot'); 
    slots.forEach(slot => { 
        slot.addEventListener('click', function() { 
            handleSlotSelection(this); 
        }); 
    }); 

    // زر تأكيد الحجز
    const submitBtn = document.querySelector('.submit-btn'); 
    if (submitBtn) submitBtn.addEventListener('click', handleFinalSubmit); 
} 

// 3. التحقق من البيانات (الاسم والهاتف)
function handleNextStep(e) { 
    e.preventDefault(); 
    const inputs = document.querySelectorAll('.appointment-form input'); 
    const name = inputs[1].value.trim(); 
    const phone = inputs[3].value.trim(); 

    if (name === "" || phone === "") { 
        alert("يرجى إدخال الاسم ورقم الهاتف أولاً"); 
        return; 
    } 
    document.querySelector('.time-slots').classList.add('active'); 
} 

// 4. اختيار الموعد
function handleSlotSelection(button) { 
    document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected')); 
    button.classList.add('selected'); 
    selectedTime = button.innerText; 
} 

// 5. الإرسال النهائي وتغيير الرابط (URL)
function handleFinalSubmit() { 
    if (selectedTime === "") { 
        alert("الرجاء اختيار وقت الموعد أولاً"); 
        return; 
    } 

    // يفتح الرابط ويضع فيه كلمة تم-الحجز
    window.location.href = "index.html?status=تم-الحجز";
}
