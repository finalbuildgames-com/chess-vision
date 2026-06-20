import { useMemo } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Text,
  useWindowDimensions,
  View
} from "react-native";

import { getDeviceProfile } from "./src/deviceProfile.js";

const boardSquares = Array.from({ length: 64 }, (_, index) => ({
  key: `square-${index}`,
  isDark: (Math.floor(index / 8) + index) % 2 === 1
}));

export default function App() {
  const { width } = useWindowDimensions();
  const profile = useMemo(
    () => getDeviceProfile({ width, platform: Platform.OS }),
    [width]
  );

  const isWide = profile.formFactor !== "phone";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.shell, { maxWidth: profile.maxContentWidth }]}>
          <View style={styles.header}>
            <View>
              <Text style={styles.eyebrow}>Chess Vision</Text>
              <Text style={styles.title}>Board capture lab</Text>
            </View>
            <View style={styles.platformBadge}>
              <Text style={styles.platformText}>{profile.platform}</Text>
            </View>
          </View>

          <View style={[styles.workspace, isWide && styles.workspaceWide]}>
            <View style={styles.boardWrap}>
              <View style={styles.board}>
                {boardSquares.map((square) => (
                  <View
                    key={square.key}
                    style={[
                      styles.square,
                      square.isDark ? styles.squareDark : styles.squareLight
                    ]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.panel}>
              <Text style={styles.panelLabel}>Device mode</Text>
              <Text style={styles.panelValue}>{profile.formFactor}</Text>
              <View style={styles.rule} />
              <Text style={styles.panelLabel}>Runtime target</Text>
              <Text style={styles.panelValue}>
                {profile.isNative ? "native" : "web"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B1220"
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20
  },
  shell: {
    alignSelf: "center",
    width: "100%",
    gap: 24
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    justifyContent: "space-between"
  },
  eyebrow: {
    color: "#A7F3D0",
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0
  },
  title: {
    color: "#F8FAFC",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 40
  },
  platformBadge: {
    backgroundColor: "#F8FAFC",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  platformText: {
    color: "#0B1220",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  workspace: {
    gap: 18
  },
  workspaceWide: {
    alignItems: "stretch",
    flexDirection: "row"
  },
  boardWrap: {
    aspectRatio: 1,
    flex: 1,
    minWidth: 0
  },
  board: {
    aspectRatio: 1,
    borderColor: "#CBD5E1",
    borderRadius: 8,
    borderWidth: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    width: "100%"
  },
  square: {
    aspectRatio: 1,
    width: "12.5%"
  },
  squareLight: {
    backgroundColor: "#E2E8F0"
  },
  squareDark: {
    backgroundColor: "#334155"
  },
  panel: {
    backgroundColor: "#F8FAFC",
    borderRadius: 8,
    gap: 8,
    justifyContent: "center",
    minWidth: 210,
    padding: 20
  },
  panelLabel: {
    color: "#475569",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  panelValue: {
    color: "#0F172A",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: 0
  },
  rule: {
    backgroundColor: "#CBD5E1",
    height: 1,
    marginVertical: 6
  }
});
