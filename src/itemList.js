import React from 'react';

export default function ItemList (props){
  return (
    <div className="App">
      <header>
        <h1>ELF Computing | Laptops</h1>
      </header>
      <main>
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {props.features}
        </form>
        <section className="main__summary">
          <h2>Your cart</h2>
          {props.summary}
          <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
              {props.USCurrencyFormat.format(props.total)}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}