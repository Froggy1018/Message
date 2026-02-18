console.log('messages.js loaded');

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOMContentLoaded fired');
    const form = document.getElementById('form');
    console.log('Form element:', form);
    
    if (!form) {
        console.error('Form with id="form" not found!');
        return;
    }

    form.addEventListener('submit', function(e){
        console.log('Form submit event fired');
        e.preventDefault();
        
        const toValue = document.getElementById('who').value;
        const nameValue = document.getElementById('classmate_name').value;
        const messageValue = document.getElementById('message').value;
        
        console.log('Values:', {to: toValue, name: nameValue, message: messageValue});

        const url = new URL('https://docs.google.com/forms/d/e/1FAIpQLScXUC4C2_Mb36asCODrAJPZAqvJwiTfqlHHKlzCrg0coIjCBA/formResponse');
        url.searchParams.append('entry.1589421429', toValue);
        url.searchParams.append('entry.537018771', nameValue);
        url.searchParams.append('entry.1667259537', messageValue);

        fetch(url, {
            method: 'POST',
            mode: 'no-cors'
        }).then(function(response) {
            console.log('Submission sent');
            alert('Message submitted successfully!');
            form.reset();
        }).catch(function(error) {
            console.error('Error:', error);
            alert('Error submitting form');
        });
    });
});

