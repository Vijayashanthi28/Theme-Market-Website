//Navbar
    // Modal elements
        const tmAuthModal = document.getElementById('tmAuthModal');
        const tmUserBtn = document.getElementById('tmUserBtn');
        const tmCloseModal = document.getElementById('tmCloseModal');
        const tmSignInForm = document.getElementById('tmSignInForm');
        const tmLogInForm = document.getElementById('tmLogInForm');
        const tmSwitchToLogin = document.getElementById('tmSwitchToLogin');
        const tmSwitchToSignIn = document.getElementById('tmSwitchToSignIn');

        // Open modal
        tmUserBtn.addEventListener('click', () => {
            tmAuthModal.classList.add('tm-show');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        tmCloseModal.addEventListener('click', () => {
            tmAuthModal.classList.remove('tm-show');
            document.body.style.overflow = 'auto';
        });

        // Close on overlay click
        tmAuthModal.addEventListener('click', (e) => {
            if (e.target === tmAuthModal) {
                tmAuthModal.classList.remove('tm-show');
                document.body.style.overflow = 'auto';
            }
        });

        // Switch to login
        tmSwitchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            tmSignInForm.classList.add('tm-hidden');
            tmLogInForm.classList.remove('tm-hidden');
        });

        // Switch to sign in
        tmSwitchToSignIn.addEventListener('click', (e) => {
            e.preventDefault();
            tmLogInForm.classList.add('tm-hidden');
            tmSignInForm.classList.remove('tm-hidden');
        });

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && tmAuthModal.classList.contains('tm-show')) {
                tmAuthModal.classList.remove('tm-show');
                document.body.style.overflow = 'auto';
            }
        });

        
           //Featured Producta
         function openCartModal(productName, productPrice, productImage) {
            document.getElementById('modalProductName').textContent = productName;
            document.getElementById('modalProductPrice').textContent = productPrice;
            document.getElementById('modalProductImage').src = productImage;
            document.getElementById('cartModalOverlay').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal(event) {
            if (event && event.target !== document.getElementById('cartModalOverlay')) {
                return;
            }
            document.getElementById('cartModalOverlay').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function goToCheckout() {
            window.location.href = 'cart.html';
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeCartModal();
            }
        });

        //Best Seller Tab
           const tabButtons = document.querySelectorAll('.tab-button');
        const weekContent = document.getElementById('weekContent');
        const monthContent = document.getElementById('monthContent');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Update active tab button
                tabButtons.forEach(btn => btn.classList.remove('active-tab'));
                button.classList.add('active-tab');
                
                // Hide all content
                weekContent.classList.add('content-hidden');
                monthContent.classList.add('content-hidden');
                
                // Remove animation class
                weekContent.style.animation = 'none';
                monthContent.style.animation = 'none';
                
                // Show selected content with animation
                setTimeout(() => {
                    if (targetTab === 'week') {
                        weekContent.classList.remove('content-hidden');
                        weekContent.style.animation = 'fadeInUp 0.6s ease forwards';
                    } else {
                        monthContent.classList.remove('content-hidden');
                        monthContent.style.animation = 'fadeInUp 0.6s ease forwards';
                    }
                }, 50);
            });
        });

//Trending Collection
  // Add smooth scroll behavior
        document.querySelectorAll('.tc-card').forEach(card => {
            card.addEventListener('click', function() {
                console.log('Card clicked:', this.querySelector('.tc-overlay-title').textContent);
            });
        });

        // Add animation on scroll
        const tcObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.tc-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            tcObserver.observe(card);
        });

        // Animate stats on scroll
        const tcStatsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumber = entry.target.querySelector('.tc-stat-number');
                    const finalNumber = statNumber.textContent;
                    animateNumber(statNumber, finalNumber);
                    tcStatsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        document.querySelectorAll('.tc-stat-item').forEach(item => {
            tcStatsObserver.observe(item);
        });

        function animateNumber(element, finalText) {
            const hasPlus = finalText.includes('+');
            const unit = finalText.match(/[MK]/)?.[0] || '';
            const number = parseFloat(finalText.replace(/[^0-9.]/g, ''));
            
            let current = 0;
            const increment = number / 30;
            const duration = 1500;
            const stepTime = duration / 30;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }
                element.textContent = Math.floor(current) + unit + (hasPlus ? '+' : '');
            }, stepTime);
        }

     



