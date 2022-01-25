import { StyleSheet, Text, View, Fla, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import React from 'react';
import news from "./new_data.json"
import NewsCard from './components/NewsCard/NewsCard';
import HorizontalBanner from './components/HorizontalBanner/HorizontalBanner';

const App = () => {
    const renderNews = ({ item }) => <NewsCard news={item} />

    return (
        <View style={styles.view}>
            <Text style={styles.header}>NEWS</Text>
            <FlatList
                ListHeaderComponent={() => <HorizontalBanner/>}
                keyExtractor={(item => item = item.u_id.toString())}
                data={news}
                renderItem={renderNews}></FlatList>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#E0E0E0BB"
    },
    header: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 12
    },
    
});
