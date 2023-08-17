import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import Task from './components/Task'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>
                    Today's tasks
                </Text>
                <View style={styles.items}>
                    <Task text={'Task 1'}></Task>
                    <Task text={'Task 2'}></Task>
                    <Task text={'Task 3'}></Task>
                    <Task text={'Task 4'}></Task>
                </View>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput style={styles.input} placeholder={'Add new task'}/>
                <TouchableOpacity>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
    },
    tasksWrapper: {
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    items: {
        marginTop: 30
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {},
    addWrapper: {},
    addText: {},
});
