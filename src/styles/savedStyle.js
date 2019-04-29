import {StyleSheet} from 'react-native';
export default StyleSheet.create({

  // saved.js styles

  tabbar: {
    backgroundColor: '#fff',
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

  // shortlist.js AND savesearch.js styles

  title: {
    fontSize: 20,
    color: "#000",
    textAlign: "center", 
    marginTop:20,
    fontWeight: "bold" 
  },

  title2: { 
    fontSize: 16, 
    color: "grey", 
    textAlign: "center", 
    marginTop:20 
  },

  scene: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: '#fff'
  },

  button:{
    width:120,
    backgroundColor:"#e0212d",
    marginTop: 30,
    alignSelf: 'center'
  },

  imageSrc1:{
    width:240,
    height:240,
    marginBottom:10,
    alignSelf:"center"
  },

  imageSrc2:{
    justifyContent: "center",
    height:140,
    marginBottom:10,
    alignSelf:"center"
  }
});