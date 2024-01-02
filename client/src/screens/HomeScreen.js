import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  getPost,
  updatePost,
  createPost,
  deletePost,
} from "../redux/apiRequests";
import {
  getSuccess,
  createSuccess,
  deleteSuccess,
  updateSuccess,
} from "../redux/postSlice";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [isBucket, setIsBucket] = useState(true);
  const data = useSelector((state) => state.post.posts);
  const dispacth = useDispatch();

  useEffect(() => {
    getPost(dispacth);
  }, [
    getSuccess,
    createSuccess,
    deleteSuccess,
    updateSuccess,
    getPost,
    updatePost,
    createPost,
    deletePost,
  ]);

  useFocusEffect(
    useCallback(() => {
      getPost(dispacth)
    }) 
  )



  return (
    <SafeAreaView style={{ backgroundColor: "white" }} className="flex-1">
      <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
      <View className="flex-row justify-between px-6 mt-4 mb-6">
        <Text style={{ fontSize: wp(6) }}>NoteBucket</Text>
        <TouchableOpacity onPress={() => setIsBucket(!isBucket)}>
          {isBucket ? (
            <AntDesign name="appstore-o" size={24} color="black" />
          ) : (
            <Foundation name="list" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>

      <View className="px-6">
        {isBucket ? (
          <FlatList
            data={data}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Edit", { item })}
                  style={{ width: wp(40), height: wp(40) }}
                  className="border-2 border-gray-300 mb-6 rounded-lg space-y-1 px-5 overflow-hidden"
                >
                  <Text className=" mt-2 text-xl ">{item.title}</Text>
                  <Text className="">{item.desc}</Text>
                </TouchableOpacity>
              );
            }}
          />
        ) : (
          <View className="items-center">
            {data.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Edit", { item })}
                  key={item.desc}
                  style={{ width: wp(90), height: hp(10) }}
                  className="border-2 space-y-1 border-gray-300 rounded-lg  px-5 mb-6"
                >
                  <Text className="mt-3 text-xl">{item.title}</Text>
                  <Text>{item.desc}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Create")}
        className="absolute bottom-5 right-5 bg-white shadow-lg shadow-gray-700 rounded-lg justify-center items-center"
        style={{ width: wp(12), height: wp(12) }}
      >
        <Text className="text-2xl text-gray-400">+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
