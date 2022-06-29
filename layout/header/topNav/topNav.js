import React from 'react';
import data from '../../../data/categories';
import uuid from 'react-uuid'
import Image from 'next/image'
import dropdown from '../../../assets/images/arrow-down.png'
import cart from '../../../assets/images/cart.png'
import person from '../../../assets/images/person-profile.png'
import dollar from '../../../assets/images/dollar.png'
import search from '../../../assets/images/search.png'

class TopNav extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data,
            previousIndex: 1
        }
    }
    handleClick = (e, index, previousIndex) => {
        if (!this.props.showSubNav) {
            this.props.handleShowSubNavToggle();
            this.props.toggle();
            this.props.handleCategoryClick(e, index);
        }else{
            if(previousIndex === index){
                this.props.toggle();
                this.props.handleShowSubNavToggle();
            }else{
                this.props.handleCategoryClick(e, index);
            }
        }       
    }
    render() {        
        return (
            <div className={`sub-category-item`}>
                <div className='top-nav'>
                    <div className='top-container'>
                        <div className='nav-left'>
                            <ul>
                                <li><span>US</span><span> <Image className='icon' src={dropdown} width={7} height={7} alt="dropdown" /></span></li>
                                <li><span>About</span></li>
                                <li><span>Contact</span></li>
                            </ul>
                        </div>
                        <div className='nav-center'>
                            <h4>LOGO</h4>
                        </div>
                        <div className='nav-right'>
                            <div>
                                <ul>
                                    <li><span><Image className='icon' src={person} width={20} height={20} alt="person" /></span><span>My Profile</span></li>
                                    <li><span><Image className='icon' src={cart} width={20} height={20} alt="cart" /></span>0 items</li>
                                    <li><span><Image className='icon' src={dollar} width={20} height={20} alt="dollar" /></span><span>0.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='search-container'>
                        <div className='search-bar'>
                            <input type="text" placeholder="Search" name="search" />
                            <button type="submit"><Image className='icon' src={search} width={20} height={20} alt="search" /></button>
                        </div>
                    </div>
                    <div className='bottom-nav-container'>
                        <ul >
                            {this.state.data.map((item, index) => (
                                <li key={uuid()}
                                    onClick={(e) => { this.handleClick(e, index, this.props.active); }}

                                    className={this.props.active == index ? 'active' : ''}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TopNav;