import React, { Component } from 'react'
import { Button, View, Text,ScrollView,SafeAreaView} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  StyleSheet,
  TextInput,
  Alert,
  Image,
  onPress,
  TouchableOpacity,
} from "react-native";
import {useState,styles} from "react";
import { PricingCard, lightColors ,ButtonGroup,Card, Avatar,ListItem,Badge} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native-webview'


const list = [
  {
    name: 'IIT-Bombay',
    avatar_url: 'https://drive.google.com/file/d/10MnBwreBmMybZ9TnRefqe2hMQjulaEaa/view?usp=sharing',
    subtitle: 'Mumbai'
  },
  {
    name: 'BMSCE',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Bangalore'
  },

]


function HomeScreen({ navigation }) 
{

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = () => Alert.alert('Simple Button pressed');

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
        <Text style={styless.forgot_button}>Forgot Password?</Text>
        
      </TouchableOpacity>
 
      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styless.loginBtn}>
        <Text style={styless.loginText} onPress={() => navigation.navigate('Details')}>SIGNUP</Text>
        
        
      </TouchableOpacity>
      
         
    </View>
  );
}

function FootBallPricing() {
  
  return (
    <View>
    <PricingCard style={styless.container3}
        color={lightColors.primary}
        title="Nike Football"
        price="Rs-5/hr"
        info={['1 Football', 'Air Support', 'Damage/Lost charges applicable']}
        button={{ title: ' PAY NOW', icon: 'flight-takeoff' }}
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


function Leaderboard() {
  
  return (
    <View>

  <ListItem bottomDivider>
              <Badge value="1st"/>
              <ListItem.Content>
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
              <Badge value="1st" />
              <ListItem.Content>
                <ListItem.Title>IIT-BOMBAY 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Mumbai</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="1st"/>
              <ListItem.Content>
                <ListItem.Title>IIT-BOMBAY 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Mumbai</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="1st"  size={20} />
              <ListItem.Content>
                <ListItem.Title>IIT-BOMBAY 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Mumbai</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

  <ListItem bottomDivider>
              <Badge value="1st" />
              <ListItem.Content>
                <ListItem.Title>IIT-BOMBAY 😻</ListItem.Title>
                <ListItem.Subtitle><Text>Mumbai</Text></ListItem.Subtitle>
                <ListItem.Subtitle><Text>4096 Pts</Text></ListItem.Subtitle>
              </ListItem.Content>
  </ListItem>

</View>
  );
}



class support extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://wa.me/919598829911?text=Hello%20Please%20Tell%20Us%20How%20Can%20We%20Help%20You%20Today.....' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}



function DetailsScreen({ navigation }) {
  
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
        <Text>
        const myIcon = <Icon onPress={() => navigation.navigate('Transactions')}   name="database" size={45} color="#34aeeb" />;
    </Text>
     <Text>
     const myIcon = <Icon onPress={() => navigation.navigate('LeaderBoard')}    name="trophy" size={45} color="#34aeeb" />;
     </Text>
     <Text>
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Football" component={FootBallPricing} />
        <Stack.Screen name="Support" component={support} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="LeaderBoard" component={Leaderboard} />
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
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#ffffff",
  },
 
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },
});


const styles1 = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  });