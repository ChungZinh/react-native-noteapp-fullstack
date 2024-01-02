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
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { createPost } from "../redux/apiRequests";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onHandlePress = () => {
    const post = {
      title: title,
      desc: desc,
    };

    if (title.length === 0 && desc.length === 0) {
      navigation.goBack();
      return;
    }
    // dispatch(createPost(post));
    createPost(post, dispatch);
    navigation.goBack();
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
        {/* <TouchableOpacity className='mt-4 px-5 py-2'>
            <MaterialIcons  name="delete" size={24} color="black" />
        </TouchableOpacity> */}
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

export default CreateScreen;
