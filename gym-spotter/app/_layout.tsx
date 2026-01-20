import { Stack } from "expo-router";

export default function RootLayout() {

    const nameApp = "GymSpotter";

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: nameApp }} />
    </Stack>
  );
}
