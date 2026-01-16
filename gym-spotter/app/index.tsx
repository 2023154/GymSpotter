import { View, Text } from "react-native";
import { helloWorld, textMessage } from "../src/functions/hello-world";
import { allScreenStyles } from "../src/styles/styles";

export default function Index() {
    
    const styleCard = allScreenStyles.card;
    const styleContainer = allScreenStyles.container;

  return (
    
    <View style={styleContainer}>
      <Text style={styleCard}>{textMessage()}</Text>
      <Text style={styleCard}>{helloWorld()}</Text>
    </View>
  );
}
