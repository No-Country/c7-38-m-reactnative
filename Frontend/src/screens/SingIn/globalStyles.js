import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'#111',
    paddingTop:50
  },
  text:{
    fontSize: 18,
    fontWeight : 'bold',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 5,
  },
  inputLogin: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 40,
  },
  logo:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText:{
    fontSize: 35,
    fontWeight: 'bold',
    color:'#fff'
  },
  errorText:{
    color: '#fff300',
    fontWeight:'bold',
    marginBottom:18
  },
  inputStyle:{
    flexDirection:'row',
  },
  input1: {
    flex:1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 5,
    color:'#111'
  },
});