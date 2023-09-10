/**
 * @format
 */

import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";



function MessageGenerator(){
    const messages = [
        "Pear announces new flavor of iFruit",
        "Buber introduces BuberPuppy for pet rides",
        "Raymond Pachs finds gold coins under its office",
        "Beta unveils virtual reality world, MetaWorld",
        "Scmarget breaks the world record for giant bullseye",
        "Chilldelity opens ice cream-themed savings accounts",
        "Fresla launches a line of solar-powered toy cars",
        "Dollmart's garden gnomes come to life",
        "S&P introduces the 'Super&Pancakes' breakfast",
        "YIKEY's new shoes let you bounce to the moon",
        "Pear CEO turns classroom into amusement park",
        "Buber starts delivering ice cream with drones",
        "Raymond Pachs to host a wizardry-themed investor event",
        "Beta's MetaCity now includes a candy kingdom",
        "Scmarget's mascot breaks the world record for cartwheels",
        "Chilldelity offers free popcorn to shareholders",
        "Fresla unveils a jetpack for penguins",
        "Dollmart opens a zoo inside its stores",
        "S&P launches a superhero-themed stock index",
        "YIKEY sponsors a global kangaroo-jumping competition",
        "Pear invents a robot that can eat homework",
        "Buber creates the first-ever underwater taxi",
        "Raymond Pachs announces a partnership with leprechauns",
        "Beta's MetaVerse now has a roller coaster world",
        "Scmarget's stores become UFO landing zones",
        "Chilldelity offers free hot cocoa to shareholders",
        "Fresla designs electric skateboards for penguins",
        "Dollmart launches a rocket to the moon",
        "S&P introduces a time-travel stock index",
        "YIKEY designs shoes that make you run faster than cheetahs",
        "Pear's new smartphone shoots confetti",
        "Buber to offer skydiving rides during rush hour",
        "Raymond Pachs invests in a unicorn-themed bank",
        "Beta's MetaCity hit by a candy cane shortage",
        "Scmarget's bullseye gets stolen by space aliens",
        "Chilldelity's ice cream machine melts down",
        "Fresla's penguin skateboards recalled for flying too high",
        "Dollmart's garden gnomes demand higher wages",
        "S&P's superheroes get stuck in a time loop",
        "YIKEY's shoes cause kangaroos to hop backwards",
        "Pear's iFruit spontaneously turns into watermelons",
        "Buber's self-driving cars start racing each other",
        "Raymond Pachs discovers a treasure chest filled with bitcoins",
        "Beta's MetaWorld becomes the backdrop for a blockbuster movie",
        "Scmarget's bullseye accidentally hit by a giant pie",
        "Chilldelity's ice cream melts in Antarctica",
        "Fresla's penguin skateboards recalled for making penguins dizzy",
        "Dollmart's garden gnomes on strike for shorter workdays",
        "S&P's superheroes take a vacation in the Stone Age",
        "YIKEY's shoes cause kangaroos to dance the Macarena",
        "Pear's iFruit gains the ability to teleport",
        "Buber's self-driving cars transform into giant robots",
        "Raymond Pachs discovers a unicorn farm in its backyard",
        "Beta's MetaWorld hosts a candy-themed parade",
        "Scmarget's bullseye becomes a tourist attraction on Mars",
        "Chilldelity's ice cream sponsors a penguin ice-skating competition",
        "Fresla's penguin skateboards win an award for innovation",
        "Dollmart's garden gnomes become world-famous artists",
        "S&P's superheroes rescue a stranded spaceship",
        "YIKEY's shoes inspire kangaroos to become fashion models",
        "Pear's iFruit gains the power of telekinesis",
        "Buber's self-driving cars organize a dance-off",
        "Raymond Pachs discovers a unicorn farm in its backyard",
        "Beta's MetaWorld hosts a candy-themed parade",
        "Scmarget's bullseye becomes a magnet for UFOs",
        "Chilldelity's ice cream sponsors a penguin ice-skating competition",
        "Fresla's penguin skateboards win an award for innovation",
        "Dollmart's garden gnomes become world-famous artists",
        "S&P's superheroes rescue a stranded spaceship",
        "YIKEY's shoes inspire kangaroos to become fashion models",
        "Pear's iFruit gains the power of telekinesis"
      ];
      const companyNames = [
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY",
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY",
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY",
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY",
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY",
        "Pear", "Buber", "Raymond Pachs", "Beta", "Scmarget", "Chilldelity", "Fresla", "Dollmart", "S&P", "YIKEY"
      ];
      const stockPredictions = [
        10, 3, 6, 1, 3, 9, 6, 7, 3, 9, 6, 
        7, 6, 3, 7, 6, 9, 2, 8, 4, -9, -5, 
        -10, -9, -10, -4, -8, -9, -9, -3, 
        5, 4, 3, 9, 3, 5, 4, 2, 8, 5, -9, 
        -4, -4, -4, -2, -4, -1, -1, -1, -4, 
        9, 4, 1, 9, 2, 9, 3, 6, 1, 6, -7, 
        -5, -6, -9, -7, -6, -1, -6, -5, 
        -1, 5, 9, 7, 2, 1, 1, 8, 4, 2, 7
      ];
    const [randomMessage, setRandomMessage] = useState("");
    const[remainingClicks, setRemainingClicks] = useState(3);

    const getRandomMessage = () => {
        if(remainingClicks > 0){
            const randomIndex = Math.floor(Math.random() * messages.length);
            setRandomMessage(messages[randomIndex]);
            setRemainingClicks(remainingClicks -1);
        }

    };

    return(
    <View>
    <Text style={{ fontSize: 20, textAlign: "center" }}>Read the News Carefully!</Text>
      <Text
        editable={false}
        multiline={true}
        numberOfLines={4}
        style={{ borderWidth: 2, padding: 10, marginTop: 10, fontSize:20}}
      >{randomMessage}</Text>
      
      <Button 
      title="Next News" 
      onPress={getRandomMessage} 
      disabled= {remainingClicks ===0}/>
      
    </View>
    );
}
export default MessageGenerator;