import { StatusBar } from 'expo-status-bar';

import { OverviewScreen } from './src/screens/OverviewScreen';

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <OverviewScreen />
    </>
  );
}
