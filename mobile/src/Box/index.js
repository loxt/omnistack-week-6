import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, View, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { formatDistance } from 'date-fns';
import br from 'date-fns/locale/pt-BR';
import api from '../services/api';

import styles from './styles';

export default function Box() {
  const [box, setBox] = useState({});
  useEffect(() => {
    async function getBox() {
      const boxStoraged = await AsyncStorage.getItem('@RocketBox:box');
      const response = await api.get(`boxes/${boxStoraged}`);

      setBox(response.data);
    }

    getBox();
  }, []);

  function renderItem({ item }) {
    return (
      <>
        <TouchableOpacity onPress={() => {}} style={styles.file} />
        <View style={styles.fileInfo}>
          <MaterialIcons name='insert-drive-file' size={24} color='#A5CFFF' />
          <Text style={styles.fileTitle}>{item.title}</Text>
        </View>

        <Text style={styles.fileDate}>
          <Text style={styles.fileDate}>
            há {formatDistance(new Date(item.createdAt), new Date(), { locale: br })}
          </Text>
        </Text>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.boxTitle}>{box.title}</Text>

      <FlatList
        style={styles.list}
        data={box.files}
        keyExtractor={file => file._id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
