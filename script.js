// ملف script.js
document.addEventListener('DOMContentLoaded', function() {
    // بيانات قائمة الطعام
    const menuItems = [
        {
            id: 1,
            name: "كفتة اللحم",
            price: 40,
            image: "img/food5.png",
            category: "main",
            description: "كفتة لحم مشوية مع الأرز والصلصة"
        },
        {
            id: 2,
            name: "سلطة لاسال الجبن",
            price: 18,
            image: "img/food1.png",
            category: "appetizer",
            description: "سلطة طازجة مع الجبن الخاص بنا"
        },
        {
            id: 3,
            name: "عصير كوكتيل",
            price: 12,
            image: "img/food3.png",
            category: "drink",
            description: "مزيج من الفواكه الطازجة"
        },
        {
            id: 4,
            name: "ستيك كابو",
            price: 60,
            image: "img/food4.png",
            category: "main",
            description: "ستيك لحم بقري مع الخضار المشوية"
        },
        {
            id: 5,
            name: "سلطعون جامبو",
            price: 24,
            image: "img/food2.png",
            category: "main",
            description: "سلطعون طازج مع الصلصة الخاصة"
        },
        {
            id: 6,
            name: "توست الجبن",
            price: 6,
            image: "img/food6.png",
            category: "appetizer",
            description: "خبز محمص مع جبنة ذائبة"
        },
        {
            id: 7,
            name: "كيك الشوكولاتة",
            price: 15,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
            category: "dessert",
            description: "كيك شوكولاتة غني بالطبقات"
        },
        {
            id: 8,
            name: "قهوة إسبريسو",
            price: 8,
            image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            category: "drink",
            description: "قهوة إسبريسو إيطالية أصلية"
        }
    ];

    // بيانات التقييمات
    const testimonials = [
        {
            name: "أحمد محمد",
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            text: "أفضل مطعم في المدينة! الطعام رائع والخدمة ممتازة.",
            rating: 5
        },
        {
            name: "فاطمة علي",
            image: "https://randomuser.me/api/portraits/women/2.jpg",
            text: "تجربة رائعة، سأعود بالتأكيد مع أصدقائي.",
            rating: 4
        },
        {
            name: "خالد إبراهيم",
            image: "https://randomuser.me/api/portraits/men/3.jpg",
            text: "نوعية الطعام ممتازة والأسعار معقولة.",
            rating: 5
        },
        {
            name: "سارة عبد الله",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
            text: "الطاقم لطيف جداً والجو العام رائع.",
            rating: 4
        }
    ];

    // عناصر DOM
    const menuContainer = document.querySelector('.menu-items');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    const cartSidebar = document.getElementById('cart');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCartBtn = document.querySelector('.close-cart');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // سلة التسوق
    let cart = [];
    let total = 0;

    // تهيئة الصفحة
    function init() {
        displayMenuItems(menuItems);
        displayTestimonials();
        setupEventListeners();
        updateCartUI();
    }

    // عرض عناصر القائمة
    function displayMenuItems(items) {
        menuContainer.innerHTML = '';
        
        items.forEach(item => {
            const menuItemElement = document.createElement('div');
            menuItemElement.classList.add('menu-item');
            menuItemElement.dataset.category = item.category;
            
            menuItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h3 class="menu-item-name">${item.name}</h3>
                        <span class="menu-item-price">${item.price} رس</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <button class="btn btn-primary menu-item-btn" data-id="${item.id}">أضف إلى السلة</button>
                </div>
            `;
            
            menuContainer.appendChild(menuItemElement);
        });
        
        // إضافة حدث النقر لأزرار إضافة إلى السلة
        const addToCartButtons = document.querySelectorAll('.menu-item-btn');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });
    }

    // عرض التقييمات
    function displayTestimonials() {
        testimonials.forEach(testimonial => {
            const testimonialElement = document.createElement('div');
            testimonialElement.classList.add('testimonial');
            
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < testimonial.rating 
                    ? '<i class="fas fa-star"></i>' 
                    : '<i class="far fa-star"></i>';
            }
            
            testimonialElement.innerHTML = `
                <div class="testimonial-text">
                    <p>${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="author-img">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <div class="rating">${stars}</div>
                    </div>
                </div>
            `;
            
            testimonialsContainer.appendChild(testimonialElement);
        });
    }

    // إعداد مستمعي الأحداث
    function setupEventListeners() {
        // تصفية القائمة
        filterButtons.forEach(button => {
            button.addEventListener('click', filterMenu);
        });
        
        // فتح وإغلاق السلة
        document.querySelector('.nav-cart').addEventListener('click', openCart);
        closeCartBtn.addEventListener('click', closeCart);
        cartOverlay.addEventListener('click', closeCart);
        
        // القائمة المتنقلة
        hamburger.addEventListener('click', toggleMenu);
        
        // إغلاق القائمة عند النقر على رابط
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // نموذج الحجز
        document.getElementById('booking-form').addEventListener('submit', handleBooking);
        
        // إكمال الطلب
        document.querySelector('.checkout-btn').addEventListener('click', checkout);
    }

    // تصفية القائمة حسب التصنيف
    function filterMenu() {
        const filter = this.dataset.filter;
        
        // تحديث الزر النشط
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        if (filter === 'all') {
            displayMenuItems(menuItems);
        } else {
            const filteredItems = menuItems.filter(item => item.category === filter);
            displayMenuItems(filteredItems);
        }
    }

    // إضافة عنصر إلى السلة
    function addToCart() {
        const id = parseInt(this.dataset.id);
        const item = menuItems.find(item => item.id === id);
        
        // التحقق إذا كان العنصر موجوداً بالفعل في السلة
        const existingItem = cart.find(cartItem => cartItem.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        updateCartUI();
        showNotification(`تم إضافة ${item.name} إلى السلة`);
    }

    // تحديث واجهة سلة التسوق
    function updateCartUI() {
        // تحديث العداد
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        
        // تحديث العناصر
        cartItems.innerHTML = '';
        total = 0;
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.classList.add('cart-item');
            
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <span class="cart-item-price">${item.price} رس</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            
            cartItems.appendChild(cartItemElement);
            
            // تحديث المجموع
            total += item.price * item.quantity;
        });
        
        // تحديث السعر الإجمالي
        totalPrice.textContent = `${total.toFixed(2)} رس`;
        
        // إضافة الأحداث للأزرار
        const decreaseButtons = document.querySelectorAll('.decrease');
        const increaseButtons = document.querySelectorAll('.increase');
        const removeButtons = document.querySelectorAll('.remove-item');
        
        decreaseButtons.forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        
        increaseButtons.forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        
        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // تقليل الكمية
    function decreaseQuantity() {
        const id = parseInt(this.dataset.id);
        const item = cart.find(item => item.id === id);
        
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            cart = cart.filter(item => item.id !== id);
        }
        
        updateCartUI();
    }

    // زيادة الكمية
    function increaseQuantity() {
        const id = parseInt(this.dataset.id);
        const item = cart.find(item => item.id === id);
        
        item.quantity += 1;
        updateCartUI();
    }

    // إزالة العنصر
    function removeItem() {
        const id = parseInt(this.dataset.id);
        cart = cart.filter(item => item.id !== id);
        updateCartUI();
    }

    // فتح السلة
    function openCart() {
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // إغلاق السلة
    function closeCart() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // تبديل القائمة المتنقلة
    function toggleMenu() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    }

    // التعامل مع الحجز
    function handleBooking(e) {
        e.preventDefault();
        alert('تم استلام طلب الحجز، سنتواصل معك قريباً للتأكيد!');
        this.reset();
    }

    // إكمال الطلب
    function checkout() {
        if (cart.length === 0) {
            alert('السلة فارغة! أضف بعض العناصر أولاً.');
            return;
        }
        
        alert(`تم استلام طلبك! المجموع: ${total.toFixed(2)} رس. شكراً لطلبك من Food Lover!`);
        cart = [];
        updateCartUI();
        closeCart();
    }

    // عرض إشعار
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            z-index: 1000;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // إظهار الإشعار
        setTimeout(() => {
            notification.style.opacity = '1';
            notification.style.transform = 'translateY(0)';
        }, 100);
        
        // إخفاء الإشعار بعد 3 ثوان
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(20px)';
            
            // إزالة الإشعار من DOM بعد انتهاء الانتقال
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // بدء التطبيق
    init();
});