import { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState('')
  const handleUser = () => {
    addUser(user)
    setUser('')
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <TextInput style={styles.input} onChangeText={setUser} value={user} placeholder="ユーザ名を入力してください" />
      <TouchableOpacity style={styles.btn} onPress={handleUser}>
        <View style={styles.text}>
          <Icon name="plus" size={20} />
          <Text>ユーザ追加</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    marginBottom: 10,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default AddUser
