export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePhone = (phone) => {
    const phoneRegex = /^\+54\s9\s\d{3}\s\d{3}\s\d{3}$/;
    return phoneRegex.test(phone);
};  