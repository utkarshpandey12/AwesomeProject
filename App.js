import React, { Component, useEffect } from 'react'
import { Button, View, Text,ScrollView,SafeAreaView,Alert, Platform,PermissionsAndroid} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer , useIsFocused} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
  TextInput,
  Image,
  onPress,
  TouchableOpacity,
} from "react-native";
import {useState,styles} from "react";
import { PricingCard, lightColors ,ButtonGroup,Card, Avatar,ListItem,Badge} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview'
import {BleManager} from 'react-native-ble-plx'
//import BleManager from '../BleManager';



let url = 'https://83y17x4f22.execute-api.ap-south-1.amazonaws.com/prod/users?function=get-user&user-email=';
 
let signup_url = 'https://83y17x4f22.execute-api.ap-south-1.amazonaws.com/prod/users?function=post-user';

let forgot_pass = "https://83y17x4f22.execute-api.ap-south-1.amazonaws.com/prod/users?function=reset-password&phone="
var responsed = {};

const _BleManager = new BleManager();


function HomeScreen({ navigation }) 
{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const onPress = () => Alert.alert('Simple Button pressed');
  
  const isFocused = useIsFocused();
  console.log(isFocused);
  if (isFocused==true){


  


  return (
    <View style={styless.container}>
      <Image style={styless.image} source={require("./assets/log2.png")} />
 
      <StatusBar style="auto" />
      <View style={styless.inputView}>
      <TextInput
          style={styless.TextInput}
          placeholder="Email."
          placeholderTextColor="#000000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styless.inputView}>
      <TextInput
          style={styless.TextInput}
          placeholder="Password."
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}

        />
      </View>
 
      <TouchableOpacity>
        <Text style={styless.forgot_button} onPress={() => navigation.navigate('forgotPassword')}>Forgot Password?</Text>
        
      </TouchableOpacity>
 
      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText} onPress={() => navigation.navigate('Details',{'email':email,'password':password})}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText} onPress={() => navigation.navigate('Signup')}>SIGNUP</Text>
        
        
      </TouchableOpacity>
      
         
    </View>
  );
  }
  else if (isFocused==false){
    return <Text>hello</Text>
  }

}


 function ForgotPassword({ navigation }) {
  const [phone, setPhonenumber] = useState("");
  return (
    <View style={styless.container}>
      <Text style={styless.SignupText}>Enter Your Phone to get reset link.</Text>
       <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Enter Phonenumber."
          placeholderTextColor="#000000"
          textContentType='telephoneNumber' 
          dataDetectorTypes='phoneNumber' 
          keyboardType='phone-pad'
          onChangeText={(phone) => setPhonenumber(phone)}
        />
      </View>
 

      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText} onPress={() => navigation.navigate('SendForgetLink',{'phone':phone})}>Get Reset Link.</Text>
        </TouchableOpacity>
      </View>
  );
  

 }




function SendForgetLink({route,navigation}){
  const {phone} = route.params;
  console.log(phone)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(forgot_pass.concat(phone))
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

   
  if (data['status']==200){
    Alert.alert(
      "Successfull",
      "Reset Link Sent via SMS",
      [
       
        { text: "OK", onPress: () => navigation.navigate('Home') },
      ]
    );
  }
  else if (data['status']==400){
    Alert.alert(
      "Something Went Wrong",
      "Please Check the entered number and try again",
      [
       
        { text: "Try Again", onPress: () => navigation.navigate('forgotPassword') },
      ]
    );
  }

}



function Signup1({navigation}) {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [college1, setCollege1] = useState("");
  const [year1, setYear1] = useState("");
  const [phone1, setPhone1] = useState("");
  const [branch1, setBranch1] = useState("");
  return (
    <View style={styless.container}>
      <Text style={styless.SignupText}>Won't take more Than a min</Text>

       <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Email."
          placeholderTextColor="#000000"
          onChangeText={(email1) => setEmail1(email1)}
        />
      </View>
 
      <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Password."
          placeholderTextColor="#000000"
          secureTextEntry={true}
          onChangeText={(password1) => setPassword1(password1)}
        />
      </View>

      <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="College Name"
          placeholderTextColor="#000000"
          onChangeText={(college1) => setCollege1(college1)}
        />
      </View>

      <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Year"
          placeholderTextColor="#000000"
          onChangeText={(year1) => setYear1(year1)}
        />
      </View>

      <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Phone No."
          placeholderTextColor="#000000"
          onChangeText={(phone1) => setPhone1(phone1)}
        />
      </View>

      <View style={styless.inputView}>
        <TextInput
          style={styless.TextInput}
          placeholder="Branch"
          placeholderTextColor="#000000"
          onChangeText={(branch1) => setBranch1(branch1)}
        />
      </View>

      

      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText} onPress={() => navigation.navigate('signupjump',{'email':email1,'password':password1,'college':college1,'year':year1,'phone':phone1,'branch':branch1})}>Let Me In.</Text>
        </TouchableOpacity>
      </View>
  );
}


