import './style.css'

import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TaskContainer from "../../components/TaskContainer";
import TaskItem from "../../components/TaskItem";

interface Task {
    title: string;
    done: boolean;
}

export default function TaskManager() {

    const taskDefault = { title: 'learn React', done: false }

    const [tasks, setTasks] = useState<Task[]>([taskDefault]);
    const [taskTitle, setTaskTitle] = useState<string>("")

    function addTask(event: React.FormEvent) {
        event.preventDefault();

        setTasks([
            ...tasks,
            {
                title: taskTitle,
                done: false
            },
        ]);

        setTaskTitle("")
    }

    function finishTask(position: number) {
        const newList = [...tasks];

        newList[position].done = true;

        setTasks(newList);
    }

    function removeTask(position: number) {
        const newList = [...tasks];

        newList.splice(position, 1)

        setTasks(newList);
    }

    const pageConfigs = {
        buttonColor: sessionStorage.getItem('buttonColor')
    }

    useEffect(() => {
        if(tasks.length >= 10) {
            // alert("You've added 10 taks")
        }
    }, [tasks]);

    return (
        <>
        <Header />
        <main>
            <section className="task-manager">

                <h1>📝 Task Manager</h1>

                <form id="new-task" onSubmit={addTask}>
                    <input type="text" onChange={(event) => setTaskTitle(event.target.value)} value={taskTitle}/>
                    <Button text="add"
                    color={pageConfigs.buttonColor as string}/>
                </form>

                <TaskContainer>
                    {tasks.map((task: Task, position: number) => {
                        return (
                            <TaskItem
                            key={position}
                            title={task.title}
                            done={task.done}
                            finishTask={() => finishTask(position)}
                            removeTask={() => removeTask(position)}
                            ></TaskItem>
                        )
                    })}
                </TaskContainer>
            </section>
        </main>
        </>
    )
}