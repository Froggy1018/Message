document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('form');
    if (!form) return;

    form.addEventListener('submit', function(e){
        e.preventDefault();
        const data = new FormData();
        data.append('entry.1589421429', document.getElementById('who').value);
        data.append('entry.537018771', document.getElementById('classmate name').value);
        data.append('entry.1667259537', document.getElementById('message').value);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLScXUC4C2_Mb36asCODrAJPZAqvJwiTfqlHHKlzCrg0coIjCBA/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
        })
    })
})