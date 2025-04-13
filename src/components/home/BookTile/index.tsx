import React from 'react';

import { View, Text } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface props {
  Book: BookDataType;
}

const BookTile = ({ Book }: props) => {
  return (
    <View className="flex flex-row items-center justify-between gap-2 p-4 w-fit">
      <View className="flex flex-row gap-4 items-center">
        <Image
          source={{ uri: Book.thumbnail_url }}
          className="w-16 aspect-square rounded-md"
        />

        <View className="flex flex-col gap-2 items-start">
          <Text className="text-2xl text-gray-100 font-bold">{Book.title}</Text>
          <Text className="text-gray-400">{Book.author}</Text>
        </View>
      </View>
      <View className="flex flex-rows items-center">
        <AntDesign name="playcircleo" size={24} color="gainsboro" />
      </View>
    </View>
  );
};

export default BookTile;
