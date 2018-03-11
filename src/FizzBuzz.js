import React, { Component } from 'react';
import './FizzBuzz.css';

class FizzBuzz extends Component {
    render() {
        const fizz = <span className="fizz">Fizz </span>;
        const buzz = <span className="buzz">Buzz </span>;
        const fizzbuzz = <span className="fizzbuzz">Fizzbuzz </span>;

        const number = 100;
        let items = [];

        for(let i = 1; i <= number; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log(i);
                items.push(fizzbuzz);
            } else if (i % 3 === 0) {
                items.push(fizz);
            } else if (i % 5 === 0) {
                items.push(buzz);
            } else {
                items.push(i + " ");
            }
        }

        const listItems = items.map(item => item);
        return <p className="fizzbuzz-items">{listItems}</p>;
    }
}

export default FizzBuzz;