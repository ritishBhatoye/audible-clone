import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';

import './global.css';
import { books } from './utils/dummyData/dummyBooks';
import BookTile from './src/components/home/BookTile';

export default function App(): React.JSX.Element {
  const unusedVar = 'test';

  return (
    <View className="bg-slate-950 justify-center flex-1">
      <View className=" w-11/12 mx-auto justify-center ">
        <FlatList
          data={books}
          keyExtractor={book => book.id}
          renderItem={({ item: book }) => <BookTile Book={book} />}
        />
      </View>
    </View>
  );
}
