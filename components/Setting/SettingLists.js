import { View, FlatList } from "react-native"

import SettingIcon from "./SettingIcon"

const iconLists = [
    {
        icon: "md-person-circle-sharp",
        text: "Edit Profile",
        nextIcon: "chevron-forward-sharp",
        id: "1"
    },
    {
        icon: "lock-closed-outline",
        text: "Change Password",
        nextIcon: "chevron-forward-sharp",
        id: "2"
    },
    {
        icon: "construct-outline",
        text: "Two-Step Authentication",
        nextIcon: "md-toggle-outline",
        id: "3"
    },
    {
        icon: "md-location-outline",
        text: "GPS",
        nextIcon: "md-toggle-outline",
        id: "4"
    },
    {
        icon: "language",
        text: "Language",
        nextIcon: "chevron-forward-sharp",
        id: "5"
    },
    {
        icon: "shield-checkmark-outline",
        text: "Privacy Policy",
        nextIcon: "chevron-forward-sharp",
        id: "6"
    },
]

function renderIconListItem (itemData) {
    return <SettingIcon {...itemData.item} />
}

function SettingLists() {
    return(
        <View>
            <FlatList data={iconLists} renderItem={renderIconListItem} keyExtractor={(item) => item.id} />
        </View>
    )
}

export default SettingLists