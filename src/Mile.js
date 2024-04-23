function Mile({flipped, onChange, amount}) {
    return (
        <div>
            <label htmlFor="mile">Mile</label>
            <input 
                value={flipped ? amount: Math.round(amount / 1.60934)}
                id="mile" 
                placeholder="Mile"
                type="number"
                onChange={onChange}
                disabled={flipped === false}
            />
        </div>
    )
}
export default Mile;
