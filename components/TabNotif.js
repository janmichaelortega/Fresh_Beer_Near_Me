import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 12); // Random hour (0-11)
  const minutes = Math.floor(Math.random() * 60); // Random minute (0-59)
  const isAM = Math.random() < 0.5; // Randomly choose AM or PM

  // Format hours to be in two digits
  const formattedHours = hours.toString().padStart(2, '0');

  // Format minutes to be in two digits
  const formattedMinutes = minutes.toString().padStart(2, '0');

  // Determine if it's AM or PM
  const period = isAM ? 'AM' : 'PM';

  // Return the formatted time
  return `${formattedHours}:${formattedMinutes} ${period}`;
};

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ? 'black' : 'white',
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? 'white' : 'black',
        fontSize: 18,
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const TabNotif = () => {
  const [activeTab, setActiveTab] = useState('Activity');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabs = [
    { id: '1', name: 'Activity' },
    { id: '2', name: 'Promotion' },
    { id: '3', name: 'Event' },
    { id: '4', name: 'News Feed' },
    // Add more tabs as needed
  ];

  const SampleDataActivity = [
    { id: '1', name: 'Franco', message: 'testmessage', time: generateRandomTime() },
    { id: '1', name: 'Matilda', message: 'testmessage', time: generateRandomTime() },
    // Other data for Activity
  ];

  const SampleDataPromotion = Array.from({ length: 100 }, (item, index) => ({
    id: index + 1,
    name: `Mike ${index + 1}`,
    message: `testmessage ${index + 1}`,
    time: generateRandomTime(),
  }));

  const SampleDataEvent = Array.from({ length: 100 }, (item, index) => ({
    id: index + 1,
    name: `YC ${index + 1}`,
    message: `testmessage ${index + 1}`,
    time: generateRandomTime(),
  }));

  const SampleDataNewsFeed = Array.from({ length: 100 }, (item, index) => ({
    id: index + 1,
    name: `Mandy ${index + 1}`,
    message: `testmessage ${index + 1}`,
    time: generateRandomTime(),
  }));

  let activeData = [];

  switch (activeTab) {
    case 'Activity':
      activeData = SampleDataActivity;
      break;
    case 'Promotion':
      activeData = SampleDataPromotion;
      break;
    case 'Event':
      activeData = SampleDataEvent;
      break;
    case 'News Feed':
      activeData = SampleDataNewsFeed;
      break;

    // Add more cases for additional tabs if needed

    default:
      activeData = [];
  }

  return (
    
    <View style={{ alignSelf: 'center' }}>
      <View style={styles.tabContainer}>
       
        {tabs.map((tab) => (
            
            
          <HeaderButton
            key={tab.id}
            text={tab.name}
            activeTab={activeTab}
            setActiveTab={handleTabClick}
          />
        ))}
      </View>
      <View style={styles.container}>
        {/*<Text>{activeTab}</Text>*/}
        <FlatList
          data={activeData}
          renderItem={({ item }) => (
            <View style={styles.rowContainer}>
              <View style={styles.rowIcon} />
              <View style={styles.rowContent}>
                <Text style={styles.rowHead}>{item.name}</Text>
                <Text style={styles.rowText}>{item.message}</Text>
                <Text style={styles.rowText}>{item.time}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  rowIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#c3c3c3',
    borderRadius: 20,
    marginRight: 12,
  },
  rowContent: {
    flex: 1,
  },
  rowHead: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  rowText: {
    fontSize: 16,
    //fontWeight: 'bold',
    marginBottom: 4,
  },
  rowTime: {
    fontSize: 14,
    color: '#808080',
  },
});

export default TabNotif;