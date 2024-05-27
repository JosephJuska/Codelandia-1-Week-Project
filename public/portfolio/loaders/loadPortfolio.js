const getPortfolioRequest = require('../request/getPortfolioRequest');
const generateError = require('../utils/generateError');
const generateSuccess = require('../utils/generateSuccess');

const loadPortfolio = async () => {
    const result = await getPortfolioRequest();
    if(result.success){
        const data = result.data;

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

        facebook.value = data.facebook;
        twitter.value = data.twitter;
        pinterest.value = data.pinterest;
        instagram.value = data.instagram;
        slack.value = data.slack;
        skype.value = data.skype;

        name.value = data.name;
        email.value = data.email;
        phone.value = data.phone;
        about.value = data.about;
        twitterUsername.value = data.twitterUsername;

        clients.value = data.clients;
        projects.value = data.projects;
        awards.value = data.awards;
        yearsExperience.value = data.yearsExperience;

        address.value = data.address;
        facebookChat.value = data.facebookChat;
        phone1.value = data.phone1;
        phone2.value = data.phone2;
        email1.value = data.email1;
        email2.value = data.email2;
        generateSuccess('Portfolio updated successfully');
    }else{
        generateError('Error happened while getting the edited portfolio');
    }
}

module.exports = loadPortfolio;