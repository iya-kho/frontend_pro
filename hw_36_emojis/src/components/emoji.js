import React, { Component } from "react";

export class Emoji extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emojis: {
                crazy: 0,
                underBlanket: 0,
                clown: 0,
                cute: 0,
                sleep: 0
            },
            winnerIsShown: false,
            winner: '',
        }

        this.incrementRate = this.incrementRate.bind(this)
    }


    incrementRate(keyName) {
        const emojis = { ...this.state.emojis };
        emojis[keyName] += 1;
        const winner = Object.keys(emojis).reduce((a, b) => emojis[a] > emojis[b] ? a : b);
        // this.setState({ emojis });
        // this.setState({ winner });
        this.setState(state => {
            return {
                winner: winner,
                emojis: emojis,
                winnerIsShown: false
            }
        })
    }

    showLine(keyName) {
        return (
            <div className="emoji-line">
                <div>
                    <span>{showEmoji(keyName)}</span>
                    <button onClick={() => this.incrementRate(keyName)}>Vote</button>
                </div>
                <div>{this.state.emojis[keyName]}</div>
            </div>
        )
    }

    showWinner() {
        this.setState(state => {
            return {
                winnerIsShown: true,
            }   
        })
    }

    render() {
        return (
            <div className="my-container">
                <h1>Emoji</h1>
                <div className="emoji-wrap">
                    {this.showLine('crazy')}
                    {this.showLine('underBlanket')}
                    {this.showLine('clown')}
                    {this.showLine('cute')}
                    {this.showLine('sleep')}
                </div>
                <button onClick={() => this.showWinner()}>Show Results</button>
                {this.state.winnerIsShown && (
                    <div>
                        The winner is {showEmoji(this.state.winner)}
                    </div>
                )}
            </div>
        )
    }
}


const showEmoji = (emoji) => {
    switch (emoji) {
        case 'crazy':
            return <>🤪</>
        case 'underBlanket':
            return <>😶‍🌫️</>
        case 'clown':
            return <>🤡</>
        case 'cute':
            return <>🤗</>
        case 'sleep':
            return <>😴</>
        default:
            return <>'No such emoji'</>

    }
}

