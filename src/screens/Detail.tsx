import React from "react";
import { View, ScrollView } from "react-native";
import GorgeousHeader from "react-native-gorgeous-header";
import { AppleCard } from "react-native-apple-card-views";

import menuImage from "../assets/menu.png";
import searchImage from "../assets/search.png";

const DetailScreen: React.FC = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingTop: 24, backgroundColor: "#fff" }}>
      <GorgeousHeader
        title="Training"
        subtitle="Let's loose booty fat and make great abs"
        menuImageSource={menuImage}
        searchImageSource={searchImage}
        titleTextStyle={{
          fontSize: 46,
          color: "#e3a29a",
          fontWeight: "bold",
        }}
        profileImageSource={require("../assets/taylor-hernandez-STiVSlutjt8-unsplash.jpg")}
        placeholder="Search for your fav traning..."
        placeholderTextColor="#fff"
        searchBarStyle={{
          height: 50,
          padding: 0,
          alignItems: "center",
          paddingLeft: 16,
          marginTop: 24,
          borderRadius: 24,
          flexDirection: "row",
          backgroundColor: "#e3a29a",
        }}
      />
      <ScrollView
        style={{ marginTop: 32 }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 32,
        }}
        contentInset={{ bottom: 64 }}
      >
        <AppleCard
          smallTitle="Kickbox"
          largeTitle="Let's Rock with Kickbox"
          footnoteText="You will learn kickboxing and burn calories with lots of fun with our professional trainers"
          resizeMode="cover"
          source={require("../assets/max-libertine-Pi4MOqVb85c-unsplash.jpg")}
          onPress={() => navigation.navigate("layoutrn")}
        />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;