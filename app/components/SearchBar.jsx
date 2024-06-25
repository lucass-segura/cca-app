import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const SearchBar = ({setSearchText}) => {
  return (
    <View className="mt-5 ml-5 w-[90%] h-[70px] flex-row items-center  bg-primary rounded-lg">
      <Svg 
        className="w-5 h-5 mr-2 ml-2 text-white"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M21 21l-4.35-4.35m2.34-3.65a7.5 7.5 0 1 0-15 0 7.5 7.5 0 0 0 15 0z"
        />
      </Svg>
      <TextInput 
        placeholder="Buscar himno por número o título..." 
        placeholderTextColor="white"
        className="flex-1 text-[20px] bg-transparent text-white"
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

export default SearchBar;
