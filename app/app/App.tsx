import { StatusBar } from 'expo-status-bar';

import { OverviewScreen } from './src/screens/OverviewScreen';
import { colors } from './src/theme/tokens';

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.headerBackground} />
      <OverviewScreen />
    </>
  );
}
