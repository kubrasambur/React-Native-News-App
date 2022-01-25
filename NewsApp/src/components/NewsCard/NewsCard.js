import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';

const NewsCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: news.imageUrl }}></Image>
            <Text style={styles.title}>{news.title}</Text>
            <Text style={styles.description}>{news.description}</Text>
            <Text style={styles.author}>{news.author}</Text>
        </View>
    );
};

export default NewsCard;

const styles = StyleSheet.create({
    container: {
        marginBottom:20,
        marginHorizontal:12,
        borderRadius: 15,
        backgroundColor: "white",
    },
    image: {
        height: Dimensions.get("window").height / 4,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    title: { padding: 5, fontSize: 18, fontWeight: "bold", color: "black" },
    description: {
        padding: 5,
        color: "black"
    },
    author: {
        fontStyle: "italic",
        textAlign: "right",
        paddingRight: 6
    }
});
