import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';

const Welcome = () => {
  return (
    <SafeAreaView>
      <View className="bg-blue">
        <Text className="text-red">Welcome</Text>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
