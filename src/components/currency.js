import {Routes, Route} from "react-router-dom";
import {useState} from "react";

function Currency({facade}) {

    const [amount, setAmount] = useState(0);
    const [userInput, setUserInput] = useState({from:"DKK", to:"DKK",amount:0})

    const onChange = (evt) =>
    {
        setUserInput({ ...userInput, [evt.target.id]: evt.target.value })
    }


    return (
        <div>
            <ul className="currency">
                <h1>Currency Component</h1>
            </ul>
            <br></br>
        
            <form onChange={onChange}>
        <label for="currencyfrom">Choose a currency to convert from:</label>
        
        <select name="currencyfrom" id="from">
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="EUR">Euro (Euro)</option>
        </select>

        <br></br>
        <label for="currencyto">Choose a currency to convert to:</label>

        <select name="currencyto" id="to">
            <option value="DKK">Danish Krone (DKK)</option>
            <option value="USD">US Dollar (USD)</option>
            <option value="RUB">Russian Ruble (RUB)</option>
            <option value="EUR">Euro (EUR)</option>
        </select>

            <br/>
        
            <label for="amount">Amount to convert:</label> <br></br>
            <input type="number" id="amount" name="Amount"/>
        </form> <br></br>

        <button id="subButton" type="button" onClick={getInput}>Convert</button>

        <p>Conversion:{amount}</p>
        
        <p>
        {JSON.stringify(userInput)}
        </p>

        </div>

    );

    


    function getInput() {
        facade.postData(
            {"amount": userInput.amount,
            "from":userInput.from,
            "to":userInput.to},
            setAmount,
            )

    }
}

export default Currency;