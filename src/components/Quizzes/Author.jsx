import React from 'react';
import { FormattedMessage } from 'react-intl';
export default class Author extends React.Component {
    render() {

        return (
            <div className={"authorContainer"} style={{display: this.props.isFinished ? 'none' : 'flex'}}>

                {this.props.author !== null ?
                    (
                        <div className='authorBox'>

                            <p>
                                <FormattedMessage 
                                    id="quiz.create"
                                    defaultMessage="Creado por" /> {(this.props.author.username !== null) ?
                                this.props.author.username : this.props.author.profileName }
                            </p>

                            <img title={'autor'}
                                 src={this.props.author.photo.url !== null ?
                                 this.props.author.photo.url :
                                 'https://static.diariosur.es/www/pre2017/multimedia/RC/201501/12/media/cortadas/avatar--320x378.jpg'}
                                 alt = ''
                            />

                        </div>
                    ) :
                    (
                        <div>
                            <p className={"authorName"}><FormattedMessage 
                                    id="quiz.anonymous"
                                    defaultMessage="Ánonimo" /></p>
                        </div>
                    )

                }

            </div>

        );

    }
}