function FootBallPricing({navigation}) {
  
  return (
    <View>
    <PricingCard style={styless.container3}
        color={lightColors.primary}
        title="Nike Football"
        price="Rs-5/hr"
        info={['1 Football', 'Air Support', 'Damage/Lost charges applicable']}
        button={{ title: ' PAY NOW', icon: 'flight-takeoff' }}
        onButtonPress= {() => navigation.navigate('Scanfordevices')}
      />
      </View>
  );
}

function Transactions() {
  
  return (
    <View>
      <ScrollView >
    <PricingCard style={styless.container3}
        color={lightColors.primary}
        title="Nike Football"
        price="Rs-50"
        info={['Description - Football', 'Duration - 120 mins', 'OrderNo-123456']}
        button={{ title: 'Have Issues', icon: 'flight-takeoff' }}
      />

    <PricingCard style={styless.container3}
        color={lightColors.primary}
        title="MRF Bat"
        price="Rs-10"
        info={['Description - Cricket', 'Duration - 120 mins', 'OrderNo-123456']}
        button={{ title: 'Have Issues', icon: 'flight-takeoff' }}
      />

     <PricingCard style={styless.container3}
        color={lightColors.primary}
        title="Yonex Badminton"
        price="Rs-10"
        info={['Description - Badminton', 'Duration - 120 mins', 'OrderNo-124456']}
        button={{ title: 'Have Issues', icon: 'flight-takeoff' }}
      />
      </ScrollView>
      </View>
  );
}



class Scanfordevices extends Component {

  componentDidMount() {
    


    if (Platform.OS === 'android' && Platform.Version >= 23) {
        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
            if (result) {
              console.log("Permission is OK");
            } else {
              PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then((result) => {
                if (result) {
                  console.log("User accept");
                } else {
                  console.log("User refuse");
                }
              });
            }
      });
    }

  }


  constructor() {
    super();
    const manager = new BleManager();
    console.log('manager', manager);
    this.manager = manager;
    console.log('manager.this', this.manager);
    
  }

  scanAndConnect() {
    //console.log("entrou", this.manager)
    this.manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
            // Handle error (scanning will be stopped automatically)
            return
        }
        if (device.name === 'HMSoft' || 
            device.name === 'HMSoft') {
            
            // Stop scanning as it's not necessary if you are scanning for one device.
            this.manager.stopDeviceScan();
            // Proceed with connection.
            
            device.connect()
            .then((device) => {
             return device.discoverAllServicesAndCharacteristics()
            }).then((device) => {
       // Do work on device with services and characteristics
             device.services().then(services => console.log(services))
             //const services = device.services();
             //console.log(services)
            }).catch((error) => {
        // Handle errors
        console.log(error)
            });

            
        }
        // Check if it is a device you are looking for based on advertisement data
        // or other criteria.
        //console.log(device.name)
    });
}

render() {
  return(
    <View>
      <Button
        title="APERTE"
        onPress={() => this.scanAndConnect()}
      />
    </View>
  );
}
}

function Leaderboard() {
  
  return (
    <View>

  <ListItem bottomDivider>
              <Badge value="1st"/>
              <ListItem.Content >
                <ListItem.Title>IIT-BOMBAY 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Mumbai</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
             
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="2nd"/>
              <ListItem.Content>
                <ListItem.Title>BMSCE 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Bangalore</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4006 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="3rd"/>
              <ListItem.Content>
                <ListItem.Title>IIT-KANPUR 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Kanpur</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>3076 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="4th" />
              <ListItem.Content>
                <ListItem.Title>IIT-Guwahati 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Guwahati</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>2096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="5th"/>
              <ListItem.Content>
                <ListItem.Title>IIT-Roorkee 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Roorkee</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>1086 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="6th"  size={20} />
              <ListItem.Content>
                <ListItem.Title>IIT-Kharagpur 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Kharagpur</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>960 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="7th" />
              <ListItem.Content>
                <ListItem.Title>IISC 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Bangalore</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>657 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

</View>
  );
}



class Support extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://wa.me/919598829911?text=Hello%20Please%20Tell%20Us%20How%20Can%20We%20Help%20You%20Today.....' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}


function Signupresult({route,navigation }){
  const { email , password , college , year,phone,branch} = route.params;
  console.log(email,password , college , year,phone,branch)

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(signup_url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password,
        college:college,
        year:year,
        phone:phone,
        branch:branch
      })
    })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

   
  if (data['status']==200){
    Alert.alert(
      "Successfull Registration",
      "You can now login to enjoy.....",
      [
       
        { text: "OK", onPress: () => navigation.navigate('Home') },
      ]
    );
}

else if (data['status']!=200) {
  Alert.alert(
    "Oops Something Went wrong",
    "Please make sure to fill all details",
    [
     
      { text: "OK", onPress: () => navigation.navigate('Signup') },
    ]
  );
}
}




