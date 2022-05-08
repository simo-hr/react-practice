import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Alert, Pressable } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
import ListUser from './components/ListUser'
import AddUser from './components/AddUser'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'

type User = {
  id: string
  name: string
}

const renderItem = ({ item }: { item: User }) => (
  <Pressable
    onPress={() => {
      Alert.alert(item.name)
    }}
  >
    <View style={styles.item}>
      <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      <Text>{item.name}</Text>
    </View>
  </Pressable>
)

const App = () => {
  const [users, setUsers] = useState<User[]>([])

  const addUser = (name: string) => {
    setUsers((prevUsers) => {
      return [{ id: uuidv4(), name }, ...prevUsers]
    })
  }

  const deleteUser = (id: string) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((prevUse) => prevUse.id !== id)
    })
  }

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      setUsers(users)
    }

    getUser()
  }, [])

  return (
    <View style={styles.container}>
      <Header title="ユーザ一覧" />
      <FlatList
        data={users}
        renderItem={({ item }) => <ListUser item={item} deleteUser={deleteUser} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: 'lightgray',
              height: 1,
            }}
          ></View>
        )}
      />
      <AddUser addUser={addUser} />
      <Footer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#88cb7f',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 8,
  },
})
