$(function() {
    var swiper = new Swiper(".js-slider", {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2000, // 每個幻燈片停留的時間（以毫秒為單位）
            disableOnInteraction: false, // 用戶互動後是否要停用自動播放
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
        },
    });
});



function scrollToSection(sectionId, offset) {
    const element = document.getElementById(sectionId);
    const yOffset = offset || -80; // 調整這裡的數值來匹配導航欄的高度
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
}


//跳轉至表單
document.getElementById('btn-toForm').addEventListener('click', function() {
    scrollToSection('form-section', -80);
});

document.getElementById('btn-toForm-second').addEventListener('click', function() {
    scrollToSection('form-section', -80);
});

//跳轉至企業
document.getElementById('btn-enterprise').addEventListener('click', function() {
    scrollToSection('enterprise-section', -80);
});

//跳轉至法人
document.getElementById('btn-npo').addEventListener('click', function() {
    scrollToSection('npo-section', -80);
});

//跳轉至產品詳情
document.getElementById('btn-info').addEventListener('click', function() {
    scrollToSection('product-section', -80);
});

document.getElementById('btn-info-second').addEventListener('click', function() {
    scrollToSection('product-section', -80);
});

document.getElementById('btn-info-third').addEventListener('click', function() {
    scrollToSection('product-section', -80);
});

document.getElementById('btn-info-forth').addEventListener('click', function() {
    scrollToSection('product-section', -80);
});

document.getElementById('btn-info-fifth').addEventListener('click', function() {
    scrollToSection('product-section', -80);
});


//表單提交行為、串接google sheet
document.getElementById('joinForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const checkboxes = document.querySelectorAll('input[name="interest"]:checked');
    const errorDiv = document.getElementById('checkbox-error');
    
    if (checkboxes.length === 0) {
        errorDiv.style.display = 'block';
        return; // 如果沒有選擇任何選項，阻止表單提交
    } else {
        errorDiv.style.display = 'none';
    }
    
    var formData = new FormData(this);
    var data = {};
    formData.forEach((value, key) => {
        if (!data[key]) {
            data[key] = value;
        } else {
            data[key] = [].concat(data[key], value);
        }
    });

    // 禁用提交按鈕
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerText = '提交中...';

    fetch('https://script.google.com/macros/s/AKfycbwZpASi0F7JTiV_X8b6mnUGiEyW1ijF0KuTHlo3ECDerLSZSFcOU9szbNtMajD8_MesPw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data)
    })
        .then(response => {
            alert('表單已成功送出！');
            document.getElementById('joinForm').reset(); // 清空表單
            // 啟用提交按鈕
            submitBtn.disabled = false;
            submitBtn.innerText = '送出';
        })
        .catch(error => {
            alert('表單提交失敗，請重試。');
            // 啟用提交按鈕
            submitBtn.disabled = false;
            submitBtn.innerText = '送出';
        });
});

