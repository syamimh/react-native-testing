import {StyleSheet} from 'react-native';
export default StyleSheet.create({

	title:{
		fontSize:20,
		fontWeight: "bold",
		color: "grey",
		alignSelf: "center",
		marginTop: 20,
		marginBottom: 10
	},

	email:{
		borderWidth: 0.5,
        borderColor:'#ccc',
        padding: 10,
        margin: 20,
	},

	password:{
		borderWidth: 0.5,
        borderColor:'#ccc',
        padding: 10,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
	},

	forgot: {
		marginLeft: 20,
        marginTop: 0,
        color: "blue",
        fontSize: 16
	},

	signup: {
		alignSelf: "center",
        marginTop: 30,
        color: "#000",
        fontSize: 16
    },

    signupLink:{
    	color: "blue"
    },

    forgotText: {
    	marginLeft: 20,
    	fontSize: 15,
    	marginTop: 10,
    	color: "grey"
    },

    safeArea1: {
    	flex: 0, 
    	backgroundColor: '#e0212d'
    },

    safeArea2: {
    	flex: 1, 
    	backgroundColor: '#fff'
    },

    loginView: {
    	backgroundColor: '#fff',
    	width:"100%"
    },

    containImg1: {
    	justifyContent: "center", 
    	alignSelf: "center", 
    	height:45, 
    	marginBottom:10,
    	marginTop:20
    },

    loginBtn1: {
    	backgroundColor:"#e0212d", 
    	marginTop: 30, 
    	marginLeft: 20, 
    	marginRight: 20
    },

    loginBtn2: {
    	backgroundColor:"#e0212d", 
    	marginTop: 10, 
    	marginLeft: 20, 
    	marginRight: 20
    },
});