document.addEventListener('DOMContentLoaded', function() {
    // Product data
    const products = [
        { id: 1, name: 'The Dry Lounge Set', price: 100.00, image: 'assets/images/product-1.jpg' },
        { id: 2, name: 'Southern Thailand', price: 150.00, image: 'assets/images/product-2.jpg' },
        { id: 3, name: 'Bero-Bed Sinterwear', price: 250.00, image: 'assets/images/product-3.jpg' },
        { id: 4, name: 'Distant', price: 180.00, image: 'assets/images/product-4.jpg' },
        { id: 5, name: 'Overland/Stick Cut', price: 250.00, image: 'assets/images/product-5.jpg' },
        { id: 6, name: 'Click Monochrome Blazer', price: 250.00, image: 'assets/images/product-6.jpg' }
    ];

    // DOM Elements
    const addToBundleButtons = document.querySelectorAll('.add-to-bundle');
    const selectedProductsContainer = document.querySelector('.selected-products');
    const emptyMessage = document.querySelector('.empty-message');
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const discountAmount = document.querySelector('.discount-amount');
    const totalAmount = document.querySelector('.total-amount');
    const addToCartButton = document.querySelector('.add-to-cart');

    // State
    let selectedProducts = [];

    // Initialize event listeners
    addToBundleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.closest('.product-card').dataset.id);
            toggleProductSelection(productId, this);
            updateBundleSummary();
        });
    });

    addToCartButton.addEventListener('click', function() {
        if (selectedProducts.length >= 3) {
            console.log('Bundle added to cart:', selectedProducts);
            alert(`Bundle added to cart! ${selectedProducts.length} items selected.`);
        }
    });

    // Toggle product selection
    function toggleProductSelection(productId, button) {
        const product = products.find(p => p.id === productId);
        
        // Check if product is already selected
        const existingIndex = selectedProducts.findIndex(p => p.id === productId);
        
        if (existingIndex >= 0) {
            // Remove product
            selectedProducts.splice(existingIndex, 1);
            button.classList.remove('added');
            button.textContent = 'Add to Bundle';
        } else {
            // Add product
            selectedProducts.push(product);
            button.classList.add('added');
            button.textContent = 'Added';
        }
    }

    // Update bundle summary UI
    function updateBundleSummary() {
        // Update progress bar
        const progressPercentage = (selectedProducts.length / 3) * 100;
        progressFill.style.width = `${Math.min(progressPercentage, 100)}%`;
        progressText.textContent = `${selectedProducts.length}/3 products added`;
        
        // Update selected products list
        renderSelectedProducts();
        
        // Calculate and update prices
        updatePrices();
        
        // Enable/disable add to cart button
        addToCartButton.disabled = selectedProducts.length < 3;
    }

    // Render selected products in sidebar
    function renderSelectedProducts() {
        if (selectedProducts.length === 0) {
            emptyMessage.style.display = 'block';
            selectedProductsContainer.innerHTML = '';
            return;
        }
        
        emptyMessage.style.display = 'none';
        
        let html = '';
        selectedProducts.forEach(product => {
            html += `
                <div class="selected-item" data-id="${product.id}">
                    <div class="selected-item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="selected-item-details">
                        <div class="selected-item-name">${product.name}</div>
                        <div class="selected-item-price">$${product.price.toFixed(2)}</div>
                    </div>
                </div>
            `;
        });
        
        selectedProductsContainer.innerHTML = html;
    }

    // Calculate and update prices
    function updatePrices() {
        const subtotal = selectedProducts.reduce((sum, product) => sum + product.price, 0);
        const discount = selectedProducts.length >= 3 ? subtotal * 0.3 : 0;
        const total = subtotal - discount;
        
        discountAmount.textContent = `-$${discount.toFixed(2)}`;
        totalAmount.textContent = `$${total.toFixed(2)}`;
    }
});