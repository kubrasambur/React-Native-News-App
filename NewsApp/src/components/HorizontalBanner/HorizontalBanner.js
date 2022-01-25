import { StyleSheet, Text, View, ScrollView, Image ,Dimensions} from 'react-native';
import React from 'react';
import banner from "../../news_banner_data.json"
const HorizontalBanner = () => {
    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    banner.map((bannerNews, index) => (<Image style={styles.banner_image} key={index} source={{ uri: bannerNews.imageUrl }}></Image>))
                }
            </ScrollView>
        </View>
    );
};

export default HorizontalBanner;

const styles = StyleSheet.create({
    banner_image: {
        height: Dimensions.get("window").height / 5,
        width: Dimensions.get("window").width / 2
    },
    scrollView:{
        marginHorizontal:15
    }
});
