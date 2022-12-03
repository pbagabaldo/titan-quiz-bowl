import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Settings() {

  const [name1,setName1] = useState("Player1")
  const [name2,setName2] = useState("Player2")

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Titan Quiz Bowl</title>
        <link rel="icon" href="/tuffyimage.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>  
            Settings
        </h1>
        <h2> Welcome to the settings page, {name1} and {name2}!</h2>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        input: {color: 'white'}
      }}
      noValidate
      autoComplete="off"
      >
        <TextField 
        label="Enter Name" 
        variant="filled" 
        color="secondary" 
        focused

        value={name1}
        onChange={(e) => setName1(e.target.value)}

        />
        <TextField 
        label="Enter Name" 
        variant="filled" 
        color="warning" 
        focused 

        value={name2}
        onChange={(e) => setName2(e.target.value)}
        
        />
      </Box>

        <div className={styles.grid}>
          {/* Change name */}
          <a className={styles.card}>
          <div onClick={handleSubmit}>
            <h2>Change Name</h2>
          </div>
          </a>
          
          {/* Back to home screen*/}
          <Link href="/" >
          <a className={styles.card}> <h2>Home &rarr;</h2> </a>
          </Link>

        </div>


      </main> 

      <footer className={styles.footer}>
        <a>
          Titan Quiz Bowl 2022
        </a>
      </footer>
    </div>
  )
}


  