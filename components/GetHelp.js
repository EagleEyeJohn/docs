import React from 'react'

function GetHelp() {
  return (
    <>
      <a className='text-primary' href='#need-help'>
        <h2 className='font-semibold text-xl mb-2 mt-3' id='need-help'>
          Need help?
        </h2>
      </a>
      <p>
        Get help from <a href='https://support.planetscale.com'>the PlanetScale support team</a>, or join our&nbsp;
        <a href='https://github.com/planetscale/discussion/discussions'>GitHub discussion board</a> to see how others
        are using PlanetScale.
      </p>
    </>
  )
}

export default GetHelp
