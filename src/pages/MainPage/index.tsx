import { Text, View } from "react-native"
import { styles } from "./styles"
import { Header } from "../../components/Header"
import { SearchField } from "../../components/SearchField"
import { Tasks } from "../../components/Tasks"
import { useState } from "react"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'
import { TaskDTO } from "../../Dto/Task"

export const MainPage = () => {

    const [tasks, setTasks] = useState<Array<TaskDTO>>([]);
    
    const handleDeleteTask = (id: string) => {
        setTasks(tasks.filter(task => task.id != id))
    }
    
    const handleAddTask = (name: string) => {
        if(name == '')
            return
        const task = {
            id: uuidv4(),
            text: name,
            active: false
        }
        setTasks([...tasks, task])
    }
    
    const handleUpdateTask = (id: string) => {
        setTasks(tasks.map(task => {
            if(task.id == id) {
                task.active = !task.active
            }
            return task
        }))
    }
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.content}>
                <SearchField 
                    handleAddTask={handleAddTask}
                />
                <Tasks 
                    handleDeleteTask={handleDeleteTask}
                    handleUpdateTask={handleUpdateTask}
                    tasks={tasks}/>
            </View>
        </View>
    )
}