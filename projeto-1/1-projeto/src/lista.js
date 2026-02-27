import { StyleSheet, Text, Image, View, TextInput, Button, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function Lista() {

  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  function adicionarItem() {
    if (novoItem.trim() === "") return;

    const novoObjeto = {
      id: Date.now().toString(),
      nome: novoItem,
      concluida: false
    };

    setLista([...lista, novoObjeto]);
    setNovoItem("");
  }

  function alternarConclusao(id) {
    const novaLista = lista.map(item =>
      item.id === id
        ? { ...item, concluida: !item.concluida }
        : item
    );

    setLista(novaLista);
  }

  function removerItem(id) {
    const novaLista = lista.filter(item => item.id !== id);
    setLista(novaLista);
  }

  const tarefasConcluidas = lista.filter(item => item.concluida).length;

  return (
    <View style={{ marginTop: 20 }}>

      {lista.length === 0 ? (
        <Text style={styles.mensagemVazia}>
          Nenhuma tarefa cadastrada 
        </Text>
      ) : (
        <>
          <FlatList
            data={lista}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.container}>
              
                <TouchableOpacity
                  onPress={() => alternarConclusao(item.id)}
                  style={styles.tarefa}
                >
                  <Text
                    style={[
                      styles.lista,
                      item.concluida && styles.concluida
                    ]}
                  >
                    {item.nome}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.removerItem}
                  onPress={() => removerItem(item.id)}
                >
                  <Text style={styles.removerItemTexto}>
                    Remover
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <Text style={styles.contador}>
            Concluídas: {tarefasConcluidas} de {lista.length}
          </Text>
        </>
      )}

      <TextInput
        style={styles.input}
        value={novoItem}
        onChangeText={setNovoItem}
        placeholder="Digite aqui sua tarefa"
      />

      <Button
        title="Inserir nova tarefa"
        onPress={adicionarItem}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#5D9FD4'
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  lista: {
    fontSize: 18,
  },
  concluida: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  removerItem: {
    padding: 10,
    color:'#8DA3D6'
  },
  removerItemTexto: {
    fontSize: 12,
  },
  tarefa: {
    flex: 1,
  },
  contador: {
    marginVertical: 10,
    fontWeight: 'bold',
  },
  mensagemVazia: {
    textAlign: 'center',
    marginVertical: 20,
    fontStyle: 'italic',
    color: 'gray'
  }
});