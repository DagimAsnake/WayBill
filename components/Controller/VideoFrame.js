import { useRef } from "react";
import { View, StyleSheet, FlatList, Text, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';

import VideoFrameItem from "./VideoFrameItem";

const cards = [
    {
        pic: require("../../assets/video-frame.png"),
        text: "How to detect controband items?",
        id: "1"
    },
    {
        pic: require("../../assets/video-frame.png"),
        text: "How to detect controband items?",
        id: "2"
    },
    {
        pic: require("../../assets/video-frame.png"),
        text: "How to detect controband items?",
        id: "3"
    },
    {
        pic: require("../../assets/video-frame.png"),
        text: "How to detect controband items?",
        id: "4"
    },
    {
        pic: require("../../assets/video-frame.png"),
        text: "How to detect controband items?",
        id: "5"
    },
]

function renderCardItem (itemData) {
    return <VideoFrameItem {...itemData.item} />
}

function VideoFrame() {

    const flatListRef = useRef(null);

    const scrollToFirstItem = () => {
        flatListRef.current?.scrollToIndex({ index: 0 });
      };
    
      const scrollToLastItem = () => {
        flatListRef.current?.scrollToEnd();
      };

    return(
        <View style={styles.root} >
            <View style={styles.viewContainer}>
                <Text style={styles.videos}>Videos</Text>
                <View style={styles.viewIcon}>
                    <Pressable onPress={scrollToFirstItem}>
                        <Ionicons name="chevron-back-sharp" size={32} color="black" />
                    </Pressable>
                    <Pressable onPress={scrollToLastItem}>
                        <Ionicons name="chevron-forward-sharp" size={32} color="black" />
                    </Pressable>
                </View>
            </View>
            <FlatList ref={flatListRef} data={cards} renderItem={renderCardItem} keyExtractor={(item) => item.id} horizontal={true}  />
        </View>
    )
}

export default VideoFrame

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    viewContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    viewIcon: {
        flexDirection: "row",
        marginRight: 10
    },
    videos: {
        fontSize: 24,
        fontWeight: "bold"
    }
})