import { useContext } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { ToDoBoard } from '../components/ToDoBoard';
import { DoingBoard } from '../components/DoingBoard';
import { DoneBoard } from '../components/DoneBoard';
import { NewBoard } from '../components/NewBoard';
import { TaskContext } from '../contexts/TaskContext';

export default function Home() {
  const { boards } = useContext(TaskContext);

  return (
    <>
      <Head>
          <title>Taskboard | Home</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Welcome</h1>

      <NewBoard />
      {boards.map((board, id) => {
        return (
          <section key={id}>
          
            <p>{board}</p>
            <div className={styles.container} key={id}>
              <ToDoBoard fromBoard={board}/>
              <DoingBoard fromBoard={board}/>
              <DoneBoard fromBoard={board}/>
            </div>
          </section>
        )
      })}
    </>
  )
}
