import React from 'react';


export default class Image extends React.Component {
    render() {
        if (this.props.att === null) {
            return (
                <div>
                    <img src='https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                        alt={this.props.question}
                    />
                </div>
            );
        }
        else {
            return (
                <div>
                    <img src={this.props.att.url}
                        alt={this.props.question}
                    />
                </div>
            );
        }
    }
}
