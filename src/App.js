import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';
import StartButton from './components/StartButton';

export default class App extends React.Component {
  state = {
    content: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="여기에 입력해주세요."
          onChangeText={text => {
            this.setState({ content: text });
          }}
        />
        <StartButton showAlert={() => Alert.alert(this.state.content)} disabled={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: '#6830CF',
    padding: 16,
    flexDirection: 'row',
  },
  first: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    padding: 16,
  },
  input: {
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,
  },
});
