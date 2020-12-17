import React, { useState, useEffect } from 'react';
import { stateData } from '../assets/bargraphAssets';

// Components
import { AutoComplete } from 'antd';

const data = [];
for (let state in stateData) {
  let item = {
    label: state,
    value: state,
    abbreviation: stateData[state]['abbreviation'],
  };
  data.push(item);
}

const SearchBar = ({ setUsState }) => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([...data]);

  useEffect(() => {
    if (value === undefined || value.length === 0) {
      setValue('');
      setUsState(null);
    }
  }, [value]);

  const onSearch = searchText => {
    setOptions(!searchText ? [] : [...data]);
  };

  const onSelect = data => {
    setUsState(data);
  };

  const onChange = data => {
    setValue(data);
  };

  const filterOption = (inputValue, option) => {
    return inputValue.slice(0, inputValue.length).toLowerCase() ===
      option.label.slice(0, inputValue.length).toLowerCase() ||
      inputValue.toLowerCase() === option.abbreviation.toLowerCase()
      ? option
      : null;
  };

  return (
    <AutoComplete
      value={value}
      options={options}
      onSearch={onSearch}
      onSelect={onSelect}
      onChange={onChange}
      style={{ width: 200 }}
      allowClear={true}
      filterOption={filterOption}
      placeholder="Enter a US State"
      notFoundContent="No US State Found"
    />
    // <Autosuggest
    //   suggestions={suggestions}
    //   onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    //   onSuggestionsClearRequested={onSuggestionsClearRequested}
    //   onSuggestionSelected={onSuggestionSelected}
    //   shouldRenderSuggestions={shouldRenderSuggestions}
    //   getSuggestionValue={getSuggestionValue}
    //   renderSuggestion={renderSuggestion}
    //   renderInputComponent={renderInputComponent}
    //   inputProps={inputProps}
    //   theme={theme}
    // />
  );
};

export default SearchBar;
