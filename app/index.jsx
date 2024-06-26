import { View, ScrollView, Text } from 'react-native'
import { useState, useEffect } from 'react';
import HimnoPreview from './components/HimnoPreview'
import { himnos } from './api/himnosAPI'
import SearchBar from './components/SearchBar';
 
const formatTitle = (title) => {
  const specialWords = ['Jesus', 'Dios', 'Maestro', 'Pastor', 'Cristo', 'Señor', 'Espíritu', 'Santo', 'Creador', 'Redentor', 'Salvador', 'Rey', 'Padre'];
 
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
      <SearchBar setSearchText={setSearchText} />
      <View className=" mt-2 bg-bgLightGrey">
        <ScrollView>
          {filteredHimnos.map((himno) => ( 
            <View className="mt-3" key={himno.himno}>
                <HimnoPreview  
                  himno={himno.himno}
                  titulo={formatTitle(himno.titulo)}
                />
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default index
