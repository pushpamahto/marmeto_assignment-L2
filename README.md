# marmeto_assignment-L2


# Bundle Builder UI

A static implementation of a Shopify-style bundle builder section that allows users to select products and receive a discount when they add 3 or more items to their bundle.

## Features

- Responsive grid of 6 product cards with images, titles, and prices
- Toggle-style "Add to Bundle" buttons that change to "Added" state
- Bundle sidebar that shows:
  - Progress bar indicating how many items have been selected
  - List of selected products with thumbnails and prices
  - Automatic 30% discount calculation when 3+ products are added
  - Subtotal reflecting the discounted price
- "Add Bundle to Cart" button that becomes enabled when 3+ products are selected

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid)
- Vanilla JavaScript (no frameworks or libraries)

## File Structure

/bundle-builder/
├── index.html # Main HTML file
├── style.css # All styling
├── script.js # Interactive functionality
└── assets/ # Image assets
├── images/ # Product images
└── icons/ # SVG icons


## How It Works

1. Users can click "Add to Bundle" buttons to select products
2. The sidebar updates in real-time to show:
   - Progress toward the 3-item requirement
   - List of selected products
   - Discount calculation (30% off when 3+ items selected)
   - Final subtotal
3. The "Add Bundle to Cart" button is enabled once 3 items are selected
4. Clicking the button logs the selected bundle to the console (simulated cart addition)

## Responsive Design

- On desktop: Product grid on left, sticky sidebar on right
- On mobile: Product grid stacks vertically, sidebar appears below

## Future Enhancements

1. Add quantity selectors for each product
2. Animate the "Added" state with transitions
3. Allow removing items directly from the sidebar
4. Show a confirmation modal when adding to cart