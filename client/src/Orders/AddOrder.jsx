import React from "react";

export default function AddOrder(props) {
  return (
    <section>
      <h2>Add new order</h2>
      <form>
        <div>
          <label htmlFor="numOfItems">Number of items</label>
          <select name="numOfItems" id="numOfItems">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </div>
        <div>
          <label htmlFor="date">Date of the order</label>
          <input type="text" value="04/01/2023" />
        </div>
        <p>
          Total price: <span>$$$</span>
        </p>
        <button>Add order</button>
      </form>
    </section>
  );
}
