import { StyleSheet} from "react-native";
export const appStyles = StyleSheet.create(
  {
    container: {
      flex: 1,
      marginTop:64,
      marginHorizontal: 16,
    },
    title:{
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 32,
    },
    subTitle:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#666',
      marginTop: 32,
    },
    input:{
      borderWidth: 1,
      borderColor: '#999',
      borderRadius: 4,
      padding: 8,
      marginTop: 32,
      width: '100%',
      fontSize: 18,
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    buttonContainer:{
      backgroundColor: '#7159c1',
      paddingVertical:12,
      paddingHorizontal: 16,
      borderRadius: 6,
      marginTop: 8,
      alignItems: 'center',
      alignSelf: 'stretch',
    },  
    buttonText:{
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    divider:{
      height: 1,
      backgroundColor: '#ddd',
      marginVertical: 32,
    },
    taskContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottomWidth:1,
        borderColor:'#ddd',
        paddingVertical: 12,
    },
    taskText:{
      fontSize: 18,
    },
    taskDelete:{
        width: 23,
        height: 23,
        borderRadius:13,
        backgroundColor:'red',
        justifyContent:'space-between'
    },
    taskDeleteText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
  }
);
