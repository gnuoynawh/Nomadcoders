import { useState, useEffect } from "react"

/*

    코인에 대한 정보 뿌려주기
    api = https://api.coinpaprika.com/v1/tickers

 */
function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins!</h1>
            {loading ? (
                <strong>"Loading..."</strong>
            ) : (
                <select>
                    {coins.map((coin) => (
                        <option key={coin.id}>
                            {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}
            
        </div>
    );
}

export default App;