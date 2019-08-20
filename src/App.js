import React, {Component} from 'react';
import './App.css';
import Word from "./Word";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: null,
      minutes: null,
      minutePoint: null,
      words: [
        {
          title: 'it is',
          condition: () => true,
        }, {
          title: 'half',
          condition: () => this.state.minutes === 30,
        }, {
          title: 'ten',
          condition: () => this.state.minutes === 10,
        }, {
          title: 'quarter',
          condition: () => this.state.minutes === 15 || this.state.minutes === 45,
        }, {
          title: 'twenty',
          condition: () => this.state.minutes === 20 || this.state.minutes === 25 || this.state.minutes === 40 || this.state.minutes === 35
        }, {
          title: 'five',
          condition: () => this.state.minutes === 5 || this.state.minutes === 25 || this.state.minutes === 35 || this.state.minutes === 55,
        }, {
          title: 'minutes',
          condition: () => this.state.minutes > 0 && this.state.minutes !== 30 && this.state.minutes !== 15 && this.state.minutes !== 45,
        }, {
          title: 'to',
          condition: () => this.state.minutes > 30,
        }, {
          title: 'past',
          condition: () => this.state.minutes <= 30,
        }, {
          title: 'two',
          condition: () => this.state.hours === 2,
        }, {
          title: 'three',
          condition: () => this.state.hours === 3,
        }, {
          title: 'one',
          condition: () => this.state.hours === 1,
        }, {
          title: 'four',
          condition: () => this.state.hours === 4,
        }, {
          title: 'five',
          condition: () => this.state.hours === 5,
        }, {
          title: 'six',
          condition: () => this.state.hours === 6,
        }, {
          title: 'seven',
          condition: () => this.state.hours === 7,
        }, {
          title: 'eight',
          condition: () => this.state.hours === 8,
        }, {
          title: 'nine',
          condition: () => this.state.hours === 9,
        }, {
          title: 'ten',
          condition: () => this.state.hours === 10,
        }, {
          title: 'eleven',
          condition: () => this.state.hours === 11,
        }, {
          title: 'twelve',
          condition: () => this.state.hours === 12,
        }, {
          title: 'o\'clock',
          condition: () => true,
        },

      ]
    };
  }

  componentDidMount() {
    setInterval(this.getDate, 1000)
  }

  getDate = () => {
    const date = new Date();
    const minutePoint = (date.getMinutes() + 60) % 5;
    const minutes = date.getMinutes() - minutePoint;
    const hours = minutes <= 30
      ? (date.getHours() + 24) % 12 || 12
      : ((date.getHours() + 24) % 12) + 1 || 1;

    this.setState({
      hours,
      minutes,
      minutePoint
    })
  };

  render() {
    const {minutePoint} = this.state;
    return (
      <div className="App">
        <main className="App-container">
          <div className="clock-box">
            {this.state.words.map((word, i) => (
              <Word
                isActive={word.condition()}
                title={word.title}
                key={i}
              />
            ))}
            <ul className="dots">
              <li className={minutePoint >= 1 ? "dot active" : "dot"}/>
              <li className={minutePoint >= 2 ? "dot active" : "dot"}/>
              <li className={minutePoint >= 3 ? "dot active" : "dot"}/>
              <li className={minutePoint === 4 ? "dot active" : "dot"}/>
            </ul>
          </div>

        </main>
      </div>
    )
  };
}

export default App;
