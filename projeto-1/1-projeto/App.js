import { Text, View, Button, TextInput, Image } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { Card } from 'react-native-paper';
import Lista from './src/lista';

export default function App() {

  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const usuarioCorreto = 'ren';
  const senhaCorreta = 'okk';

  function fazerLogin() {
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
      setLogado(true);
    } else {
      alert('Usuário ou senha incorretos!');
      setLogado(false);
    }
  }

  function sair() {
    setLogado(false);
    setUsuario('');
    setSenha('');
  }

  return (
    <View style={styles.container}>
      {logado ? (
        <View style={styles.usuario}>
          <Text style={styles.paragraph}>
            Seja bem-vindo, {usuario} 
          </Text>

          <Card>
            <Lista />
          </Card>
           
          <Button title="Sair" onPress={sair} />
        </View>
      ) : (
        <View style={styles.login}>
          <Text style={styles.title}>Login</Text>
          <TextInput
              style={styles.input}
              placeholder="Digite o nome do usuário"
              placeholderTextColor="#999"
              value={usuario}
              onChangeText={setUsuario}
            />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <Button title="Entrar" onPress={fazerLogin} />
        </View>
      )}
    </View>
  );
}