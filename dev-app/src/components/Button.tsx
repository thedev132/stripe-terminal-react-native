import React from 'react';
import {
  type AccessibilityProps,
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../colors';

type Props = AccessibilityProps & {
  title?: string | React.ReactElement;
  variant?: 'default' | 'primary';
  disabled?: boolean;
  loading?: boolean;
  color?: string;
  testID?: string;
  onPress(): void;
};

export default function Button({
  title,
  variant = 'default',
  disabled,
  loading,
  testID,
  color,
  onPress,
  ...props
}: Props) {
  const titleElement = React.isValidElement(title) ? (
    title
  ) : (
    <Text
      style={[
        styles.text,
        variant === 'primary' && styles.textPrimary,
        color ? { color } : {},
      ]}
    >
      {title}
    </Text>
  );
  return (
    <View style={[disabled && styles.disabled, styles.flex]}>
      <TouchableOpacity
        disabled={disabled}
        testID={testID}
        style={[
          styles.container,
          variant === 'primary' && styles.primaryContainer,
        ]}
        onPress={onPress}
        {...props}
      >
        {loading ? (
          <ActivityIndicator color={colors.white} size="small" />
        ) : (
          titleElement
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryContainer: {
    backgroundColor: colors.slate,
    alignItems: 'center',
    height: 40,
  },
  text: {
    color: colors.slate,
    fontWeight: '600',
    fontSize: 16,
  },
  textPrimary: {
    color: colors.white,
  },
  disabled: {
    opacity: 0.3,
  },
  flex: {
    flex: 1,
  },
});
