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
const handlePortfolioFormData = () => {
    const data = {
        facebook: facebook.value,
        twitter: twitter.value,
        pinterest: pinterest.value,
        instagram: instagram.value,
        slack: slack.value,
        skype: skype.value,

        name: name.value,
        email: email.value,
        phone: phone.value,
        about: about.value,
        twitterUsername: twitterUsername.value,

        clients: clients.value,
        projects: projects.value,
        awards: awards.value,
        yearsExperience: yearsExperience.value,

        address: address.value,
        facebookChat: facebookChat.value,
        phone1: phone1.value,
        phone2: phone2.value,
        email1: email1.value,
        email2: email2.value
    }

    return data;
}

module.exports = {
    handlePortfolioFormData
}