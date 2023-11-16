import React , {useState} from 'react';
import { SafeAreaView, Text, TextInput, View ,TouchableOpacity, Alert, FlatList} from 'react-native';
import { appStyles as styles } from "./styles";

export default function App(){
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTaskPress = () => { 
    if(text === "")
    {
      alert("Error! Please enter a task");
      setText("");
    }
    else
    {
      setTasks([...tasks, text]);
      setText("");
    }
  }
  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }
; 
  return (
    <SafeAreaView style={{flex:1, backgroundColor:mintcream}}>
      <View style={styles.container}>
        <Text style={styles.title}> My Tasks!</Text>
        <Text style={styles.subTitle}> Enter your task here and add some text in between </Text>
        <TextInput style={styles.input} 
        placeholder="Enter your task here!"
         onChangeText={setText} value={text}/>
        <TouchableOpacity style={styles.buttonContainer} 
        onPress={handleAddTaskPress}>
          <Text style={styles.buttonText}>Create a task</Text>
        </TouchableOpacity>

        <View style={styles.divider}></View>
        <FlatList
          data={tasks}
          renderItem={({item}) => (
          <View style={styles.taskContainer}> 
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity style={styles.taskDelete} onPress={() => handleDeleteTaskPress(item)}>
              <Text style={styles.taskDeleteText}>X</Text>
            </TouchableOpacity>
          </View>
          )}
          keyExtractor={(item) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

// Path: styles.js