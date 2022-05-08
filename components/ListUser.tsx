import React from 'react'
import { StyleSheet, View, Text, Alert, Pressable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

const listUser = ({ item, deleteUser }) => (
  <View style={styles.row}>
    <View style={styles.item}>
      <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      <Text>{item.name}</Text>
    </View>
    <Icon name="delete" size={20} onPress={() => deleteUser(item.id)} />
  </View>
)

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 40,
    backgroundColor: '#88cb7f',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 8,
  },
})

export default listUser
