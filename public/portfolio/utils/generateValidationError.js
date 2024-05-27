const fillValidationErrors = require('./fillValidationErrors')

const generateValidationError = (errors) => {
    const facebookErrorContainer = document.querySelector('.facebook-errors');
    facebookErrorContainer.innerHTML = '';
    const twitterErrorContainer = document.querySelector('.twitter-errors');
    twitterErrorContainer.innerHTML = '';
    const pinterestErrorContainer = document.querySelector('.pinterest-errors');
    pinterestErrorContainer.innerHTML = '';
    const instagramErrorContainer = document.querySelector('.instagram-errors');
    instagramErrorContainer.innerHTML = '';
    const slackErrorContainer = document.querySelector('.slack-errors');
    slackErrorContainer.innerHTML = '';
    const skypeErrorContainer = document.querySelector('.skype-errors');
    skypeErrorContainer.innerHTML = '';

    const nameErrorContainer = document.querySelector('.name-errors');
    nameErrorContainer.innerHTML = '';
    const emailErrorContainer = document.querySelector('.email-errors');
    emailErrorContainer.innerHTML = '';
    const phoneErrorContainer = document.querySelector('.phone-errors');
    phoneErrorContainer.innerHTML = '';
    const aboutErrorContainer = document.querySelector('.about-errors');
    aboutErrorContainer.innerHTML = '';
    const twitterUsernameErrorContainer = document.querySelector('.twitter-username-errors');
    twitterUsernameErrorContainer.innerHTML = '';

    const clientsErrorContainer = document.querySelector('.clients-errors');
    clientsErrorContainer.innerHTML = '';
    const projectsErrorContainer = document.querySelector('.projects-errors');
    projectsErrorContainer.innerHTML = '';
    const awardsErrorContainer = document.querySelector('.awards-errors');
    awardsErrorContainer.innerHTML = '';
    const yearsExperienceErrorContainer = document.querySelector('.years-experience-errors');
    yearsExperienceErrorContainer.innerHTML = '';

    const addressErrorContainer = document.querySelector('.address-errors');
    addressErrorContainer.innerHTML = '';
    const facebookChatErrorContainer = document.querySelector('.facebook-chat-errors');
    facebookChatErrorContainer.innerHTML = '';
    const phone1ErrorContainer = document.querySelector('.phone1-errors');
    phone1ErrorContainer.innerHTML = '';
    const phone2ErrorContainer = document.querySelector('.phone2-errors');
    phone2ErrorContainer.innerHTML = '';
    const email1ErrorContainer = document.querySelector('.email1-errors');
    email1ErrorContainer.innerHTML = '';
    const email2ErrorContainer = document.querySelector('.email2-errors');
    email2ErrorContainer.innerHTML = '';
    
    fillValidationErrors(errors, facebookErrorContainer, 'facebook');
    fillValidationErrors(errors, twitterErrorContainer, 'twitter');
    fillValidationErrors(errors, pinterestErrorContainer, 'pinterest');
    fillValidationErrors(errors, instagramErrorContainer, 'instagram');
    fillValidationErrors(errors, slackErrorContainer, 'slack');
    fillValidationErrors(errors, skypeErrorContainer, 'skype');

    fillValidationErrors(errors, nameErrorContainer, 'name');
    fillValidationErrors(errors, emailErrorContainer, 'email');
    fillValidationErrors(errors, phoneErrorContainer, 'phone');
    fillValidationErrors(errors, aboutErrorContainer, 'about');
    fillValidationErrors(errors, twitterUsernameErrorContainer, 'twitterUsername');

    fillValidationErrors(errors, clientsErrorContainer, 'clients');
    fillValidationErrors(errors, projectsErrorContainer, 'projects');
    fillValidationErrors(errors, awardsErrorContainer, 'awards');
    fillValidationErrors(errors, yearsExperienceErrorContainer, 'yearsExperience');

    fillValidationErrors(errors, addressErrorContainer, 'address');
    fillValidationErrors(errors, facebookChatErrorContainer, 'facebookChat');
    fillValidationErrors(errors, phone1ErrorContainer, 'phone1');
    fillValidationErrors(errors, phone2ErrorContainer, 'phone2');
    fillValidationErrors(errors, email1ErrorContainer, 'email1');
    fillValidationErrors(errors, email2ErrorContainer, 'email2');
}

module.exports = generateValidationError;