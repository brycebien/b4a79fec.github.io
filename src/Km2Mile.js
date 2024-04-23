import React from 'react';
import Buttons from './Buttons'
import Km from './Kilometers';
import Mile from './Mile';

function Km2Mile() {
    const [amount, setAmount] = React.useState(0);
    const [flipped, setFlipped] = React.useState(false);
    const onChange = (event) => setAmount(event.target.value);
    const onReset = () => setAmount(0);
    const onFlip = () => {
      onReset();
      setFlipped((flipped) => !flipped);
    } 
    return (
      <div>
        <h3>Km to Miles</h3>
        <Km flipped={flipped} onChange={onChange} amount={amount} />
        <h4>You want to convert from {amount} Km to:</h4>
        <Mile flipped={flipped} onChange={onChange} amount={amount} />
        <Buttons onReset={onReset} onFlip={onFlip} />
      </div>
    )
}
export default Km2Mile;