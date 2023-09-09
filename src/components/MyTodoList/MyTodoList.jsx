import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./myTodoList.module.css";

const MyTodoList = () => {
    const [todos, setTodos] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                setTodos(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleDelete = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDeleting: true };
            }
            return todo;
        });
        setTodos(updatedTodos);

        
        setTimeout(() => {
            const filteredTodos = todos.filter((todo) => todo.id !== id);
            setTodos(filteredTodos);
        }, 500);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredTodos = todos.filter((todo) => {
        return todo.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className={style.todo}>
            <div className={style.todo__inputs}>
                <input
                    className={style.todo__input}
                    type="text"
                    value={search}
                    onChange={handleSearch}
                />
            </div>
            <nav className={style.todo__navbar}>
                <ul className={style.todo__list}>
                    {filteredTodos.map((todo) => (
                        <li
                            className={`${style.list__item} ${
                                todo.isDeleting ? style["fade-out"] : ""
                            }`}
                            key={todo.id}
                        >
                            <p>
                                <span>{todo.id}.</span> {todo.title}
                            </p>
                            <button
                                className={style.list__btn}
                                onClick={() => handleDelete(todo.id)}
                            >
                                DELETE
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MyTodoList;
