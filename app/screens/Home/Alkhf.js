import React, { useState } from 'react';
import QuaranParghraph from "../../compnent/QuaranParghraph";
import Screen from "../../compnent/Screen";
import { quaranJson } from "../../assets/Quran";
import { FlatList, StyleSheet,TouchableOpacity ,Text,View,TextInput} from "react-native";
import { useNavigation } from '@react-navigation/native';
import colors from "../../config/colors";


function Alkhf(props) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = text => {
    setSearchQuery(text);
  };

  // Filter the data based on the search query
  const filteredData = quaranJson.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const RenderItem =React.memo(({ item }) => {
   return <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("QuaranParghraph", { item })}
    >
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  });


  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.searchInput}
        placeholder="البحث عن سورة "
        placeholderTextColor="#888" // Set your desired placeholder text color here

        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5} // Adjust based on your needs

      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    margin: 12,
    borderRadius:20,
  textAlign:'right',
    padding: 10,
    color:colors.black,
    backgroundColor:colors.background
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 32,
    textAlign:'right'
  },
});

export default Alkhf;
