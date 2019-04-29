import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({

  mainTitle :{
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    marginTop: -10,
    marginBottom: 20
  },

  botTitle :{
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: "left",
    color: "#000"
  },

  topView :{
    backgroundColor: '#e0212d',
    height: 140,
    margin:10
  },

  botView :{
    backgroundColor: '#fefefe',
    flex: 2,
    padding: 15,
  },

  listTitle :{
    fontWeight: 'bold',
    fontSize: 18,
    color: "#000"
  },

  listSubtitle :{
    fontSize: 14,
    color:"grey",
    paddingTop:10
  },

  tabbar: {
    backgroundColor: '#fff',
    height:48
  },

  indicator: {
    backgroundColor: '#e0212d',
  },

  label: {
    color: '#000',
    fontSize: 14,
  },

  labelSelected: {
    fontSize: 14,
    color: '#e0212d',
  },

  labelUnselected: {
    fontSize: 14,
    color: '#000',
  },

  img: {
  	width:65, 
  	height:65
  },

  routeView: {
  	backgroundColor: '#fff', 
  	height:3
  },

  searchBarView: {
  	backgroundColor:"#fff", 
  	position:'absolute', 
  	flex:1, 
  	width: 100, 
  	top:85,
  	width: Dimensions.get('window').width-20
  },

  searchBar: {
  	height:50, 
  	padding:15, 
  	color:"grey"
  }
});
