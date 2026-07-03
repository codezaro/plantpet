import React from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { User } from "../auth/AuthContext";

type Plant = {
  id: string;
  name: string;
  next: string;
  status: string;
  color: string;
  icon?: string; // emoji placeholder
};

type Props = {
  user: User;
  onSignOut: () => void;
};

const SAMPLE_PLANTS: Plant[] = [
  {
    id: "1",
    name: "Snake Plant",
    next: "Today",
    status: "All good",
    color: "#E6F7EE",
    icon: "🌿",
  },
  {
    id: "2",
    name: "Peace Lily",
    next: "Tomorrow",
    status: "Water soon",
    color: "#FFF7E6",
    icon: "💧",
  },
  {
    id: "3",
    name: "Monstera",
    next: "Today",
    status: "Good light",
    color: "#E8FFF0",
    icon: "🌞",
  },
  {
    id: "4",
    name: "Aloe Vera",
    next: "In 2 days",
    status: "All good",
    color: "#F0FFF6",
    icon: "🪴",
  },
];

function PlantCard({ item }: { item: Plant }) {
  return (
    <View style={styles.card}>
      <View style={[styles.thumb, { backgroundColor: item.color }]}>
        <Text style={styles.thumbIcon}>{item.icon}</Text>
      </View>
      <Text style={styles.cardName}>{item.name}</Text>
      <Text style={styles.cardSub}>{item.next}</Text>
      <View style={styles.badgeWrapper}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.status}</Text>
        </View>
      </View>
    </View>
  );
}

