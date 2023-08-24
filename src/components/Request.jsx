import React from 'react'

function Request() {
  return (
    <div className='rcontainer'>
      <div className='rcontent'>
        <div className='rheader'>
            <h1>Unable To Find the Right category?</h1>
            <h2>Don't Worry,We Got You</h2>
            <p>Just fill the form and post your work request,It will be notified to the professional and they will reach you</p>
        </div>
        <div className='rform'>
            <form>
                <div>
                <label for='type'>Work Type  <span>(Example:civil,eletrical)</span> </label><br/>
                <input name='type' type='text'></input><br/><br/><br/>
                </div>
                <div>
                <label for='description' >Description  <span>(Descripe about the work)</span></label><br/>
                <input name='description'></input><br/><br/><br/>
                </div>
                <div>
                <label for='image' >Image</label><br/>
                <input name='image' type='file' required></input>
                </div>
                <div>
                    <button type='submit'>submit</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Request
