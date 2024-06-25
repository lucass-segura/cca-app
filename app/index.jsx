import { View, ScrollView, Text} from 'react-native'
import { useState, useEffect } from 'react';
import HimnoPreview from './components/HimnoPreview'
import { himnos } from './api/himnosAPI'
import SearchBar from './components/SearchBar';

const truncateDescription = (text) => {
  return text.length > 45 ? text.substring(0, 40) + '...' : text;
};

const formatTitle = (title) => {
  const specialWords = ['Jesus', 'Dios', 'Maestro', 'Pastor'];

  const words = title.trim().replace(/\s\s+/g, ' ').toLowerCase().split(' ');

  const formattedWords = words.map((word, index) => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return specialWords.includes(capitalizedWord) || index === 0 ? capitalizedWord : word;
  });

  return formattedWords.join(' ');
};

const index = () => {

  const [searchText, setSearchText] = useState('');
  const [filteredHimnos, setFilteredHimnos] = useState(himnos);

  useEffect(() => {
    const filtered = himnos.filter(himno => 
      himno.himno.toString().includes(searchText) ||
      himno.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
      Object.values(himno.letra).some(letra => letra.toLowerCase().includes(searchText.toLowerCase()))
    );
    setFilteredHimnos(filtered);
  }, [searchText]);

  return (
    <>
    <Text className=" ml-5 mt-[80px] text-4xl font-semibold">Himnos</Text>
    <SearchBar setSearchText={setSearchText}/>
    <View className=" mt-2 bg-bgLightGrey">
      <ScrollView>
        {filteredHimnos.map((himnos) => (
          <HimnoPreview
            key={himnos.himno}
            himno={himnos.himno}
            titulo={formatTitle(himnos.titulo)}
            descripcion={truncateDescription(Object.values(himnos.letra)[0])}
          />
        ))}
      </ScrollView>
    </View>
    </>
  )
}

export default index
