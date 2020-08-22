import React, { Component } from 'react';

var importAll = function(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images/sq/', false, /\.(png|jpe?g|svg)$/));
const postLinks = importAll(require.context('./images/sq/', false, /\.(js)$/));


class Squares extends Component {
	render(){

		var items = [];

		Object.keys(images).forEach(function (key) {
		   items.push({
				image: images[key],
				link: postLinks[key.replace('jpg','js')].default.link,
				caption: postLinks[key.replace('jpg','js')].default.caption
			});
		});

		//items = items.reverse();

		const renderedItems = items.map(function(item, key) {
			var style = {
				backgroundImage:'url('+item.image+')'
			}

			if(!item.caption){
				item.caption = "No Caption :("
			}

			return <a key={key} href={item.link} target="_blank"> <div data-content={item.caption} className="item" style={style}></div> </a>
		});

		return (
			<div className="squareGrid">
				{renderedItems}
			</div>
			)
	}
}
export default Squares