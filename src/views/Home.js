import { Component } from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

import { Dragact } from 'dragact';

class Home extends Component {
    constructor(props) {
        super (props);
        this.state = {
            fakeData : [
                { GridX: 3, GridY: 0, w: 4, h: 2, key: '0' },
                { GridX: 3, GridY: 0, w: 4, h: 2, key: '1' },
                { GridX: 4, GridY: 0, w: 4, h: 2, key: '2' }
            ],
            height : 0,
        }
    }

    componentDidMount() {
        const height = this.CardBody.clientHeight;
        this.setState({ height });
    }

    render() {
        const getblockStyle = (isDragging) => {
            return {
                background: isDragging ? '#1890ff' : 'white',
            }
        };

        return (
            <>
                <Dragact
                    layout={this.state.fakeData}//必填项
                    col={16}//必填项
                    width={800}//必填项
                    rowHeight={40}//必填项
                    margin={[5, 5]}//必填项
                    className='plant-layout'//必填项
                    style={{ background: '#333' }}//非必填项
                    placeholder={true}//非必填项
                >
                    {(item, provided) => {
                        return (
                            <div
                                {...provided.props}
                                {...provided.dragHandle}
                                style={{
                                    ...provided.props.style,
                                    ...getblockStyle(provided.isDragging)
                                }}
                            >
                                {/* {provided.isDragging ? 'Moving..' : 'Standby'} */}
                                <Card ref={ (divElement) => { this.divElement = divElement } }>
                                    <CardBody>
                                        <CardTitle>Title</CardTitle>
                                        <CardText>
                                            This is a wider card with supporting text below as a natural lead-in to additional content. 
                                            This content is a little bit longer
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    }}
                </Dragact>
            </>
        )
    }

}

export default Home;