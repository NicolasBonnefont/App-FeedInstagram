import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import iconeLikeada from '../img/likeada.png'
import iconeLike from '../img/like.png'
import send from '../img/send.png'

const Lista = (props) => {

  const [feed, setFeed] = useState(props.data.item)

  function mostraLikes(likers) {

    if (likers > 0) {

      return (<Text style={styles.likes}>{likers}{
        likers > 1 ? 'Curtidas' : 'Curtida'}
      </Text>)
    }
  }

  function like() {

    if (feed.likeada == true) {

      setFeed({ ...feed, likeada: feed.likeada = false })
      setFeed({ ...feed, likers: feed.likers - 1 })
    } else {

      setFeed({ ...feed, likeada: feed.likeada = true })
      setFeed({ ...feed, likers: feed.likers + 1 })

    }

  }

  function carregaIcone(likeada) {

    return likeada ? iconeLikeada : iconeLike

  }

  return (
    <View style={styles.areaFeed}>

      <View style={styles.viewPerfil}>
        <Image
          style={styles.fotoPerfil}
          source={{ uri: feed.imgPerfil }}
        />
        <Text style={styles.nomeUsuario}>{feed.nome}</Text>

      </View>

      <Image
        style={styles.fotoPublicacao}
        source={{ uri: feed.imgPublicacao }}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={() => like()}
        >
          <Image
            source={carregaIcone(feed.likeada)}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            source={send}
            style={styles.iconeLike}
          />
        </TouchableOpacity>
      </View>

      {mostraLikes(feed.likers)}

      <View style={styles.viewRodape}>
        <Text style={styles.nomeRodape}> {feed.nome} </Text>
        <Text style={styles.descRodape}> {feed.descricao} </Text>
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  areaFeed: {


  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000',
  },
  fotoPerfil: {
    width: 25,
    height: 25,
    borderRadius: 50
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  iconeLike: {

  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5,

  },
  iconeLike: {
    width: 33,
    height: 33
  },
  btnSend: {
    marginLeft: 5
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5

  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }


})

export default Lista;

