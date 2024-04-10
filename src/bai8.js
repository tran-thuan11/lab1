
import React from "react";
import { SafeAreaView, StyleSheet, SectionList, Text, View } from "react-native";

const styles = StyleSheet.create(
    {
        row: { 
            paddingHorizontal: 10,
            paddingVertical: 10
          },   
        name: { 
            fontSize: 16
        },
        separator: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            height: 1
        },   
        sectionHeader: {
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: "rgb(170,170,170)"
        },
    }
);

const groupPeopleByLastName = (_data) => {
    const data = [..._data];
    const groupedData = data.reduce((accumulator,item) => {
      const group = item.name.last[0].toUpperCase();
      if (accumulator[group]) {
          accumulator[group].data.push(item);
      }
      else{
          accumulator[group] ={
              title : group,
              data : [item],
          };
      }
      return accumulator;
    },{});
    
    const sections = Object.keys(groupedData).map((key) => groupedData[key]);
    
    return sections.sort((a,b) => a.title > b.title ? 1 : -1);
};

export default () => (
    <SafeAreaView>
        <SectionList 
           sections={groupPeopleByLastName(PEOPLE)}
           keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
           renderSectionHeader={({section})=> (
               <View style={styles.sectionHeader}>
                   <Text>{section.title}</Text>
               </View>
           )}
           renderItem={({item})=> (
               <View style={styles.row}>
                   <Text style={styles.name}>{`${item.name.first} ${item.name.last}`}</Text>
               </View> 
           )}
           ItemSeparatorComponent={() => <View style={styles.separator}/>}
        />
    </SafeAreaView>
);

const PEOPLE = [
    {
        name:{
            title: "Mr",       
            first: "Mai Thuc Hai",       
            last: "Nam", 
        },
    },
    {
        name:{
            title: "Mr",       
            first: "Nguyen",       
            last: "Trung Tinh", 
        },
    },
    {
        name:{
            title: "Mr",       
            first: "Tran",       
            last: "Minh Thuan", 
        },
    },
];