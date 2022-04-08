import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bee1edd4",
    justifyContent: 'space-around',
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
    fontSize: 25,
  },

  textobotaoCreditos: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },

  
  textobotaoMusica: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  
  textobotaoDoacoes: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 21,
    marginTop: 5, 
  },
  
  textobotaoback: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  
  textobotaorespiracao: {
    color: '#ffffff',
    fontFamily: 'courier-prime-bold',
    textAlign: 'right',
    textAlignVertical: 'center',
    marginRight: 30,
    marginTop: 15,
    fontSize: 23,
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
  
  iconeRespiracao:{
    width: 300,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -185,
    marginLeft: -115,
  },
  
  iconeBlog:{
    width: 80,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -230,
    marginLeft: -30,
  },
  
  textobotaoBlog: {
    color: '#fff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    marginRight: 20,
    marginTop: 50,
    fontSize: 25,
  },

  iconeMusica:{
    width: 100,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -40,
    marginLeft: -30,
  },

  iconeCreditos:{
    width: 100,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -40,
    marginLeft: -30,
  },

  iconerespiracao2:{
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

  botaoRespiracao: { 
    flex: -1,
    margin: 8,
    height: 100,
    width: 400,
    resizeMode: "contain",
    marginTop: 12, 
    padding: 20, 
    flexDirection: "row",
    justifyContent: "space-around",
    textAlignVertical: 'center',
    backgroundColor: "#438788ca",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788ca',
  },

  botaoBlog: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: 2,
    marginLeft: -190,
    textAlignVertical: 'center',
    backgroundColor: "#fcb147b1",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#f09e7f',
    padding: 30, 
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botaoMusica: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: 2,
    marginRight: -190,
    textAlignVertical: 'center',
    backgroundColor: "#f09e7f",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#fcb147b1',
    padding: 30, 
    flexDirection: 'row',
    justifyContent: "space-around",
  },

  botaoDoacoes: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: 2,
    marginLeft: -190,
    textAlignVertical: 'center',
    backgroundColor: "#74a3a4e0",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#1358587f',
    padding: 30, 
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botaoCreditos: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: 2,
    marginRight: -190,
    textAlignVertical: 'center',
    backgroundColor: "#cc44cc3a",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#cc44cc3a',
    padding: 30, 
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botaoBack: { 
    marginTop: 12, 
    marginLeft: -200,
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'flex-start',
  },

  botaoLogin: { 
    marginTop: 12, 
    marginRight: -200,
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
  },

  titlemenu: {
    color: '#438788',
    fontFamily: 'courier-prime',
    alignContent: "center",
    textAlign: 'center',
    fontSize: 60,
  },

  videorespiracao: {
    alignContent: 'center',
    width: 99,
    height: 87,
    left: 163,
    top: 320,
  }


});

