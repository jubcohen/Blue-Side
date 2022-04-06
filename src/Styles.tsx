import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bee1edd4",
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  title: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 100,
  },

  subtitle: {
    color: '#0000007c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 20,
  },

  textobotao: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },

  botaoinicio: { 
    marginTop: 12, 
    padding: 9, 
    backgroundColor: "#438788", 
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    width:280, 
    height:40,
  },

  iconerespiracao:{
    width: 148,
    resizeMode:'contain',
    alignContent: 'center',
  },
  
  espaco: {
    color: '#ffffff9c',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 40,
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  separator: {
    marginVertical: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  titlerespiracao: {
    color: '#97BEBD',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 15,
  },

  botao: { 
    marginTop: 12, 
    padding: 10, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788',
  },

  botaorespiracao: { 
    marginTop: 12, 
    padding: 20, 
    flex: -3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788',
  },

  botaoback: { 
    marginTop: 12, 
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'center',
    alignContent: 'center',
  },

  titlemenu: {
    color: '#438788',
    fontFamily: 'courier-prime',
    alignContent: "center",
    textAlign: 'center',
    fontSize: 60,
  },
});