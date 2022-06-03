import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { ColorSchemeName } from 'react-native';

import { AuthProvider } from '../src/contexts/auth';
import AppRoutes from '../src/routes/app.routes';
import AuthRoutes from '../src/routes/auth.routes';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <AuthRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
