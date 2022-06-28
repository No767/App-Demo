import { View } from 'react-native';
import { NativeBaseProvider } from "native-base";
import { MainBody } from "./shared/ui-components/body";

export default function App() {
  return (
    <View>
      <NativeBaseProvider>
        <MainBody />
      </NativeBaseProvider>
    </View>
  );
}