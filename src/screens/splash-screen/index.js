import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
import {Home} from '../home-screen';

export function Splash() {
  const [showRealApp, setShowRealApp] = useState(false);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const onDone = () => {
    setShowRealApp(true);
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={{color: '#fff'}}>{item.title}</Text>
        <Image
          source={item.image}
          style={{
            maxWidth: 300,
            maxHeight: 400,
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
        />
        <Text style={{color: '#fff'}}>{item.text}</Text>
      </View>
    );
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-arrow-forward-circle"
          color="rgba(255, 255, 255, 0.9)"
          size={24}
        />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          name="md-checkmark-circle-sharp"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Home />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          onDone={onDone}
          onSkip={onSkip}
          dotStyle={{backgroundColor: 'gray'}}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: {
      uri: 'https://avatarsdk.com/wp-content/uploads/2021/12/landing_fullbody_v4.png',
    },
    backgroundColor: '#000',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: require('../assets/taklawobg.png'),
    backgroundColor: '#000',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/intro_discount.png',
    },
    backgroundColor: '#000',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
];