export default function HomeScreen({ user, onSignOut }: Props) {
  const waterCount = 2;
  const sunCount = 1;

  return (
    <ScrollView style={styles.outer} contentContainerStyle={styles.content}>
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.menuButton} onPress={() => null}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.bell} onPress={() => null} />
        </View>
      </View>

      <Text style={styles.greeting}>Hello, Plant Parent! 🌿</Text>
      <Text style={styles.greetingSub}>
        Let's keep your plants happy and healthy.
      </Text>

      <View style={styles.cardLarge}>
        <Text style={styles.cardLargeTitle}>Today at a glance</Text>
        <View style={styles.glanceRow}>
          <View style={styles.glanceItem}>
            <View style={styles.glanceIcon}>
              <Text style={{ fontSize: 20 }}>💧</Text>
            </View>
            <Text style={styles.glanceNumber}>{waterCount}</Text>
            <Text style={styles.glanceLabel}>Plants to water</Text>
            <Text style={styles.glanceLink}>See list ›</Text>
          </View>

          <View style={styles.glanceDivider} />

          <View style={styles.glanceItem}>
            <View style={styles.glanceIcon}>
              <Text style={{ fontSize: 20 }}>🌞</Text>
            </View>
            <Text style={styles.glanceNumber}>{sunCount}</Text>
            <Text style={styles.glanceLabel}>Plant needs sunlight</Text>
            <Text style={styles.glanceLink}>See list ›</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>My Plants</Text>
        <TouchableOpacity onPress={() => null}>
          <Text style={styles.viewAll}>View all ›</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={SAMPLE_PLANTS}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <PlantCard item={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.plantList}
      />

      <View style={styles.bottomSection}>
        <View style={styles.tipCard}>
          <View style={styles.tipHeader}>
            <View style={styles.tipBadge}>
              <Text style={styles.tipBadgeIcon}>🌱</Text>
            </View>
            <Text style={styles.tipTitle}>Plant Care Tips</Text>
          </View>
          <Text style={styles.tipText}>
            Most indoor plants thrive with bright, indirect sunlight and regular
            watering.
          </Text>
          <View style={styles.tipGraphic}>
            <View style={styles.waterCan}>
              <Text style={styles.waterCanIcon}>💧</Text>
            </View>
            <View style={styles.plantIllustration}>
              <Text style={styles.plantIllustrationIcon}>🪴</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>My Stats</Text>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={[styles.statsIcon, { backgroundColor: "#E6F7EE" }]}> 
                <Text style={styles.statsIconText}>🌿</Text>
              </View>
              <Text style={styles.statsNumber}>4</Text>
              <Text style={styles.statsLabel}>Plants</Text>
            </View>
            <View style={styles.statsDivider} />
            <View style={styles.statsItem}>
              <View style={[styles.statsIcon, { backgroundColor: "#EBF4FF" }]}> 
                <Text style={styles.statsIconText}>💧</Text>
              </View>
              <Text style={styles.statsNumber}>2</Text>
              <Text style={styles.statsLabel}>Watered today</Text>
            </View>
            <View style={styles.statsDivider} />
            <View style={styles.statsItem}>
              <View style={[styles.statsIcon, { backgroundColor: "#FFF7E6" }]}> 
                <Text style={styles.statsIconText}>🌞</Text>
              </View>
              <Text style={styles.statsNumber}>1</Text>
              <Text style={styles.statsLabel}>Got sunlight today</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: "#fff" },
  content: { padding: 20 },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  menuButton: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#EFF8F1",
    alignItems: "center",
    justifyContent: "center",
  },
  menuIcon: { fontSize: 18 },
  headerRight: { flexDirection: "row", alignItems: "center" },
  bell: { width: 36, height: 36, borderRadius: 18, backgroundColor: "#F6F6F6" },

  greeting: { fontSize: 28, fontWeight: "700", color: "#0B6B38", marginTop: 8 },
  greetingSub: { fontSize: 16, color: "#666", marginTop: 6, marginBottom: 16 },

  cardLarge: {
    backgroundColor: "#F6FFF6",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cardLargeTitle: { fontWeight: "700", marginBottom: 12 },
  glanceRow: { flexDirection: "row", alignItems: "center" },
  glanceItem: { flex: 1, alignItems: "flex-start" },
  glanceIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  glanceNumber: { fontSize: 22, fontWeight: "700", marginBottom: 4 },
  glanceLabel: { color: "#444", marginBottom: 6 },
  glanceLink: { color: "#0B6B38", fontWeight: "600" },
  glanceDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#E6E6E6",
    marginHorizontal: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: "700" },
  viewAll: { color: "#0B6B38", fontWeight: "600" },

  plantList: { paddingVertical: 8 },
  card: {
    width: 160,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  thumb: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  thumbIcon: { fontSize: 36 },
  cardName: { fontWeight: "700", marginBottom: 4 },
  cardSub: { color: "#777", marginBottom: 8 },
  badgeWrapper: { alignItems: "flex-start" },
  badge: {
    backgroundColor: "#F0FFF6",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  badgeText: { color: "#166534" },

  bottomSection: { marginTop: 20, marginBottom: 30 },
  tipCard: {
    backgroundColor: "#F5FBF4",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 1,
  },
  tipHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  tipBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#E6F7EE",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  tipBadgeIcon: { fontSize: 18 },
  tipTitle: { fontSize: 16, fontWeight: "700", color: "#0B6B38" },
  tipText: {
    color: "#2F3E35",
    lineHeight: 22,
    marginBottom: 18,
  },
  tipGraphic: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  waterCan: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#DCF4E2",
    alignItems: "center",
    justifyContent: "center",
  },
  waterCanIcon: { fontSize: 28 },
  plantIllustration: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: "#EEF7EA",
    alignItems: "center",
    justifyContent: "center",
  },
  plantIllustrationIcon: { fontSize: 32 },

  statsCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 1,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 16,
    color: "#0B6B38",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statsItem: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 6,
  },
  statsIcon: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  statsIconText: { fontSize: 22 },
  statsNumber: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  statsLabel: { textAlign: "center", color: "#556061" },
  statsDivider: {
    width: 1,
    backgroundColor: "#E8E8E8",
    marginHorizontal: 4,
  },

  signOut: { marginTop: 24, alignSelf: "center" },
  signOutText: { color: "#b00020" },
});
