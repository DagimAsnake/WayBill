import { View, FlatList, StyleSheet, Text } from "react-native"
import { useState } from "react"

import HistoryItem from "./HistoryItem"
import HistoryFilter from "./HistoryFilter"

const History = [
    {
        Bol: "1234567",
        Date: "20/08/2023",
        Status: "Accepted",
        id: "1"
    },
    {
        Bol: "7654321",
        Date: "14/07/2022",
        Status: "Declined",
        id: "2"
    },
    {
        Bol: "1234567",
        Date: "20/08/2023",
        Status: "Accepted",
        id: "3"
    },
    {
        Bol: "7654321",
        Date: "14/07/2022",
        Status: "Declined",
        id: "4"
    },
    {
        Bol: "1234567",
        Date: "20/08/2023",
        Status: "Accepted",
        id: "5"
    },
    
]

function renderHistoryListItem (itemData) {
    return <HistoryItem {...itemData.item} />
}


function HistoryLists() {

    const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredHistory =
    selectedStatus === "All"
      ? History
      : History.filter((item) => item.Status === selectedStatus);

  function handleStatusChange(status) {
    setSelectedStatus(status);
  }

    return(
        <View style={styles.container}>
            <HistoryFilter handleStatusChange={handleStatusChange} />
            <View style={styles.view}>
                <Text style={styles.text}>Bol</Text>
                <Text style={[styles.text, styles.centerText]}>Date</Text>
                <Text style={styles.text}>Status</Text>
            </View>
            <FlatList data={filteredHistory} renderItem={renderHistoryListItem} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default HistoryLists

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#909090",
        paddingVertical: 5
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 30,
        paddingVertical: 2,
    },
    centerText: {
        borderColor: "white",
        borderLeftWidth: 1,
        borderRightWidth: 1,
    }
})