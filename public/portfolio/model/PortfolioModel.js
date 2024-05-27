const Model = require("./Model");
const fields = require('../validators/fields/fields');
const { validateFullName, validateTwitterUsername } = require("../validators/portfolioValidators");

// {
//     "facebook": "https://www.facebook.com/",
//     "twitter": "https://x.com/",
//     "pinterest": "https://www.pinterest.com/",
//     "instagram": "https://www.instagram.com/",
//     "slack": "https://slack.com/intl/en-gb/",
//     "skype": "https://www.skype.com/en/",

//     "name": "Jose Mourinho",
//     "email": "test@test.com",
//     "phone": "+994775599519",
//     "about": "aobut text here",

//     "clients": 20,
//     "projects": 15,
//     "awards": 10,
//     "yearsExperience": 12,

//     "address": "address",
//     "phone1": "+994775599519",
//     "phone2": null,
//     "email1": "email@example.com",
//     "email2": null,
//     "facebookChat": "something"
//   }

const PortfolioModel = new Model({
    'facebook': new fields.URLField(
        'facebook', 512
    ),

    'twitter': new fields.URLField(
        'twitter', 512
    ),

    'pinterest': new fields.URLField(
        'pinterest', 512
    ),

    'instagram': new fields.URLField(
        'instagram', 512
    ),

    'slack': new fields.URLField(
        'slack', 512
    ),

    'skype': new fields.URLField(
        'skype', 512
    ),



    'name': new fields.StringField(
        'name', 256, null, false, false, null, false, {}, [validateFullName]
    ),

    'email': new fields.EmailField(
        'email', 256
    ),

    'phone': new fields.PhoneNumberField(
        'phone', 128, null
    ),

    'about': new fields.StringField(
        'about', 512
    ),

    'twitterUsername': new fields.StringField(
        'twitterUsername', 128, null, false, false, null, false, {}, [validateTwitterUsername]
    ),



    'clients': new fields.NumberField(
        'clients', true, null, 0
    ),

    'projects': new fields.NumberField(
        'projects', true, null, 0
    ),

    'awards': new fields.NumberField(
        'awards', true, null, 0
    ),

    'yearsExperience': new fields.NumberField(
        'yearsExperience', true, null, 0
    ),



    'address': new fields.StringField(
        'address', 256
    ),

    'phone1': new fields.PhoneNumberField(
        'phone1', 128
    ),

    'phone2': new fields.PhoneNumberField(
        'phone2', 128, null, true, true, null, true, {'unique': 'phone numbers cannot be same'}
    ),

    'email1': new fields.EmailField(
        'email1', 256
    ),

    'email2': new fields.EmailField(
        'email2', 256, null, true, true, null, true, {'unique': 'email addresses cannot be same'} 
    ),

    'facebookChat': new fields.StringField(
        'facebookChat', 128
    )
});

module.exports = PortfolioModel;