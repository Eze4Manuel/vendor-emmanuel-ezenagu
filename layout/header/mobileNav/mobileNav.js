import React from 'react';
import data from '../../../data/categories';
import uuid from 'react-uuid'
import Image from 'next/image'
import cart from '../../../assets/images/cart.png'
import close from '../../../assets/images/close.png'
import forward from '../../../assets/images/arrow-forward.png'
import search from '../../../assets/images/search.png'
import chevLeft from '../../../assets/images/chev-left.png'
import chevDown from '../../../assets/images/chev-down.png'
import chevUp from '../../../assets/images/arrow-up.png'
import SlideToggle from "react-slide-toggle";

class MobileNav extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data,
            isActive: true,
            selectedCategory: -1
        }
    }
    toggleNav = (index) => {
        this.setState({
            isActive: !this.state.isActive,
            selectedCategory: index
        })
    }
    handleSelectedCategory = (index) => {
        this.setState({
            selectedCategory: index
        })
    }
    render() {
        return (
            <div className='mobile-nav'>
                <div className='first-section'>
                    <span><Image className='icon' src={close} width={20} height={20} alt="cart" /></span>
                    <h4>LOGO</h4>
                    <span><Image className='icon' src={cart} width={20} height={20} alt="cart" /> 0 </span>
                </div>
                <div className='search-container'>
                    <div className='search-bar'>
                        <input type="text" placeholder="Search" name="search" />
                        <button type="submit"><Image className='icon' src={search} width={20} height={20} alt="search" /></button>
                    </div>
                </div>
                <div className='category'>
                    <FirstCategoryMobileNav toggleNav={this.toggleNav} isActive={this.state.isActive} />
                    <SubCategoryMobileNav toggleNav={this.toggleNav} data={data[this.state.selectedCategory]} isActive={this.state.isActive} />
                </div>
            </div>
        )
    }
}
export default MobileNav;


class FirstCategoryMobileNav extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={this.props.isActive ? 'activeNav' : 'inactiveNav'}>
                <div className='category-list'>
                    {data.map((elem, index) => (
                        <div onClick={(() => this.props.toggleNav(index))} key={uuid()}>
                            <span>{elem.name}</span>
                            <Image className='icon' src={forward} width={25} height={25} alt="forward" />
                        </div>
                    ))}
                </div>
                <div className='bottom-section'>
                    <ul>
                        <li>My Profile</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        )
    }
}


class SubCategoryMobileNav extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            selectedIndex: -1
        }
    }
 
    render() {
        return (
            <div className={!this.props.isActive ? 'activeNav' : 'inactiveNav'}>
                <div className='sub-category-list'>
                    <div className='sub-category-title'>
                        <Image onClick={(() => this.props.toggleNav(0))} className='icon' src={chevLeft} width={25} height={25} alt="backward" />
                        <h3>{this.props.data?.name}</h3>
                    </div>
                    {this.props.data?.sub_category?.map((elem, index) => (
                        <SlideToggle key={uuid()} collapsed
                            onExpanded={({ hasReversed }) => {
                                let collapsibleIcon = document.getElementById(`collapsibleIcon${index}`);
                                collapsibleIcon.style.transform = "rotate(180deg)";
                            }}
                            onCollapsed={({ hasReversed }) => {
                                let collapsibleIcon = document.getElementById(`collapsibleIcon${index}`);
                                collapsibleIcon.style.transform = "rotate(0deg)";
                            }}>
                            {({ toggle, setCollapsibleElement }) => (
                                <div className="my-collapsible">
                                    <div className={`sub-category-item my-collapsible__toggle`}
                                        onClick={() => { toggle() }}>
                                        <span>{elem.name}</span>
                                        <Image className='icon' id={`collapsibleIcon${index}`} src={((this.state.selectedIndex === index)) ? chevUp : chevDown} width={20} height={20} alt="forward" />
                                    </div>
                                    <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                        <div className="my-collapsible__content-inner">
                                            <DropDownSubCategoryMobileNav data={elem} show={this.state.show} selectedIndex={this.state.selectedIndex} index={index} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SlideToggle>
                    ))}
                    {this.props.data?.deals?.map((elem) => (
                        <div key={uuid()}>
                            <div className='sub-category-item'>
                                <span>{elem.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}



class DropDownSubCategoryMobileNav extends React.Component {     
    render() {
        return (
            <div className={'activeDropdownNav'}>
                <div className='dropdown-sub-category-list'>
                    {this.props.data?.sub_category?.map((elem) => (
                        <div key={uuid()}>
                            <div className='dropdown-sub-category-item' >
                                <span>{elem.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}


