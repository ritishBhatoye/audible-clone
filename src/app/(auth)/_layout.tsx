import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout(): React.JSX.Element {
  const { isSignedIn }: { isSignedIn: boolean | undefined } = useAuth();

  if (isSignedIn ?? false) {
    return <Redirect href="/" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
