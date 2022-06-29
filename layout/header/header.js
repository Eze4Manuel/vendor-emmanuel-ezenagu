import React from 'react';
import data from '../../data/categories';
import SubNav from '../header/subNav/subNav';
import TopNav from './topNav/topNav';
import MobileNav from './mobileNav/mobileNav';
import SlideToggle from "react-slide-toggle";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            hoveredData: {},
            showSubNav: false,
            active: 0,
            toggleEvent: 0
        }
    }

    onToggle = () => {       
        this.setState({ toggleEvent: Date.now() });
    };

    handleCategoryClick = (e, index) => {
        this.setState({
            hoveredData: this.state.hoveredData = data[index],
            active: index,
        })
    }
    handleShowSubNavToggle = () => {
        this.setState({
            showSubNav: !this.state.showSubNav
        })
    }
     
    render() {
        return (
            <div className='header'>
                <div className='desktop'>
                    <TopNav active={this.state.active}
                        classNames={'my-collapsible__toggle'}
                        handleCategoryClick={this.handleCategoryClick}
                        toggle={this.onToggle}
                        showSubNav = {this.state.showSubNav}
                        handleShowSubNavToggle = {this.handleShowSubNavToggle}
                    />
                     
                    <SlideToggle toggleEvent={this.state.toggleEvent} collapsed>
                        {({ setCollapsibleElement }) => (
                            <div className="my-collapsible">
                                <div className="my-collapsible__content" ref={setCollapsibleElement}>
                                    <div className="my-collapsible__content-inner">
                                        <SubNav
                                            show={this.state.showSubNav}
                                            data={this.state.hoveredData} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </SlideToggle>
                </div >
                <div className='mobile'>
                    <MobileNav data={this.state.hoveredData} />
                </div>
            </div >
        )
    }
}
export default Header;


