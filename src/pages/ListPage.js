import type {Node} from 'react';
import React from 'react';
import {Text, View} from 'react-native';
import pageStyle from "./Page.style";

const ListPage: () => Node = () => {
  return (
    <View style={pageStyle.background}>
      <Text>Test testy test</Text>
    </View>
  );
};

export default ListPage;
