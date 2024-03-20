import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const PostsScreen = () => {
  return (
    <View>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat,
        blanditiis nostrum, perspiciatis corporis doloribus recusandae in natus
        qui, eveniet ducimus reiciendis. Eius beatae nesciunt, temporibus ad
        laudantium obcaecati fugiat, incidunt corrupti corporis, reprehenderit
        fuga eum sequi fugit rem vitae quae aut. Earum accusantium, ut vitae
        dicta voluptatibus ad atque corrupti sapiente inventore nisi ab pariatur
        a porro officiis, excepturi unde eos nobis at est minima architecto quod
        numquam quis. Molestiae rerum excepturi voluptatem enim totam,
        consectetur non at error. Ea deleniti doloribus ut eaque perspiciatis
        eos quos similique voluptatum, quibusdam libero? Voluptas ducimus
        molestias nobis ab aut laudantium eum animi.
      </Text>
      <Button
        title="Go home"
        onPress={() => navigation.navigate("Registration")}
      />
    </View>
  );
};