//Contact
  // FAQ Toggle Functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Form Submission and Modal
        const contactForm = document.getElementById('contactForm');
        const modal = document.getElementById('successModal');
        const closeBtn = document.getElementById('closeModal');

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show modal
            modal.classList.add('show');
            
            // Reset form
            contactForm.reset();
        });

        // Close modal when button clicked
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
        });

        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                modal.classList.remove('show');
            }
        });

        //Theme
         let allProducts = [];

        // Initialize products array on page load
        window.addEventListener('DOMContentLoaded', function() {
            allProducts = document.querySelectorAll('.product-card');
        });

        function addToCart(productName, price, imageUrl) {
            const modal = document.getElementById('cartModal');
            const modalProductImage = document.getElementById('modalProductImage');
            const modalProductPrice = document.getElementById('modalProductPrice');
            
            modalProductImage.src = imageUrl;
            modalProductPrice.textContent = price;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('cartModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function closeModalOnOverlay(event) {
            if (event.target.id === 'cartModal') {
                closeModal();
            }
        }


        function performSearch() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Show all products if search is empty
                allProducts.forEach(product => {
                    product.style.display = 'block';
                });
                return;
            }

            let foundCount = 0;

            allProducts.forEach(product => {
                const productName = product.getAttribute('data-name').toLowerCase();
                const productKeywords = product.getAttribute('data-keywords').toLowerCase();
                const searchContent = productName + ' ' + productKeywords;
                
                if (searchContent.includes(searchTerm)) {
                    product.style.display = 'block';
                    foundCount++;
                } else {
                    product.style.display = 'none';
                }
            });

            // Show message if no results found
            const sections = document.querySelectorAll('.product-grid');
            sections.forEach(section => {
                const visibleCards = section.querySelectorAll('.product-card[style="display: block;"]');
                let noResultsMsg = section.parentElement.querySelector('.no-results');
                
                if (visibleCards.length === 0) {
                    if (!noResultsMsg) {
                        noResultsMsg = document.createElement('div');
                        noResultsMsg.className = 'no-results';
                        noResultsMsg.textContent = 'No products found matching your search.';
                        section.parentElement.insertBefore(noResultsMsg, section);
                    }
                } else {
                    if (noResultsMsg) {
                        noResultsMsg.remove();
                    }
                }
            });
        }

        // Allow search on Enter key
        document.getElementById('searchInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });


        //Themes

                // Sort Dropdown
        const sortTrigger = document.getElementById('sortTrigger');
        const sortMenu = document.getElementById('sortMenu');
        const sortArrow = document.getElementById('sortArrow');
        const sortLabel = document.getElementById('sortLabel');

        sortTrigger.addEventListener('click', () => {
            sortMenu.classList.toggle('visible');
            sortArrow.classList.toggle('rotated');
        });

        document.querySelectorAll('.sort-option-item').forEach(item => {
            item.addEventListener('click', () => {
                sortLabel.textContent = item.textContent;
                sortMenu.classList.remove('visible');
                sortArrow.classList.remove('rotated');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!sortTrigger.contains(e.target) && !sortMenu.contains(e.target)) {
                sortMenu.classList.remove('visible');
                sortArrow.classList.remove('rotated');
            }
        });

        // View Toggle
        const gridViewBtn = document.getElementById('gridViewBtn');
        const listViewBtn = document.getElementById('listViewBtn');
        const productsGrid = document.getElementById('productsGrid');

        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active-view');
            listViewBtn.classList.remove('active-view');
            productsGrid.classList.remove('list-layout-view');
        });

        listViewBtn.addEventListener('click', () => {
            listViewBtn.classList.add('active-view');
            gridViewBtn.classList.remove('active-view');
            productsGrid.classList.add('list-layout-view');
        });

        // Accordion Filters
        document.querySelectorAll('.filter-accordion-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const accordionName = trigger.dataset.accordion;
                const content = document.querySelector(`[data-content="${accordionName}"]`);
                const chevron = trigger.querySelector('.accordion-chevron');
                
                const isExpanded = content.classList.contains('expanded-accordion');
                
                if (isExpanded) {
                    content.classList.remove('expanded-accordion');
                    chevron.classList.remove('rotated-chevron');
                } else {
                    content.classList.add('expanded-accordion');
                    chevron.classList.add('rotated-chevron');
                }
            });
        });

        // Modal Functions
        function openCartModal(productName, price, imageUrl) {
            const modal = document.getElementById('cartModal');
            const modalPrice = document.getElementById('modalPrice');
            const modalImage = document.getElementById('modalImage');
            
            modalPrice.textContent = price;
            modalImage.src = imageUrl;
            modalImage.alt = productName;
            
            modal.classList.add('modal-visible');
            document.body.style.overflow = 'hidden';
        }

        function closeCartModal() {
            const modal = document.getElementById('cartModal');
            modal.classList.remove('modal-visible');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking overlay
        document.getElementById('cartModal').addEventListener('click', (e) => {
            if (e.target.id === 'cartModal') {
                closeCartModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeCartModal();
            }
        });

        //Payment
           // Payment option selection
        const paymentOptions = document.querySelectorAll('.payment-option-wrapper');
        const radioButtons = document.querySelectorAll('.payment-radio-button');
        
        paymentOptions.forEach((option, index) => {
            option.addEventListener('click', function() {
                // Remove active class from all options
                paymentOptions.forEach(opt => {
                    opt.classList.remove('active-payment-option');
                    const fields = opt.querySelector('.payment-form-fields');
                    if (fields) {
                        fields.classList.remove('show-payment-fields');
                    }
                });
                
                // Add active class to clicked option
                this.classList.add('active-payment-option');
                radioButtons[index].checked = true;
                
                // Show corresponding fields
                const fields = this.querySelector('.payment-form-fields');
                if (fields) {
                    fields.classList.add('show-payment-fields');
                }
            });
        });

        // Format card number with spaces
        document.getElementById('cardNumber').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });

        // Format expiry date
        document.getElementById('cardExpiry').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + ' / ' + value.slice(2, 4);
            }
            e.target.value = value;
        });

        // Process payment function
        function processPayment() {
            const selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');
            
            if (!selectedPayment) {
                alert('Please select a payment method');
                return;
            }

            // Validate fields based on selected payment method
            let isValid = false;
            
            if (selectedPayment.value === 'creditCard') {
                const cardNumber = document.getElementById('cardNumber').value;
                const cardExpiry = document.getElementById('cardExpiry').value;
                const cardCVV = document.getElementById('cardCVV').value;
                
                if (cardNumber && cardExpiry && cardCVV) {
                    isValid = true;
                } else {
                    alert('Please fill in all card details');
                    return;
                }
            } else if (selectedPayment.value === 'bankTransfer') {
                const accountName = document.getElementById('accountName').value;
                const accountNumber = document.getElementById('accountNumber').value;
                const ifscCode = document.getElementById('ifscCode').value;
                const bankName = document.getElementById('bankName').value;
                
                if (accountName && accountNumber && ifscCode && bankName) {
                    isValid = true;
                } else {
                    alert('Please fill in all bank details');
                    return;
                }
            } else if (selectedPayment.value === 'upi') {
                const upiId = document.getElementById('upiId').value;
                const verifyUpiId = document.getElementById('verifyUpiId').value;
                
                if (upiId && verifyUpiId) {
                    if (upiId === verifyUpiId) {
                        isValid = true;
                    } else {
                        alert('UPI IDs do not match');
                        return;
                    }
                } else {
                    alert('Please fill in all UPI details');
                    return;
                }
            }

            if (isValid) {
                // Show loader
                document.getElementById('paymentLoader').classList.add('show-loader');
                document.getElementById('paySecurelyBtn').disabled = true;
                
                // Simulate payment processing (2 seconds)
                setTimeout(() => {
                    // Redirect to confirmation page
                    window.location.href = 'confirmed.html';
                }, 2000);
            }
        }

        function goBack() {
            window.history.back();
        }

        // Allow only numbers for certain fields
        document.getElementById('cardCVV').addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        document.getElementById('accountNumber').addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });

        //Confirmation*/
           function closeWindow() {
            if (confirm('Are you sure you want to close this page?')) {
                window.close();
                // If window.close() doesn't work (for security reasons), redirect to home
                setTimeout(() => {
                    window.location.href = '/';
                }, 100);
            }
        }

        function goToHome() {
            window.location.href = 'index.html';
        }

        // Generate random transaction ID on page load
        window.addEventListener('DOMContentLoaded', function() {
            const transactionId = Math.floor(Math.random() * 900000000000) + 100000000000;
            const transactionElements = document.querySelectorAll('.payment-detail-value');
            if (transactionElements[0]) {
                transactionElements[0].textContent = transactionId;
            }

            // Set current date
            const today = new Date();
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const formattedDate = today.toLocaleDateString('en-GB', options);
            if (transactionElements[1]) {
                transactionElements[1].textContent = formattedDate;
            }
        });

        //cart shopping
          // Initial cart data
        let cartItems = [
            {
                id: 1,
                name: 'Wordpress Theme',
                image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&h=300&fit=crop',
                license: 'Regular License',
                price: 99,
                quantity: 1
            },
            {
                id: 2,
                name: 'Restaurant Template',
                image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
                license: 'Regular License',
                price: 12,
                quantity: 1
            },
            {
                id: 3,
                name: 'Avada - Website Builder',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                license: 'Regular License',
                price: 12,
                quantity: 1
            },
            {
                id: 4,
                name: 'CreativeStudio - Agency',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
                license: 'Regular License',
                price: 15,
                quantity: 1
            }
        ];

        function renderCart() {
            const cartList = document.getElementById('cartItemsList');
            
            if (cartItems.length === 0) {
                cartList.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">🛒</div>
                        <div class="empty-state-text">Your cart is empty</div>
                    </div>
                `;
                updateTotal();
                return;
            }

            cartList.innerHTML = cartItems.map(item => `
                <div class="cart-item-row" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}" class="item-thumbnail">
                    <div class="item-details">
                        <div class="item-title">${item.name}</div>
                        <div class="license-info">License: <span class="license-link">${item.license}</span></div>
                    </div>
                    <div class="item-actions">
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="decreaseQty(${item.id})" ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
                            <span class="qty-display">${item.quantity}</span>
                            <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
                        </div>
                        <div class="item-price">$${item.price * item.quantity}</div>
                        <button class="remove-btn" onclick="removeItem(${item.id})">×</button>
                    </div>
                </div>
            `).join('');

            updateTotal();
        }

        function increaseQty(id) {
            const item = cartItems.find(item => item.id === id);
            if (item) {
                item.quantity++;
                renderCart();
            }
        }

        function decreaseQty(id) {
            const item = cartItems.find(item => item.id === id);
            if (item && item.quantity > 1) {
                item.quantity--;
                renderCart();
            }
        }

        function removeItem(id) {
            cartItems = cartItems.filter(item => item.id !== id);
            renderCart();
        }

        function emptyCart() {
            if (confirm('Are you sure you want to empty your cart?')) {
                cartItems = [];
                renderCart();
            }
        }

        function updateTotal() {
            const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const savings = Math.floor(total * 0.15); // 15% savings
            
            document.getElementById('totalAmount').textContent = `US$ ${total}`;
            document.getElementById('savingsText').textContent = `Total Saving $${savings}`;
        }

        function continueShopping() {
            alert('Redirecting to store...');
        }

        function proceedCheckout() {
            if (cartItems.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Proceeding to checkout...');
        }

        // Initialize cart on page load
        renderCart();