function Km({flipped, onChange, amount}) {
    return (
        <div>
            <label htmlFor="km">Km</label>
            <input 
                value={flipped ? amount * 1.60934 : amount}
                id="km" 
                placeholder="Km"
                type="number"
                onChange={onChange}
                disabled={flipped === true}
            />
        </div>
    )
}
export default Km;
