import { View, Image, StyleSheet, Text } from "react-native"


function VideoFrameItem({pic, text}) {
    return(
        <View style={styles.container}>
            <View style={styles.secondView}>
             <Image source={pic} style={styles.image} />
             <Text style={styles.text}>{text}</Text>
             </View>
        </View>
    )
}

export default VideoFrameItem

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    secondView:{
        backgroundColor: "white",
        width: 200,
        borderRadius: 10
    },
    image: {
      width: 200,
      height: 100,
      borderRadius: 10,
    },
    text: {
        fontSize: 16,
        padding: 3,
    }
  });