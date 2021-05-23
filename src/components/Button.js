import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class Button extends Component {

    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'submit' : 'enviar';
        return (
            <button className="ui button primary">{text}</button>
        )
    }
}
