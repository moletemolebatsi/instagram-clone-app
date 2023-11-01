import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React, { useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { LinearGradient } from "expo-linear-gradient";
import BottomSheetOptions from "../bottomSheets/BottomSheetOptions";
import useCheckStoriesSeen from "../../../hooks/useCheckStoriesSeen";
import useHandleFollow from "../../../hooks/useHandleFollow";

const Header = ({ navigation, post, currentUser }) => {
  const { checkStoriesSeen } = useCheckStoriesSeen();
  const { handleFollow } = useHandleFollow();
  const bottomSheetRef = useRef(null);

  const handOptionsSheet = () => {
    bottomSheetRef.current.present();
  };

  const handlePostOwner = () => {
    if (currentUser.email === post.owner_email) {
      navigation.navigate("Profile");
    } else {
      navigation.navigate("UserDetail", {
        email: post.owner_email,
      });
    }
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => handlePostOwner()}
          style={styles.headerUserContainer}
        >
          {checkStoriesSeen(post.username, currentUser.email) ? (
            <View style={styles.rainbowBorder}>
              <FastImage
                source={{ uri: post.profile_picture }}
                style={styles.headerImage}
              />
            </View>
          ) : (
            <LinearGradient
              start={[0.9, 0.45]}
              end={[0.07, 1.03]}
              colors={["#ff00ff", "#ff4400", "#ffff00"]}
              style={styles.rainbowBorder}
            >
              <FastImage
                source={{ uri: post.profile_picture }}
                style={styles.headerImage}
              />
            </LinearGradient>
          )}
          <Text style={styles.headerText}>{post.username.toLowerCase()}</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          {currentUser.email !== post.owner_email &&
          currentUser.following &&
          !currentUser.following.includes(post.owner_email) ? (
            <TouchableOpacity
              onPress={() => {
                handleFollow(post.owner_email);
              }}
              style={styles.buttonContainer}
            >
              {currentUser.following_request &&
              !currentUser.following_request.includes(post.owner_email) ? (
                <Text style={styles.buttonText}>Follow</Text>
              ) : (
                <Text style={styles.buttonText}>Requested</Text>
              )}
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity onPress={() => handOptionsSheet()}>
            <Entypo
              name="dots-three-horizontal"
              size={15}
              color={"#fff"}
              style={styles.headerDots}
            />
          </TouchableOpacity>
        </View>
      </View>
      <BottomSheetOptions
        bottomSheetRef={bottomSheetRef}
        currentUser={currentUser}
        post={post}
        navigation={navigation}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 7,
    marginHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerUserContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    height: 37,
    width: 37,
    resizeMode: "cover",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
  },
  rainbowBorder: {
    height: 41,
    width: 41,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 9,
    marginBottom: 4,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    backgroundColor: "#333",
    borderRadius: 10,
    height: 36,
    paddingHorizontal: 12,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    marginBottom: 2,
  },
  headerDots: {
    marginRight: 6,
  },
});
