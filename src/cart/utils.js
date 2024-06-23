export function formatPrice(price) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Adjust currency code as needed
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return formatter.format(price);
}
