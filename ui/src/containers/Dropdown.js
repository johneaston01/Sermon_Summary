import React from 'react';
import Dropdown from 'react-dropdown'
import {loadTestApiResults} from '../redux/actions/HeaderAction';
import { useDispatch, useSelector } from 'react-redux';
import 'react-dropdown/style.css';


const TestDropdown = () => {

    const dispatch = useDispatch();
    const { testApiResults } = useSelector((state) => state);

    const divStyle = {
        display: 'flex'
    }
    return (
        <div className= "dropdown-container" style={divStyle}>
        <div className="test-dropdown">
            {/* <Dropdown
                options={testApiResults}
            /> */}
        </div>
        <div className="load-button" onClick={() => dispatch(loadTestApiResults()) }>Click</div>
        </div>

    )
}

export default TestDropdown;