import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'
import TestA from './a.jsx'

// function component() {
// 	var element = document.createElement('div');
// 	element.innerHTML = 'hello webpack12321'
// 	element.className = 'test-a'
// 	return element;
// }
//
// document.body.appendChild(component());

ReactDom.render(<div className="test-a">
	21313123
	<TestA/>
</div>, document.getElementById('root'));
