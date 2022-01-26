function result() {
    return (
        <div>
            <ul className="result">
                <h1>Result Page</h1>
                <p>response</p>
            </ul>
        </div>
    );

    fetch("https://currency-exchange.p.rapidapi.com/exchange?from=SGD&to=MYR&q=1.0", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "572ba8a24cmshbdf757b81bf0127p1c234ajsn55b0fef5f0bc"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
}

export default result();