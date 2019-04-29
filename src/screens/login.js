import React, { Component, Fragment } from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import inputStyle from '../styles/loginStyle';

export default class LoginScreen extends Component {
		state = {
	      email: '',
	      password: '',
	      showView: 'Login'
	   }
	   // for testing the result
	   handleEmail = (text) => {
	      this.setState({ email: text })
	   }
	   handlePassword = (text) => {
	      this.setState({ password: text })
	   }
	   login = (email, pass) => {
	      alert('email: ' + email + ' password: ' + pass)
	   }
  render() {
  	let viewLoad;
  	if (this.state.showView === "Login") {
        viewLoad = (
           <Fragment>
	      	<SafeAreaView style={inputStyle.safeArea1} />
	      	<SafeAreaView style={inputStyle.safeArea2}>
			    <View style={inputStyle.loginView}>
			    	<Image resizeMode="contain" source={require ('../img/logo.png')} style={inputStyle.containImg1}/>
			    	<Text style = {inputStyle.title}>Log in to your account</Text>
	  		    	<TextInput 
	  		    		clearButtonMode =  "while-editing"
	  		    		style = {inputStyle.email}
		                underlineColorAndroid = "transparent"
						placeholder = "Enter your email"
						placeholderTextColor = "grey"
						autoCapitalize = "none"
						onChangeText = {this.handleEmail} />

					<TextInput 
						clearButtonMode =  "while-editing"
	  		    		style = {inputStyle.password}
	  		    		secureTextEntry={true}
		                underlineColorAndroid = "transparent"
						placeholder = "Enter a password"
						placeholderTextColor = "grey"
						autoCapitalize = "none" 
						onChangeText = {this.handlePassword} />

					<Text onPress = {() => this.setState({showView:"Forgot"})}  style = {inputStyle.forgot}>Forgot password?</Text>
					<Button
				      title="Log In"
				      buttonStyle={inputStyle.loginBtn1}
				      onPress = {() => this.login(this.state.email, this.state.password)}
				    />
				    <Text style = {inputStyle.signup}>Don't have an account? <Text onPress = {() => this.setState({showView:"Signup"})} style = {[inputStyle.signup, inputStyle.signupLink]}>Sign up</Text></Text>
		  	    </View>
			</SafeAreaView>
		</Fragment>
        );
     } else if (this.state.showView === "Signup") {
        viewLoad = (
           <Fragment>
	      	<SafeAreaView style={inputStyle.safeArea1} />
	      	<SafeAreaView style={inputStyle.safeArea2}>
			    <View style={inputStyle.loginView}>
			    	<Image resizeMode="contain" source={require ('../img/logo.png')} style={inputStyle.containImg1}/>
			    	<Text style = {inputStyle.title}>Sign up to squarefoot.com.hk</Text>
	  		    	<TextInput 
	  		    		clearButtonMode =  "while-editing"
	  		    		style = {inputStyle.email}
		                underlineColorAndroid = "transparent"
						placeholder = "Enter your email"
						placeholderTextColor = "grey"
						autoCapitalize = "none"
						onChangeText = {this.handleEmail} />

					<TextInput 
						clearButtonMode =  "while-editing"
	  		    		style = {inputStyle.password}
	  		    		secureTextEntry={true}
		                underlineColorAndroid = "transparent"
						placeholder = "Enter a password"
						placeholderTextColor = "grey"
						autoCapitalize = "none" 
						onChangeText = {this.handlePassword} />
					<Button
				      title="Sign up"
				      buttonStyle={inputStyle.loginBtn1}
				    />
				    <Text style = {inputStyle.signup}>Already have an account? <Text onPress = {() => this.setState({showView:"Login"})} style = {[inputStyle.signup, inputStyle.signupLink]}>Log in</Text></Text>
		  	    </View>
			</SafeAreaView>
		</Fragment>
        );
     } else if (this.state.showView === "Forgot") {
     	viewLoad = (
     		<Fragment>
		      	<SafeAreaView style={inputStyle.safeArea1} />
	      		<SafeAreaView style={inputStyle.safeArea2}>
				    <View style={inputStyle.loginView}>
				    	<Image resizeMode="contain" source={require ('../img/logo.png')} style={inputStyle.containImg1}/>
				    	<Text style = {inputStyle.title}>Forgot password</Text>
				    	<Text style = {inputStyle.forgotText}>Enter the email address associated with your account and we'll send you an email to reset your password</Text>
		  		    	<TextInput 
		  		    		clearButtonMode =  "while-editing"
		  		    		style = {inputStyle.email}
			                underlineColorAndroid = "transparent"
							placeholder = "Enter your email"
							placeholderTextColor = "grey"
							autoCapitalize = "none"
							onChangeText = {this.handleEmail} />

						<Button
					      title="Reset password"
					      buttonStyle={inputStyle.loginBtn2}
					    />
					    <Text onPress = {() => this.setState({showView:"Login"})} style = {[inputStyle.signup, inputStyle.signupLink]}>Return to log in</Text>
			  	    </View>
				</SafeAreaView>
			</Fragment>
     	);
     }
    return (
    	viewLoad
    )
  }
}