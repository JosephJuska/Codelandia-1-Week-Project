const fillValidationErrors = (errors, container, key) => {
    if(errors?.[key]){
        for(const errorType in errors[key]){
            container.innerHTML += `<p class="text-danger">${errors[key][errorType]}</p>`;
        }
    }
}

module.exports = fillValidationErrors;