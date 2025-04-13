import { StatusBar } from 'expo-status-bar';
import { FlatList, Text, View } from 'react-native';

import './global.css';
import { books } from './utils/dummyData/dummyBooks';
import BookTile from './src/components/home/BookTile';

export default function App(): React.JSX.Element {
  return (
    <View className="bg-slate-800 justify-center flex-1">
      <View className=" w-11/12 mx-auto justify-center ">
        <FlatList
          data={books}
          keyExtractor={book => book.id}
          contentContainerClassName="gap-5"
          renderItem={({ item: book }) => <BookTile Book={book} />}
        />
      </View>
    </View>
  );
}
