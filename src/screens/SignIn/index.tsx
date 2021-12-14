import React from 'react';
import { 
  View, 
  Text, 
  Image, 
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png';
import { useNavigation } from '@react-navigation/native';

export function SignIn(){
  const naviagation = useNavigation();

  function handleSignIn() {
    naviagation.navigate("Home");
  }
  return(
    <View style={styles.container}>

      <Image 
        source={IllustrationImg} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com sues amigos
        </Text>

        <ButtonIcon 
          title="Entrar com Discord"
          activeOpacity={0.7}
          onPress={handleSignIn}
        />
      </View>
    </View>
  );
}