import React from 'react';
 
class MainContent extends React.Component {
    render() {
        return (
            <div className='main'>
                {this.props.children} 
            </div>
        )
    }
}

export default MainContent;