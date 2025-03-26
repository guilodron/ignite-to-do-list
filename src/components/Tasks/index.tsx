import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Counter } from "./Counter"
import { Task } from "./Task"
import { TaskDTO } from "../../Dto/Task"
import { EmptyList } from "./EmptyList"

interface TasksDTO {
    tasks: Array<TaskDTO>;
    handleUpdateTask: (id: string) => void;
    handleDeleteTask: (id: string) => void;
}

export const Tasks = ({tasks, handleDeleteTask,handleUpdateTask}: TasksDTO) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.counters}>
                <Counter 
                    color="#4EA8DE"
                    text="Criadas"
                    number={tasks.length}
                />
                <Counter 
                    color="#8284FA"
                    text="Concluídas"
                    number={tasks.filter(tasks => tasks.active).length}
                />
            </View>
            {tasks.length ?
                tasks.map(task => (
                    <Task 
                        onCheck={() => handleUpdateTask(task.id)}
                        onDelete={() => handleDeleteTask(task.id)}
                        key={task.id} 
                        active={task.active}
                        text={task.text}
                    />
    
                )) : 
                <EmptyList />
            }
        </View>
    )
}