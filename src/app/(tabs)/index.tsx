import React from 'react';

import { FlatList, View } from 'react-native';
import { books } from '../../../utils/dummyData/dummyBooks';
import BookTile from '../../components/home/BookTile';

const App = () => {
  return (
    <FlatList
      data={books}
      contentContainerClassName="p-2 gap-4"
      renderItem={({ item }) => <BookTile Book={item} />}
    />
  );
};

export default App;
