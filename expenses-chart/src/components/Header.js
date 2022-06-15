import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <div className='w-full shadow-lg mb-5 px-8 py-8 rounded-lg color-peach text-white flex justify-between'>
          <div>
          <h6>My balance</h6>
          <h3 className='font-bold'>$ {this.props.balance}</h3>
          </div>
          <div>
          <img src="images/logo.svg" alt="logo"/>
          </div> 
        </div>
      )
  }
}
