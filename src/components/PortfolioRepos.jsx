import React from 'react'
import { useState, useEffect } from "react";

export default function PortfolioRepos() {

  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/mrsluggan/repos')
      .then(response => response.json())
      .then((data) => {
        setRepos(data);
        console.log(data);
      })
  }, [])


  return (
    <>
      <div className='grid xl:grid-cols-3 content-start gap-10 mt-5 lg:grid-cols-1'>
        {repos
          .filter((repo) => {
            return !(repo.name.includes("Mrsluggan") ||
              repo.name.includes("ChessJs")
              ||
              repo.name.includes("ticTacToeJs")
              ||
              repo.name.includes("Eget-API-grupp-2")
              ||
              repo.name.includes("Diary")
              ||
              repo.name.includes("Spa-med-spa")
              ||
              repo.name.includes("ticTacToeJs")
              ||
              repo.name.includes("Movie-Explorer")
              ||
              repo.name.includes("Spring-Boot-security-Login")
              ||
              repo.name.includes("Spa-med-spa")
            );
          })
          .map((repo) => (
            <div key={repo.id} className='w-full h-full flex flex-1 flex-col'>
              <p className='text-3xl mb-5'>{repo.name}</p>
              <p>{repo.description}</p>
              <a className='block  text-bottom  hover:text-red-500' href={repo.html_url} target="_blank" rel="noreferrer">Link to Repo</a>
            </div>



          ))
        }
      </div>





    </>

  )
}

