import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, useColorScheme } from 'react-native';
import HimnoPreview from './components/HimnoPreview';
import CoritoPreview from './components/CoritoPreview';
import { himnos } from './api/himnosAPI';
import { coritos } from './api/coritosAPI';
import SearchBar from './components/SearchBar';
import debounce from 'lodash/debounce';
import { formatTitle } from './utils/utils';
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredHimnos, setFilteredHimnos] = useState([]);
  const [filteredCoritos, setFilteredCoritos] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);
  const colorScheme = useColorScheme();
  
  const handleSearchTextChange = debounce((text) => {
    setSearchText(text);
  }, 0);
  
  useEffect(() => {
    if (searchText === '') {
      
      const initialHimnos = himnos.slice(0, 20);
      const initialCoritos = coritos.slice(0, 20);
      setFilteredHimnos(initialHimnos);
      setFilteredCoritos(initialCoritos);
      
      setTimeout(() => {
        setFilteredHimnos(himnos);
        setFilteredCoritos(coritos);
        setInitialLoad(false);
      }, 0);
    } else {
      const filteredHimnos = Array.isArray(himnos) ? himnos.filter(himno =>
        himno.himno.toString().includes(searchText) ||
        himno.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
        Object.values(himno.letra).some(letra => letra.toLowerCase().includes(searchText.toLowerCase()))
      ) : [];
      setFilteredHimnos(filteredHimnos);
      
      const filteredCoritos = Array.isArray(coritos) ? coritos.filter(corito =>
        corito.corito.toString().includes(searchText) ||
        corito.titulo.toLowerCase().includes(searchText.toLowerCase()) ||
        corito.coro.toLowerCase().includes(searchText.toLowerCase())
      ) : [];
      setFilteredCoritos(filteredCoritos);
    }
  }, [searchText]);
  
  const nombresLindos = ['stefano', 'lucas', 'facu', 'facundo', 'agus', 'agustin', 'agustín'];
  const includesNombreLindo = nombresLindos.some(nombre => searchText.toLowerCase().includes(nombre));

  return (
    <>
      <StatusBar style={colorScheme === 'light' ? 'dark' : 'dark'} />
      <Text className="ml-5 mt-[80px] text-6xl font-himnSemiBold">Congregación</Text>
      <Text className="ml-5 text-6xl font-himnSemiBold">Cristiana</Text>
      <SearchBar setSearchText={handleSearchTextChange} />
      <View className="mt-[20px] bg-bgLightGrey">
        <ScrollView
          showsVerticalScrollIndicator={true}
          scrollEventThrottle={16}
        >
          {filteredCoritos.length > 0 &&
            <Text className="ml-5 mt-[10px] text-5xl font-himnSemiBold">Coritos</Text>
          }
          {filteredCoritos.map((corito) => (
            <View className="mt-3" key={corito.corito}>
              <CoritoPreview
                corito={corito.corito}
                titulo={formatTitle(corito.titulo)}
              />
            </View>
          ))}
          {filteredHimnos.length > 0 &&
            <Text className="ml-5 mt-8 text-5xl font-himnSemiBold">Himnos</Text>
          }
          {filteredHimnos.map((himno) => (
            <View className="mt-3" key={himno.himno}>
              <HimnoPreview
                himno={himno.himno}
                titulo={formatTitle(himno.titulo)}
              />
            </View>
          ))}

          {includesNombreLindo &&
            <Text className="ml-5 mt-8 text-5xl font-himnSemiBold justify-center">Nombre de lindo</Text>
          }

        </ScrollView>
      </View>
    </>
  );
};

export default Index;
