import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/postSlice";
import { useNavigation } from "@react-navigation/native";
import { deletePost, updatePost } from "../redux/apiRequests";

const EditScreen = ({ route }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const item = route.params.item;
  const posts = useSelector((state) => state.post.posts);
  const [title, setTitle] = useState(item.title);
  const [desc, setDesc] = useState(item.desc);
  const onHandlePress = () => {
    const post = {
      _id: item.id,
      title: title,
      desc: desc,
    };
    //   if(title.length === 0 && desc.length ===0){
    //     navigation.goBack();
    //     return;
    //   }
    //   dispatch(createPost(post));
    updatePost( post, dispatch);
    navigation.goBack();
  };

  const deleteHandle = () => {
    deletePost(item.id, dispatch);
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "white" }}>
      <StatusBar />
      <View className="flex-row justify-between">
        <TouchableOpacity
          className=" mt-4 px-5 py-2"
          onPress={() => onHandlePress()}
        >
          <AntDesign className="" name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteHandle()}
          className="mt-4 px-5 py-2"
        >
          <MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <TextInput
          placeholder="Title"
          style={{ fontSize: wp(7) }}
          className="px-5 mt-6"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          placeholder="Description"
          style={{ fontSize: wp(5), width: wp(100) }}
          className="px-5 mt-6"
          value={desc}
          onChangeText={(text) => setDesc(text)}
        />
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
