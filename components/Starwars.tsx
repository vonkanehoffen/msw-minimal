import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { ThemedText } from "@/components/ThemedText";

const StarWars = () => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const data = await response.json();
      console.log("DATA", data);
      setCharacter(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching Star Wars character:", error);
      setLoading(false);
    }
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : character ? (
        <ThemedText>Character Name: {character.name}</ThemedText>
      ) : (
        <ThemedText>Failed to load character</ThemedText>
      )}
    </View>
  );
};

export default StarWars;
