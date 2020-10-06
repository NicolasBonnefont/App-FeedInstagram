
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import logo from './src/img/logo.png'
import send from './src/img/send.png'

import Lista from './src/lista'


export default function App() {

  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas Silva 1',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://images.unsplash.com/photo-1536115706628-e1abad95f29a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      imgPublicacao: 'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      likeada: false,
      likers: 1
    },
    {
      id: '2',
      nome: 'Lucas Silva 2',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://images.unsplash.com/photo-1536115706628-e1abad95f29a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      imgPublicacao: 'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      likeada: false,
      likers: 2
    },
    {
      id: '3',
      nome: 'Lucas Silva 3',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://images.unsplash.com/photo-1536115706628-e1abad95f29a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      imgPublicacao: 'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      likeada: false,
      likers: 6
    },
    {
      id: '4',
      nome: 'Lucas Silva 4',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://images.unsplash.com/photo-1536115706628-e1abad95f29a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      imgPublicacao: 'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      likeada: false,
      likers: 10
    },
    {
      id: '5',
      nome: 'Lucas Silva 5',
      descricao: 'Mais um dia de muitos bugs',
      imgPerfil: 'https://images.unsplash.com/photo-1536115706628-e1abad95f29a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      imgPublicacao: 'https://images.unsplash.com/photo-1489514427794-bb4f67f45c7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      likeada: false,
      likers: 33
    }
  ])


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={logo}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={send}
            style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={item => <Lista data={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25
  },
  header: {
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1

  },
  logo: {
    width: 110,
    height: 38
  },
  send: {
    width: 33,
    height: 33

  }
});
