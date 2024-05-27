const Model = require('./Model');
const fields = require('../validators/fields/fields');
const { validateNameContainsLetters } = require('../validators/messageValidators');

const MessageModel = new Model(
    {
        name: new fields.StringField(
            'name', 64, null, true, true, 'Anonymous', false, {}, [validateNameContainsLetters]
        ),

        email: new fields.EmailField(
            'email', 256, null, false, false, null
        ),

        subject: new fields.StringField(
            'subject', 128
        ),

        message: new fields.StringField(
            'message', 512
        )
    }
);

module.exports = MessageModel;