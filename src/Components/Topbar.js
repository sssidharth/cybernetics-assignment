import React, { useState } from 'react'
import { setSearchValue } from '../Redux/actions/actions';
import { useDispatch } from 'react-redux';
import CustomInputs from './Utilities/CustomInputs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Topbar = () => {
    const [searchVal, setSearchVal] = useState('');

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchVal(e.target.value);
        dispatch(setSearchValue(e.target.value));
    }
  return (
    <div className='header_base'>
        <div className='flex lg:flex-row flex-col justify-between items-center w-full'>
        <h1 className='text-xl font-bold lg:mb-0 mb-8'>
          Cybernetics Assignment
        </h1>
        <CustomInputs 
          inputType="text"
          disabled={window.location.href.includes('/settings')}
          placeholder="Search for Users"
          onChange={(e) => handleSearch(e)}
          value={searchVal}
          className="w-[100%] mr-10"
          icon={<FontAwesomeIcon icon={faSearch}/>}
        />
        </div>
    </div>
  )
}

export default Topbar