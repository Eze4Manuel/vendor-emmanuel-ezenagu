import React from 'react';
import uuid from 'react-uuid';
import data from '../../../data/categories'; 

class SubNav extends React.Component {
    constructor() {
        super();
        this.state = {
            data: data
        }
    }
    render() {       
        return (            
            <div>
                <div className='subnav'>
                    <div className='container'>
                        <div className='nav-left'>
                            <h2>{this.props.data.name}</h2>
                            <div className='category-item-list'>
                                {this.props.data.sub_category?.map((elem) => (
                                    <div id={elem.id} key={uuid()}>
                                        <h4>{elem.name}</h4>
                                        <ul>
                                            {elem.sub_category?.map((item) => (
                                                <li key={uuid()} id={item.id}>{item.name}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='nav-right'>
                            <div className='category-images'>
                                {this.props.data.deals?.map((elem) => (
                                    <div key={uuid()}>
                                        <div className='image-background' style={{ backgroundImage: "url(" + elem.gallery[0] + ")", }}></div>
                                        <p>{elem.name}</p>
                                    </div>
                                ))}                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SubNav;