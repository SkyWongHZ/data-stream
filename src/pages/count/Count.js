import React, { Component } from 'react'
import { connect } from 'react-redux'
import {chooseReset}  from  '../../actions'

class Count extends Component {
	constructor(props) {
		super(props)
		this.state = {
			// count: 100
		}
	}

	
	render() {
		const  {addClick,substr,count,reset}=this.props
		return (
			<div>
				<div>
					<div>按钮加: <button onClick={addClick}>+</button></div>
					<div>按钮减: <button onClick={substr}>-</button></div>
					<div>复位: <button onClick={()=>reset(100)}>复位按钮</button></div>
				</div>
				<div>
					<p>数据:{count}</p>
				</div>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log('state:', state);
	return {
		count:state.count,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addClick: (val) => {
			dispatch({
				type: 'ADD',
				payload: {
					value: val
				}
			})

		},
		// substr:(val)=>{
		// 	dispatch({
		// 		type:'SUBSTR',
		// 		payload:{
		// 			value:val
		// 		}
		// 	})
		// }
		reset: (val) => {
			dispatch(chooseReset(val))

		},
		substr:(val)=>{
			dispatch({
				type:'SUBSTR',
				payload:{
					value:val
				}
			})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Count)