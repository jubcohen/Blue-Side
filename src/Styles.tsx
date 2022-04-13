import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bee1edd4",
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerRespiracao: {
    flex: 1,
    backgroundColor: "#E5E5e5",
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerBlog: {
    flex: 1,
    backgroundColor: "#fcb1479f",
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerMusicas: {
    flex: 1,
    backgroundColor: "#f09d7fd4",
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerMusicasMain: {
    flex: 1,
    backgroundColor: "#f09d7fd4",
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
    fontSize: 25,
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
    fontSize: 25,
    marginTop: 7,
  },
  
  iconeMusica:{
    width: 80,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -70,
    marginLeft: -20,
  },
  
  iconeMusica2:{
    width: 100,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 198,
    marginTop: -60,
    padding: 20,
  },

  textobotaoMusica: {
    color: '#ffffff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    marginTop: 8,
    marginRight: -10,
    fontSize: 25,
  },

  iconeCreditos:{
    width: 50,
    alignItems: 'flex-start',
    resizeMode:'contain',
    alignContent: 'center',
    margin: 8,
    marginTop: -244,
    marginLeft: -20,
  },
  
  textobotaoCreditos: {
    color: '#fff',
    fontFamily: 'courier-prime',
    alignContent: 'center',
    fontSize: 22,
    marginTop: -10,
    marginRight: -15,
  },

  iconerespiracao2:{
    width: 148,
    resizeMode:'contain',
    alignContent: 'center',
  },

  respiracao1:{
    alignContent: 'center',
    resizeMode: 'stretch',
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

  titleRespiracao: {
    color: '#135858',
    fontFamily: 'courier-prime',
    alignContent: "center",
    fontSize: 40,
    textAlign: 'center',
    
  },

  textoRespiracao1: {
    color: '#135858',
    flex: -1,
    padding: 10,
    fontFamily: 'courier-prime',
    alignContent: "center",
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: "#fffcfc96",  
    borderWidth: 0.5,
    borderRadius: 20, 
    borderColor:'#fffcfc96',
    backfaceVisibility: 'hidden',
  },

  botaoRespiracao: { 
    flex: -1,
    margin: -8,
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

  botaoRespiracao2: { 
    flex: -1,
    margin: 198,
    height: 100,
    width: 100,
    resizeMode: "contain",
    marginTop: 12, 
    padding: 20, 
    flexDirection: "row",
    justifyContent: "space-around",
    textAlignVertical: 'center',
    backgroundColor: "#438788ca",  
    borderWidth:0.5,
    borderRadius: 55, 
    borderColor:'#438788ca',
  },

  botaoBlog: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: -50,
    marginLeft: -190,
    textAlignVertical: 'center',
    backgroundColor: "#fcb147b1",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#fcb147b1',
    padding: 30, 
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botaoMusica: { 
    flex: -1,
    height: 100,
    width: 190,
    resizeMode: "contain",
    margin: -50,
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
    height: 70,
    width: 190,
    resizeMode: 'contain',
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

  botaoBackRespiracao2: { 
    marginTop: -140, 
    marginLeft: -300,
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'flex-start',
  },

  botaoBackRespiracao: { 
    marginTop: -10,
    marginLeft: -300,
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'flex-start',
  },


  botaoLogin: { 
    marginTop: 12, 
    marginRight: 10,
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
    fontSize: 55,
    margin: -60,
  },

  videorespiracao: {
    alignContent: 'center',
    width: 99,
    height: 87,
    left: 163,
    top: 320,
  },

  video: {
    alignSelf: 'stretch',
    width: 345,
    height: 150,    
    alignItems: 'center',
    alignContent: 'center'
  },

  boxBlog: {
    color: '#135858',
    flex: -1,
    padding: 10,
    margin: -20,
    width: 360,
    height: 100,
    fontFamily: 'courier-prime.ttf',
    alignContent: "center",
    resizeMode: 'contain',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: "#fffcfc96",  
    borderWidth: 0.5,
    borderRadius: 20, 
    borderColor:'#fffcfc96',
  },

  botaoBackBlog: { 
    marginTop: 12, 
    marginLeft: -200,
    padding: 7, 
    backgroundColor: "#438788",  
    borderWidth:0.5,
    borderRadius: 10, 
    borderColor:'#438788', 
    alignItems: 'flex-start',
  },

});
