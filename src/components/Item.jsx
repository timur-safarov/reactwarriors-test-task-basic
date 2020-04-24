import React, { Component } from 'react'

export class Item extends Component {

	validUrlImg(url) {
		return /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/i.test(url);
	}


	render() {

		const { data } = this.props;

		return (

            <div style={{border: "black 1px solid", marginBottom: "10px", padding: "5px"}}>
              {
                this.validUrlImg(data.thumbnail) && <img src={data.thumbnail} alt="" />
              }
              <p>Title</p>
              <p>Number of comment: 123</p>
              <a href={`https://www.reddit.com${data.permalink}`} target="_blank" rel="noopener noreferrer"></a>
            </div>

		)
	}

}