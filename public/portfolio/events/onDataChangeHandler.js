const cleanErrorsOnDataChange = require("../utils/cleanErrorsOnDataChange");

const onDataChangeHandler = () => {
    const facebook = document.getElementById('facebook');
    const twitter = document.getElementById('twitter');
    const pinterest = document.getElementById('pinterest');
    const instagram = document.getElementById('instagram');
    const slack = document.getElementById('slack');
    const skype = document.getElementById('skype');

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const about = document.getElementById('about');
    const twitterUsername = document.getElementById('twitter-username');

    const clients = document.getElementById('clients');
    const projects = document.getElementById('projects');
    const awards = document.getElementById('awards');
    const yearsExperience = document.getElementById('years-experience');

    const address = document.getElementById('address');
    const facebookChat = document.getElementById('facebook-chat');
    const phone1 = document.getElementById('phone1');
    const phone2 = document.getElementById('phone2');
    const email1 = document.getElementById('email1');
    const email2 = document.getElementById('email2');

    const facebookErrorContainer = document.querySelector('.facebook-errors');
    const twitterErrorContainer = document.querySelector('.twitter-errors');
    const pinterestErrorContainer = document.querySelector('.pinterest-errors');
    const instagramErrorContainer = document.querySelector('.instagram-errors');
    const slackErrorContainer = document.querySelector('.slack-errors');
    const skypeErrorContainer = document.querySelector('.skype-errors');

    const nameErrorContainer = document.querySelector('.name-errors');
    const emailErrorContainer = document.querySelector('.email-errors');
    const phoneErrorContainer = document.querySelector('.phone-errors');
    const aboutErrorContainer = document.querySelector('.about-errors');
    const twitterUsernameErrorContainer = document.querySelector('.twitter-username-errors');

    const clientsErrorContainer = document.querySelector('.clients-errors');
    const projectsErrorContainer = document.querySelector('.projects-errors');
    const awardsErrorContainer = document.querySelector('.awards-errors');
    const yearsExperienceErrorContainer = document.querySelector('.years-experience-errors');

    const addressErrorContainer = document.querySelector('.address-errors');
    const facebookChatErrorContainer = document.querySelector('.facebook-chat-errors');
    const phone1ErrorContainer = document.querySelector('.phone1-errors');
    const phone2ErrorContainer = document.querySelector('.phone2-errors');
    const email1ErrorContainer = document.querySelector('.email1-errors');
    const email2ErrorContainer = document.querySelector('.email2-errors');

    cleanErrorsOnDataChange(facebook, facebookErrorContainer);
    cleanErrorsOnDataChange(twitter, twitterErrorContainer);
    cleanErrorsOnDataChange(pinterest, pinterestErrorContainer);
    cleanErrorsOnDataChange(instagram, instagramErrorContainer);
    cleanErrorsOnDataChange(slack, slackErrorContainer);
    cleanErrorsOnDataChange(skype, skypeErrorContainer);

    cleanErrorsOnDataChange(name, nameErrorContainer);
    cleanErrorsOnDataChange(email, emailErrorContainer);
    cleanErrorsOnDataChange(phone, phoneErrorContainer);
    cleanErrorsOnDataChange(about, aboutErrorContainer);
    cleanErrorsOnDataChange(twitterUsername, twitterUsernameErrorContainer);

    cleanErrorsOnDataChange(clients, clientsErrorContainer);
    cleanErrorsOnDataChange(projects, projectsErrorContainer);
    cleanErrorsOnDataChange(awards, awardsErrorContainer);
    cleanErrorsOnDataChange(yearsExperience, yearsExperienceErrorContainer);

    cleanErrorsOnDataChange(address, addressErrorContainer);
    cleanErrorsOnDataChange(facebookChat, facebookChatErrorContainer);
    cleanErrorsOnDataChange(phone1, phone1ErrorContainer);
    cleanErrorsOnDataChange(phone2, phone2ErrorContainer);
    cleanErrorsOnDataChange(email1, email1ErrorContainer);
    cleanErrorsOnDataChange(email2, email2ErrorContainer);
}

module.exports = onDataChangeHandler;