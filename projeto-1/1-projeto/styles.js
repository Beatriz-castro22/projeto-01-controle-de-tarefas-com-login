import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#A5D2F2',
    justifyContent: 'center',
    padding: 8,
  },

   paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
   },

   usuario:{
     backgroundColor: '#F0F8FF',
     justifyContent:'center',
     
   },
   title:{
    color:'#001661',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold'
   },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
},

  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
});
export default styles