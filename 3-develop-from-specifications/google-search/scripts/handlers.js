function googleIt(event) {
    // read & process user input
    const query = event.target.form.query.value

    // call the core logic
    const url = googleUrl(query)

    // render results for the user
    window.open(url, '_blank')

    // log action for developers
    console.log('\n-- user action --');
    console.log('variable:', '(' + typeof url + ')', url);

    // tell the browser everything is OK
    return true;
}