function DetailsScreen({route,navigation }) {
  const { email , password } = route.params;
  console.log(email,password)
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch(url.concat(email,'&password=',password))
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

   
  if (data['status']==200){
    return (
        <View style={styless.container1}>
        <View style={styless.container2}>
        
        <SafeAreaView style={styless.container}>

    <View style={styless.rowContainer1}>
         
        <View style={styless.rowContainer4}>
        <Text style={{color: "#ffffff",fontWeight: 'bold',fontSize: 15 }}>
                Transaction   
        </Text>
        </View>
        <View style={styless.rowContainer5}>
        <Text style={{color: "#ffffff",fontWeight: 'bold',fontSize: 15 }}>
                Leaderboard
        </Text>
        </View>
        <View style={styless.rowContainer6}>
        <Text style={{color: "#ffffff",fontWeight: 'bold',fontSize: 15 }}>
                Support
        </Text>
        </View>

    </View>

        <View style={styless.rowContainer3}>
        <Text style={{
                    color: "black"
                }}>
        const myIcon = <Icon onPress={() => navigation.navigate('Transactions')}   name="database" size={45} color="#34aeeb" />;
    </Text>
     <Text  style={{
                    color: "black"
                }}>
     const myIcon = <Icon onPress={() => navigation.navigate('LeaderBoard')}    name="trophy" size={45} color="#34aeeb" />;
     </Text>
     <Text  style={{
                    color: "black"
                }}>
     const myIcon = <Icon onPress={() => navigation.navigate('Support')} name="phone" size={45} color="#34aeeb" />;
     </Text>
    </View>

      <ScrollView style={styless.scrollView}>

     <Card>
          <Card.Title>FOOTBALL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1R7qSm_KyKh_TNh5w_tQ_CLkZeCZWVzPo',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play now
          </Text>
          <Button
            onPress={() => navigation.navigate('Football')}
            icon={
              <Icon
                name="code1"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>


     <Card>
          <Card.Title>CRICKET</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1EKAv0bVDzmwJ8-5BggPM_Fgi_sUXiXrU',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code2"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>BADMINTON</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1VxzW3skB2b4p3c3NNzdJaRXy5oELi_SU',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code3"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>BASKETBALL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1q7KKWNzjCjhKz3WvGRmyEDb_eG73jpSf',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code4"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>BOARD GAMES</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1Qp_XFTPdA1iWDNTkL586ZsxlNMQ3eFMr',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code5"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>ATHLETICS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1Aunqco2sNs6N0qUen6kTYKOPeiG1jxMv',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code6"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>VOLLEYBALL</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1GvsMar4TJcu7KPLucJKgMJaR2vyX8eUn',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code7"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

        <Card>
          <Card.Title>TABLE TENNIS</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://drive.google.com/uc?export=download&id=1zfjy7-zswePw9NCJkq86Nk5akVJIH8bQ',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Rentals Starting at Rs.5/hour.Play Now
          </Text>
          <Button
            icon={
              <Icon
                name="code8"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="RENT NOW"
          />
        </Card>

    </ScrollView>
    </SafeAreaView>
        </View>
        </View>
  );
  
  }
  else if (data['status']==404) {
    Alert.alert(
      "Invalid Details",
      "Please check your credentials or signup if you are a new user",
      [
       
        { text: "OK", onPress: () => navigation.navigate('Home') },
      ]
    );
  }
   
 
}

 





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup1} options={{ headerShown: false }}/>
        <Stack.Screen name="Football" component={FootBallPricing} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="LeaderBoard" component={Leaderboard} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="signupjump" component={Signupresult} options={{ headerShown: false }}/>
        <Stack.Screen name="SendForgetLink" component={SendForgetLink} options={{ headerShown: false }}/>
        <Stack.Screen name="Scanfordevices" component={Scanfordevices} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


const styless = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },

  rowContainer1: {
    flexDirection: 'row',
    marginRight: 0,
    justifyContent:"space-between",
    padding:20

  },

  rowContainer3: {
    flexDirection: 'row',
    marginRight: 83,
    marginBottom:48,

  },
  rowContainer4: {
    flexDirection: 'row',
    marginRight:70,
    marginBottom:8,

  },
  rowContainer5: {
    flexDirection: 'row',
    marginRight:60,
    marginBottom:8,

  },rowContainer6: {
    flexDirection: 'row',
    marginLeft:10,
    marginBottom:8,

  },

  container1: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  

  container2: {
    width : "100%",
    height: 200,
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
  },
 
  container3: {
    flex: 1,
    backgroundColor: "ffffff",
    alignItems: "center",
    justifyContent: "center",
  },

 


  image: {
    marginBottom: 20,
  },
 
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    fontWeight: "bold",
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    fontWeight: "bold",
    color:'black'
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#ffffff",
    fontWeight: "bold",
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
    fontWeight: "bold",
  },
  
  loginText: {
    fontWeight: "bold",
    color:"#000000",
  },

  SignupText: {
    fontWeight: "bold",
    color:"#ffffff",
    marginBottom : 30,
    fontSize : 20,
  },

  mainContainer: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  circleView: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 250,
    borderRadius: 150,
    borderWidth: 1,
  },

 

});


